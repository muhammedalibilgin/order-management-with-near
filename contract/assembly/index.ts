// The entry file of your WebAssembly module.

import { Order } from "./model";

export function add(a: i32, b: i32): i32 {
    return a + b;
}

//npx near call $(cat neardev/dev-account) create '{"product":"milk","unit":6}' --accountId malibil.testnet
export function create(product: string, unit: i32): Order {
    return Order.insert(product, unit);
}

//find by id
export function getById(id: u32): Order {
    return Order.findById(id);
}

//get all list
export function get(start: u32, end: u32 = 10): Order[] {
    return Order.find(start, end);
}
