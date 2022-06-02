import "./css/App.css";

import "regenerator-runtime/runtime";
import React from "react";
import PropTypes from "prop-types";

import Head from "./components/Head";
import CurrentUser from "./components/CurrentUser";

function App({ contract, currentUser, nearConfig, wallet }) {
    const signIn = () => {
        wallet.requestSignIn(nearConfig.contractName, "NEAR ToDo List");
    };

    return (
        <div className="App">
            {/* {console.log(contract.create({ product: "hah", unit: 12 }))} */}

            <br />
            <Head />
            <hr />
            <br />
            {currentUser ? (
                <div>
                    <CurrentUser contract={contract} currentUser={currentUser} nearConfig={nearConfig} wallet={wallet} />
                    <br />
                    <br />
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
