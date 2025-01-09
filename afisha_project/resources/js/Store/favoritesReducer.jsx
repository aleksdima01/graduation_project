import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchFavorites = createAsyncThunk(
    'favorites/fetchFavorites',
    async (data, thunkApi) => {
        try {
            const response = await fetch(`http://127.0.0.1:8081/api/fetchfavorites/?user=${data.userId}`, {
                method: "GET",
            });
            if (!response.ok) {
                throw new Error("Something go wrong");
            }
            return await response.json();
        } catch (error) {
            thunkApi.rejectWithValue(error.message)
        }

    })
const initialState = {
    favorites: [],
    loading: false,
    error: null,
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFavorites.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFavorites.fulfilled, (state, action) => {
                state.loading = false;
                state.favorites = action.payload;
            })
            .addCase(fetchFavorites.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default favoritesSlice.reducer;