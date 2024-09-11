import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signup = createAsyncThunk('admin/signup', async (adminData) => {
    try {
        const response = await axios.post(`http://localhost:8000/signup`, adminData);
        return response.data;
    } catch (error) {
        return error;
    };
});

export const login = createAsyncThunk('admin/login', async (adminData) => {
    try {
        const response = await axios.post(`http://localhost:8000/login`, adminData);
        return response.data;
    } catch (error) {
        return error;
    };
});

const initialState = {
    admin: [],
    status: 'Idle',
    error: null
}

const adminSlice = createSlice({
    name: 'Admin',
    initialState: initialState,
    reducers: {
        logout: (state) => {
            state.admin = [];
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(signup.pending, (state) => {
            state.status = 'Loading';
        })
        .addCase(signup.fulfilled, (state, action) => {
            state.admin = action.payload;
            state.status = 'Successful';
            state.error = null;
        })
        .addCase(signup.rejected, (state, action) => {
            state.admin = [];
            state.status = 'Failed';
            state.error = action.error.message;
        })
        .addCase(login.pending, (state) => {
            state.status = 'Loading';
        })
        .addCase(login.fulfilled, (state, action) => {
            state.admin = action.payload;
            state.status = 'Successful';
            state.error = null;
        })
        .addCase(login.rejected, (state, action) => {
            state.admin = [];
            state.status = 'Failed';
            state.error = action.error.message;
        })
    }
});

export const { logout } = adminSlice.actions;
export default adminSlice.reducer;