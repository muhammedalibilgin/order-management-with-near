import React from "react";

const Order = ({ id, product, unit, completed, index }) => {
    return (
        <>
            <div style={{ margin: "0px", padding: "0px" }}>
                <b> Order ={`>`}</b>
                {`${index}`}
                {" .. "}
                {id}
                {" .. "}
                {product}
                {" .. "}
                {`${completed}`}
                {" .. "}
                {unit}
            </div>
        </>
    );
};

export default Order;
