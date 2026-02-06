import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Product } from "./products.types";

export const fetchProducts = createAsyncThunk<
    Product[],
    void,
    { rejectValue: string }
>(
    "products/fetchProducts",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch(
                "https://dummyjson.com/products?limit=12"
            )
            if (!res.ok) {
                throw new Error("Failed to fetch products")
            }
            const data = await res.json()
            return data.products as Product[]
        } catch (error) {
            return rejectWithValue("Something went wrong")
        }
    }
)