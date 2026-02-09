import { useMutation,useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../../api/Products.api"
import type { Product } from "../type";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteProduct,

    onMutate: async (id: number) => {
      await queryClient.cancelQueries({ queryKey: ["products"] })

      const previousProducts =
        queryClient.getQueryData<Product[]>(["products"])

      queryClient.setQueryData<Product[]>(
        ["products"],
        (old = []) => old.filter((p) => p.id !== id)
      )

      return { previousProducts }
    },

    onError: (_err, _id, context) => {
      if (context?.previousProducts) {
        queryClient.setQueryData(
          ["products"],
          context.previousProducts
        )
      }
    },
  })
}