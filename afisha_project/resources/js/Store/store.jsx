import { configureStore } from "@reduxjs/toolkit";
import showAfishaReducer from './afishaReducer'
import showEventReducer from './eventReducer'
import showFavoritesReducer from './favoritesReducer'

const store = configureStore({
    reducer: {
        afisha: showAfishaReducer,
        event: showEventReducer,
        favorites: showFavoritesReducer,
    },
});

export default store;