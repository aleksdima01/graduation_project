import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchEvent = createAsyncThunk(
    'event/fetchEvent',
    async (data, thunkApi) => {
        //const { page, city } = data
        try {
            const response = await fetch(`public-api/v1.4/events/${data.id}/?lang=&fields=&expand=images`, {
                // const response = await fetch(`public-api/v1.4/events/?lang=&fields=id,dates,publication_date,title,short_title,place,location,images,site_url&expand=&order_by=-publication_date&text_format=&ids=&page=${data.page}&page_size=21&location=${data.city}&actual_since=${Date.now() / 1000}`, {
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
    event: [],
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