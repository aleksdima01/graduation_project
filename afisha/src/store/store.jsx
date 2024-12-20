import { configureStore } from "@reduxjs/toolkit";
import showAfishaReducer from './afishaReducer'
import showEventReducer from './eventReducer'

const store = configureStore({
    reducer: {
        afisha: showAfishaReducer,
        event: showEventReducer,
    },
});

export default store;