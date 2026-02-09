import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/Products.api";
import type { Product } from "../type";

export const useProducts  = () => {
    return useQuery<Product[], Error> ({
        queryKey: ["products"],
        queryFn: getProducts
    })
}