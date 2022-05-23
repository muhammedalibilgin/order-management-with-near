import { create, getById, get } from "../index";
import { Order, orders } from "../model";

describe("contract methods", () => {
    it("creates a order", () => {
        // call the create method
        const order1 = create("milk", 5);

        // lookup in the PersistentUnorderedMap for our order
        // expect the persisted order to equal the order returned
        // by the create method above.
        expect(orders.getSome(order1.id)).toStrictEqual(order1);
    });

    it("gets a order by id", () => {
        //creates 3  order
        const a = Order.insert("apple", 6);
        const b = Order.insert("orange", 8);
        const c = Order.insert("eggs", 30);

        //gets each order by it
        expect(getById(a.id)).toStrictEqual(a);
        expect(getById(b.id)).toStrictEqual(b);
        expect(getById(c.id)).toStrictEqual(c);
    });

    it("get a list order", () => {
        const orders = new Array<number>(30).fill(0).map<Order>((_, i) => Order.insert("order" + i.toString(), 5));

        expect(get(20)).toStrictEqual(orders.slice(20, 30));
        expect(get(0, 10)).toStrictEqual(orders.slice(0, 10));
        expect(get(10, 10)).toStrictEqual(orders.slice(10, 20));
    });
});

describe("test my test", () => {
    it("should be 42", (): void => {
        // put your expectations here
        expect<i32>(2 + 4).toBe(6);
    });
});
