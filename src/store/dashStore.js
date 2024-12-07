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
            state.openBlogForm = !state.openBlogForm;
        },
        handleOpenClassForm: (state) => {
            if (state.openBlogForm || state.openSideMenu) {
                state.openBlogForm = false;
                state.openSideMenu = false;
            }
            state.openClassForm = !state.openClassForm;
        },
        handleOpenPayForm: (state) => {
            if (state.openPayForm || state.openSideMenu) {
                state.openPayForm = false;
                state.openSideMenu = false;
            }
            state.openPayForm = !state.openPayForm;
        },
        handleDashSide: (state) => {
            if (state.openBlogForm || state.openClassForm) {
                state.openBlogForm = false;
                state.openClassForm = false;
            }
            state.openSideMenu = !state.openSideMenu;
        },
    }
});

export const { handleOpenBlogForm, handleOpenClassForm, handleDashSide, handleOpenPayForm } = dashSlice.actions
export default dashSlice.reducer 