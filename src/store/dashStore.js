import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openBlogForm: false,
    openClassForm: false,
    openSideMenu: false,
    openPayForm: false
}

const dashSlice = createSlice({
    name: 'DashSlice',
    initialState: initialState,
    reducers: {
        handleOpenBlogForm: (state) => {
            if (state.openClassForm || state.openSideMenu) {
                state.openClassForm = false;
                state.openSideMenu = false;
            }
            else {
                state.openBlogForm = true;
            }
        },
        handleOpenClassForm: (state) => {
            if (state.openBlogForm || state.openSideMenu) {
                state.openBlogForm = false;
                state.openSideMenu = false;
            }
            else {
                state.openClassForm = true;
            }
        },
        handleOpenPayForm: (state) => {
            if (state.openPayForm || state.openSideMenu) {
                state.openPayForm = false;
                state.openSideMenu = false;
            } else {
                state.openPayForm = true;
            }
        },
        handleDashSide: (state) => {
            if (state.openBlogForm || state.openClassForm) {
                state.openBlogForm = false;
                state.openClassForm = false;
            }
            else {
                state.openSideMenu = true;
            }
        },
    }
});

export const { handleOpenBlogForm, handleOpenClassForm, handleDashSide, handleOpenPayForm } = dashSlice.actions
export default dashSlice.reducer 