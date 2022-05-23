import { PersistentUnorderedMap, math } from "near-sdk-as";

export let orders = new PersistentUnorderedMap<u32, Order>("order");

@nearBindgen
export class Order {
    id: u32;
    product: string;
    unit: i32;
    completed: bool;

    constructor(product: string, unit: i32) {
        this.id = math.hash32<string>(product);
        this.product = product;
        this.unit = unit;
        this.completed = false;
    }

    //create
    static insert(product: string, unit: u32): Order {
        const order = new Order(product, unit);

        orders.set(order.id, order);
        return order;
    }

    //get a order by id
    static findById(id: u32): Order {
        return orders.getSome(id);
    }

    // get all list
    static find(start: u32, end: u32): Order[] {
        return orders.values(start, start + end);
    }
}
