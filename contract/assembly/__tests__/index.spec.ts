import { create } from "../index";
import { orders } from "../model";

describe("contract methods", () => {
    it("creates a order", () => {
        // call the create method
        const order1 = create("milk", 5);

        // lookup in the PersistentUnorderedMap for our order
        // expect the persisted order to equal the order returned
        // by the create method above.
        expect(orders.getSome(order1.id)).toStrictEqual(order1);
    });
});

describe("test my test", () => {
    it("should be 42", (): void => {
        // put your expectations here
        expect<i32>(2 + 4).toBe(6);
    });
});
