// src/index.js
import React from "react";
import App from "./App";
import "./index.css";
import getConfig from "./config.js";
import * as nearAPI from "near-api-js";

import * as ReactDOMClient from "react-dom/client";

// buffer is not defined---<
import { Buffer } from "buffer";
Buffer.from("anything", "base64");
window.Buffer = window.Buffer || require("buffer").Buffer;
// buffer is not defined---<

// Initializing contract
async function initContract() {
    const nearConfig = getConfig(process.env.NODE_ENV || "testnet");

    // Initializing connection to the NEAR TestNet
    const near = await nearAPI.connect({
        deps: {
            keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
        },
        ...nearConfig,
    });

    // Needed to access wallet
    const walletConnection = new nearAPI.WalletConnection(near);

    // Load in account data
    let currentUser;
    if (walletConnection.getAccountId()) {
        currentUser = {
            accountId: walletConnection.getAccountId(),
            balance: (await walletConnection.account().state()).amount,
        };
    }

    // Initializing our contract APIs by contract name and configuration
    const contract = await new nearAPI.Contract(walletConnection.account(), nearConfig.contractName, {
        // View methods are read-only – they don't modify the state, but usually return some value
        viewMethods: ["get"],
        // Change methods can modify the state, but you don't receive the returned value when called
        changeMethods: ["create", "update", "del"],
        // Sender is the account ID to initialize transactions.
        // getAccountId() will return empty string if user is still unauthorized
        sender: walletConnection.getAccountId(),
    });

    return { contract, currentUser, nearConfig, walletConnection };
}

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

window.nearInitPromise = initContract().then(({ contract, currentUser, nearConfig, walletConnection }) => {
    root.render(<App contract={contract} currentUser={currentUser} nearConfig={nearConfig} wallet={walletConnection} />);
});
