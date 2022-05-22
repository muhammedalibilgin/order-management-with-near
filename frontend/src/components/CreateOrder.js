import { useState } from "react";

const CreateOrder = ({ contract }) => {
    const [product, setProduct] = useState("");
    const [unit, setUnit] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        console.log(1);

        // invoke the smart contract's create method
        const order = await contract.create({ product: product, unit: unit });
        console.log(2);
        setProduct("");
        setLoading(false);
        console.log(3);

        console.log("order=>", order);
    };

    return (
        <div>
            CreateOrder
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="give a order" value={product} onChange={({ target }) => setProduct(target.value)} />
                <br />
                <input type="number" placeholder="how many unit" value={unit} onChange={({ target }) => setUnit(target.value)} />
                <br />
                <button disabled={loading}>Create Order</button>
            </form>
        </div>
    );
};

export default CreateOrder;
