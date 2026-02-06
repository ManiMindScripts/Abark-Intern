import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../features/product/productsSlice"
import CartReducer from "../features/cart/cartSlice"

export const store = configureStore({
    reducer: {
        products: ProductsReducer,
        cart: CartReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch