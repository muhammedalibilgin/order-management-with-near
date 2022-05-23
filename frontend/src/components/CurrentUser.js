import React from "react";
import CreateOrder from "./CreateOrder";

const CurrentUser = ({ contract, currentUser, nearConfig, wallet }) => {
    const signOut = () => {
        wallet.signOut();
        window.location.replace(window.location.origin + window.location.pathname);
    };
    return (
        <div>
            <h1>Welcome:</h1>
            <h2>
                Account ID:
                <span id="account-id">{currentUser.accountId}</span>
                <br />
                Account Balance:
                <span id="account-id">{currentUser.balance / 1000000000000000000000000} </span>
                <br />
                <br />
                <button onClick={signOut}>Log out</button>
            </h2>
            <br />
            <hr />
            <CreateOrder contract={contract} />
        </div>
    );
};

export default CurrentUser;
