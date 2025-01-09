import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchAfisha = createAsyncThunk(
    'afisha/fetchAfisha',
    async (data, thunkApi) => {
        //const { page, city } = data
        try {
            const response = await fetch(`http://127.0.0.1:8081/api/getfetchinfo?lang=&fields=id,dates,publication_date,title,short_title,place,location,images,site_url&expand=&order_by=-publication_date&text_format=&ids=&page=${data.page}&page_size=21&location=${data.city}&actual_since=${Date.now() / 1000}`, {
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
    // city: 'spb',
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
                state.city = action.payload.results[0].location.slug
            })
            .addCase(fetchAfisha.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default afishaSlice.reducer;