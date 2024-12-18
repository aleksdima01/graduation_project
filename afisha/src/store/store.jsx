import { configureStore } from "@reduxjs/toolkit";
import showAfishaReducer from './afishaReducer'

const store = configureStore({
    reducer: {
        afisha: showAfishaReducer,

    },
});

export default store;