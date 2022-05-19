// The entry file of your WebAssembly module.

import { Order } from "./model";

export function add(a: i32, b: i32): i32 {
    return a + b;
}

//npx near call $(cat neardev/dev-account) create '{"product":"milk","unit":6}' --accountId malibil.testnet
export function create(product: string, unit: u32): Order {
    return Order.insert(product, unit);
}
