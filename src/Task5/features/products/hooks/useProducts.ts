import type { Product } from "../types/product.type";
import { fetchProducts } from "../../../api/products.api";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
    return useQuery<Product[]>({
         queryKey: ["products"],
         queryFn: fetchProducts
    })
}