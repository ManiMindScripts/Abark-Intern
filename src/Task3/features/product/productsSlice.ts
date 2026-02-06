import { createSlice } from "@reduxjs/toolkit";
import type { ProductState } from "./products.types";
import { fetchProducts } from "./productsApi";

const initialState: ProductState = {
    items: [],
    loading: false,
    error: null,
}
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false
                state.items = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload || "Failed to load products"
            })
    },
}
)
export default productsSlice.reducer