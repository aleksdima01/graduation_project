import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchEvent = createAsyncThunk(
    'event/fetchEvent',
    async (data, thunkApi) => {
        try {
            const response = await fetch(`http://afisha:8081/api/fetcheachevent/?id=${data.id}&lang=&fields=&expand=images`, {
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
    event: {},
    loading: false,
    error: null,
    // city: 'spb',
};

const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvent.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.event = [];
            })
            .addCase(fetchEvent.fulfilled, (state, action) => {
                state.loading = false;
                state.event = action.payload;
                // state.city = action.payload.results[0].location.slug
            })
            .addCase(fetchEvent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default eventSlice.reducer;