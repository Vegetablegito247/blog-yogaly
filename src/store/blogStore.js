import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlog = createAsyncThunk('blog/FetchBlog', async () => {
    try {
        const response = await axios.get(`http://localhost:8000/getBlog`);
        return response.data;
    } catch (error) {
        throw error.response?.data.error;
    };
})

export const fetchBlogView = createAsyncThunk('blog/fetchBlogView', async (id) => {
    try {
        const response = await axios.get(`http://localhost:8000/getBlogView/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data.error;
    };
})

export const postBlog = createAsyncThunk('blog/PostBlog', async (blogData, { getState }) => {
    try {
        const { token } = getState().admin.admin;

        const response = await axios.post(`http://localhost:8000/postBlog`, blogData, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });

        return response.data;
    } catch (error) {
        throw error.response?.data.error;
    }
});

export const delBlog = createAsyncThunk('blog/DeleteBlog', async (blogId, { getState }) => {
    try {
        const { token } = getState().admin.admin;

        const response = await axios.delete(`http://localhost:8000/deleteBlog/${blogId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        return response.data
    } catch (error) {
        throw error.response?.data.error;
    };
});

const initialState = {
    blog: [],
    blogView: {},
    status: 'Idle',
    error: null
}

const blogSlice = createSlice({
    name: 'Blog',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchBlog.pending, (state) => {
            state.status = 'Loading'
        })
        .addCase(fetchBlog.fulfilled, (state, action) => {
            state.blog = action.payload;
            state.status = 'Successful';
            state.error = null;
        })
        .addCase(fetchBlog.rejected, (state, action) => {
            state.blog = [];
            state.status = 'Failed';
            state.error = action.error.message;
        })
        .addCase(fetchBlogView.pending, (state) => {
            state.status = 'Loading'
        })
        .addCase(fetchBlogView.fulfilled, (state, action) => {
            state.blogView = action.payload;
            state.status = 'Successful';
            state.error = null;
        })
        .addCase(fetchBlogView.rejected, (state, action) => {
            state.blogView = {};
            state.status = 'Failed';
            state.error = action.error.message;
        })
        .addCase(postBlog.pending, (state) => {
            state.status = 'Loading'
        })
        .addCase(postBlog.fulfilled, (state, action) => {
            state.blog.push(action.payload);
            state.status = 'Successful';
            state.error = null;
        })
        .addCase(postBlog.rejected, (state, action) => {
            state.blog = [];
            state.status = 'Failed';
            state.error = action.error.message;
        })
        .addCase(delBlog.pending, (state) => {
            state.status = 'Loading'
        })
        .addCase(delBlog.fulfilled, (state, action) => {
            state.blog = state.blog.filter((blogId) => blogId._id !== action.payload._id);
            state.status = 'Successful';
            state.error = null;
        })
        .addCase(delBlog.rejected, (state, action) => {
            state.blog = [];
            state.status = 'Failed';
            state.error = action.error.message;
        })
    }
});

export default blogSlice.reducer;