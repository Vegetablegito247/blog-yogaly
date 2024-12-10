import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchClass = createAsyncThunk('class/fetchClass', async () => {
    try {
        const response = await axios.get(`https://yogaly-server.vercel.app/getClass`)
        return response.data;
    } catch (error) {
        throw error.response?.data.error;
    };
});

export const fetchClassView = createAsyncThunk('class/fetchClassView', async (id) => {
    try {
        const response = await axios.get(`https://yogaly-server.vercel.app/getClassView/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data.error;
    };
})

export const postClass = createAsyncThunk('class/postClass', async (classData, { getState }) => {
    try {
        const { token } = getState().admin.admin;

        const response = axios.post(`https://yogaly-server.vercel.app/postClass`, classData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data
    } catch (error) {
        throw error.response?.data.error;
    };
});

export const delClass = createAsyncThunk('class/delClass', async (classId, { getState }) => {
    try {
        const { token } = getState().admin.admin;

        const response = axios.delete(`https://yogaly-server.vercel.app/delClass/${classId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return (await response).data
    } catch (error) {
        throw error.response?.data.error;
    };
});

const initialState = {
    class: [],
    classView: {},
    status: 'Idle',
    error: null
};

const classSlice = createSlice({
    name: 'Class',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchClass.pending, (state) => {
            state.status = 'Loading';
        })
        .addCase(fetchClass.fulfilled, (state, action) => {
            state.class = action.payload;
            state.status = 'Successful';
            state.error = null;
        })
        .addCase(fetchClass.rejected, (state, action) => {
            state.class = [];
            state.status = 'Failed';
            state.error = action.error.message;
        })
        .addCase(fetchClassView.pending, (state) => {
            state.status = 'Loading';
        })
        .addCase(fetchClassView.fulfilled, (state, action) => {
            state.classView = action.payload;
            state.status = 'Successful';
            state.error = null;
        })
        .addCase(fetchClassView.rejected, (state, action) => {
            state.classView = {};
            state.status = 'Failed';
            state.error = action.error.message;
        })
        .addCase(postClass.pending, (state) => {
            state.status = 'Loading';
        })
        .addCase(postClass.fulfilled, (state, action) => {
            state.class.push(action.payload);
            state.status = 'Successful';
            state.error = null;
        })
        .addCase(postClass.rejected, (state, action) => {
            state.class = [];
            state.status = 'Failed';
            state.error = action.error.message;
        })
        .addCase(delClass.pending, (state) => {
            state.status = 'Loading';
        })
        .addCase(delClass.fulfilled, (state, action) => {
            state.class = state.class.filter((classId) => classId._id !== action.payload._id);
            state.status = 'Successful';
            state.error = null;
        })
        .addCase(delClass.rejected, (state, action) => {
            state.class = [];
            state.status = 'Failed';
            state.error = action.error.message;
        })
    }
});

export default classSlice.reducer