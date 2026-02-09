import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "../../api/Products.api";
import type { Product } from "../type";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateProduct,

    onMutate: async (updatedProduct: Product) => {
      await queryClient.cancelQueries({ queryKey: ["products"] })

      const previousProducts =
        queryClient.getQueryData<Product[]>(["products"])

      queryClient.setQueryData<Product[]>(
        ["products"],
        (old = []) =>
          old.map((p) =>
            p.id === updatedProduct.id
              ? updatedProduct
              : p
          )
      )

      return { previousProducts }
    },

    onError: (_err, _product, context) => {
      if (context?.previousProducts) {
        queryClient.setQueryData(
          ["products"],
          context.previousProducts
        )
      }
    },
  })
}
