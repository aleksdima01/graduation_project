import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAfisha = createAsyncThunk(
    'afisha/fetchAfisha',
    async (_, thunkApi) => {
        try {
            const response = await fetch("public-api/v1.4/events/?lang=&fields=&expand=&order_by=&text_format=&ids=&location=spb", {
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
    afisha: [],
    loading: false,
    error: null,
};

const afishaSlice = createSlice({
    name: "afisha",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAfisha.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAfisha.fulfilled, (state, action) => {
                state.loading = false;
                state.afisha = action.payload;
            })
            .addCase(fetchAfisha.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default afishaSlice.reducer;