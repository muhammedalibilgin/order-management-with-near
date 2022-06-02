import { useState } from "react";

const CreateOrder = ({ contract }) => {
    const [product, setProduct] = useState("");
    const [unit, setUnit] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        // invoke the smart contract's create method
        const order = await contract.create({ product: product, unit: Number(unit) });
        console.log(2);
        setProduct("");
        setUnit("");
        setLoading(false);
        console.log(3);

        console.log("order=>", order);
        window.location.reload();
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
