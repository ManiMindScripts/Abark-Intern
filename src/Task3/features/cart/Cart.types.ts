import type { Product } from "../product/products.types";

export interface CartItem extends Product{
  quantity: number
}
export interface CartState {
items: CartItem[]
}