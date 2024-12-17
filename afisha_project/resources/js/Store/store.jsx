import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './productsSlice'
import cartReducer from './cartSlice'

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
