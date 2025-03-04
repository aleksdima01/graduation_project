import { createAsyncThunk, } from "@reduxjs/toolkit";


export const fetchDeleteFromFavorites = createAsyncThunk(
    'favorites/fetchDeleteFromFavorites',
    async (data, thunkApi) => {
        try {
            const response = await fetch(`http://127.0.0.1:8081/api/deletefavorites/?user=${data.user}&favoriteid=${data.id}`, {
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