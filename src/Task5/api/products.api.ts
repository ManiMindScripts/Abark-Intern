import { api } from "./axios";
import type { Product } from "../features/products/types/product.type";

type ProductResponse = {
    products: Product[]
}

export const fetchProducts = async () : Promise<Product[]> => {
    const res = await api.get<ProductResponse>("/products")
    return res.data.products
}
