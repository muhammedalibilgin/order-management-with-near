import { PersistentUnorderedMap, math } from "near-sdk-as";

export let orders = new PersistentUnorderedMap<u32, Order>("order");

@nearBindgen
export class Order {
    id: u32;
    product: string;
    unit: u32;
    completed: bool;

    constructor(product: string, unit: u32) {
        this.id = math.hash32<string>(product);
        this.product = product;
        this.unit = this.unit;
        this.completed = false;
    }
}
