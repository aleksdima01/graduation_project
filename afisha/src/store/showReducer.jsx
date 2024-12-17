import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchShowUsers = createAsyncThunk(
    'users/fetchShowUsers',
    async (id, thunkApi) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
            if (!response.ok) {
                throw new Error("Something go wrong");
            }
            return await response.json();
        } catch (error) {
            thunkApi.rejectWithValue(error.message)
        }

    })
const initialState = {
    user: {},
    loading: false,
    error: null,
    show: false
};


const showUserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        toggleShow: (state, action) => {
            if (state.user.id === action.payload || Object.keys(state.user).length === 0)
                state.show = !state.show
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchShowUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchShowUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(fetchShowUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export const { toggleShow } = showUserSlice.actions;
export default showUserSlice.reducer;