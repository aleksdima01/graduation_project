import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    afishaList: [],
    loading: false,
    error: null,
};

export const fetchAfisha = createAsyncThunk('afisha/fetchAfisha',
    async (_, thunkApi) => {              // {rejectWithValue,getState,dispatch}=thunkApi функции внутри thunkApi
        try {
            const response = await fetch("./data.json");
            if (!response.ok) {
                throw new Error({ message: response.status });
            }
            const data = await response.json();
            console.log(data);
            return data
            //попадет в payload
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

const afishaSlice = createSlice({
    initialState,
    name: "afisha",
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAfisha.pending, (state) => {  //ожидание
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAfisha.fulfilled, (state, action) => {  //успешно
                state.loading = false;
                state.afishaList = action.payload;
            })
            .addCase(fetchAfisha.rejected, (state, action) => { //ошибка
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default afishaSlice.reducer;