import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const subscribe = createAsyncThunk('subscriber/subscribe', async (sub) => {
    try {
        const response = await axios.post(`${process.env.API_URL}/subscribe`, sub);
        return response.data;
    } catch (err) {
        return err;
    };
});

const initialState = {
    subscribed: false,
    status: 'Idle',
    error: null
}

const subscribeSlice = createSlice({
    name: 'Subscribe',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(subscribe.pending, (state) => {
            state.status = 'Loading';
        })
        .addCase(subscribe.fulfilled, (state) => {
            state.status = 'Successful';
            state.subscribed = true;
            state.error = null;
        })
        .addCase(subscribe.rejected, (state, action) => {
            state.status = 'Failed';
            state.subscribed = false;
            state.error = action.error.message;
        })
    }
});

export default subscribeSlice.reducer;