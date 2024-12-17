import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './userReducer'
import showUserReducer from './showReducer'
import showAfishaReducer from './afishaReducer'

const store = configureStore({
    reducer: {
        users: usersReducer,
        user: showUserReducer,
        afisha: showAfishaReducer,

    },
});

export default store;