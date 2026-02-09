import { api } from "./axios";
import type { NewProduct,Product } from "../features/type";

interface ProductsResponse{
    products: Product[]
}

export const getProducts = async () : Promise<Product[]> => {
    const res = await api.get<ProductsResponse>("/products?limit=25")
    return res.data.products
}

export const addProduct = async (
    product: NewProduct
) : Promise<Product> => {
    const res = await api.post<Product>("/products/add",product)
    return res.data
}

export const updateProduct = async (
    product: Product
): Promise<Product> => {
    const res = await api.put<Product>(
        `/products/${product.id}`,
        {
            title: product.title,
            description: product.description,
            price: product.price,
        }
    )
    return res.data
}
export const deleteProduct = async (id: number):Promise<{ id: number }>=> {
    const res = await api.delete(`/products/${id}`)
    return res.data
}