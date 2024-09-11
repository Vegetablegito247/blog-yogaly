import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openBlogForm: false,
    openClassForm: false,
    openSideMenu: false
}

const dashSlice = createSlice({
    name: 'DashSlice',
    initialState: initialState,
    reducers: {
        handleOpenBlogForm: (state) => {
            if (state.openClassForm || state.openSideMenu) {
                state.openClassForm = false;
                state.openSideMenu = false;
                console.log(state.openBlogForm)
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
        handleDashSide: (state) => {
            if (state.openBlogForm || state.openClassForm) {
                state.openBlogForm = false;
                state.openClassForm = false;
            }
            state.openSideMenu = !state.openSideMenu;
        },
    }
});

export const { handleOpenBlogForm, handleOpenClassForm, handleDashSide } = dashSlice.actions
export default dashSlice.reducer 