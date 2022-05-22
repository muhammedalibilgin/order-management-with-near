import "./App.css";

import "regenerator-runtime/runtime";
import React from "react";
import PropTypes from "prop-types";
import CreateOrder from "./components/CreateOrder";

function App({ contract, currentUser, nearConfig, wallet }) {
    const signIn = () => {
        wallet.requestSignIn(nearConfig.contractName, "NEAR ToDo List");
    };

    const signOut = () => {
        wallet.signOut();
        window.location.replace(window.location.origin + window.location.pathname);
    };

    return (
        <div className="App">
            {/* {console.log(contract.create({ product: "hah", unit: 12 }))} */}

            <h1>NEAR Order App</h1>
            <hr />
            <br />
            {currentUser ? (
                <div>
                    <h2>
                        Account ID:
                        <span id="account-id">{currentUser.accountId}</span>
                        <br />
                        Account Balance:
                        <span id="account-id">{currentUser.balance / 1000000000000000000000000} </span>
                        <br />
                        <br />
                        <button onClick={signOut}>Log out</button>
                        <br />
                        <hr />
                        <CreateOrder contract={contract} />
                    </h2>
                </div>
            ) : (
                <div>
                    Sign In To Use The App:
                    <br />
                    <br />
                    <button onClick={signIn}>Log in</button>
                </div>
            )}
        </div>
    );
}

App.propTypes = {
    contract: PropTypes.shape({
        create: PropTypes.func.isRequired,
        get: PropTypes.func.isRequired,
        update: PropTypes.func.isRequired,
        del: PropTypes.func.isRequired,
    }).isRequired,
    currentUser: PropTypes.shape({
        accountId: PropTypes.string.isRequired,
        balance: PropTypes.string.isRequired,
    }),
    nearConfig: PropTypes.shape({
        contractName: PropTypes.string.isRequired,
    }).isRequired,
    wallet: PropTypes.shape({
        requestSignIn: PropTypes.func.isRequired,
        signOut: PropTypes.func.isRequired,
    }).isRequired,
};

export default App;
