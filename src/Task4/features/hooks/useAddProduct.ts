import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../../api/Products.api";
import type { NewProduct,Product } from "../type";

export const useAddProduct = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: addProduct,

        onMutate: async (newProduct: NewProduct) => {
            await queryClient.cancelQueries({queryKey: ["products"]})

            const previousProducts =
               queryClient.getQueryData<Product[]>(["products"]) 

            const optimisticProduct: Product = {
                id: Date.now(),
                ...newProduct,
            }
            queryClient.setQueryData<Product[]>(
                ["products"],
                (old = []) => [optimisticProduct, ...old])
            return {previousProducts}
        },
        onError: (_err, _newProduct, context)  => {
            if(context?.previousProducts) {
                queryClient.setQueryData(
                     ["products"],
                     context.previousProducts
                )
            }
        }
    })
}