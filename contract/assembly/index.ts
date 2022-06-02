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

//npx near view $(cat neardev/dev-account) get '{"start":0}' --accountId malibil.testnet
export function get(start: u32, end: u32 = 20): Order[] {
    return Order.find(start, end);
}
