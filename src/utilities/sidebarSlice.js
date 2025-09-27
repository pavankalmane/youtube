import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        isOpen: true
    },
    reducers: {
        toggleSidebar: (state) => {
            state.isOpen = !state.isOpen;
        },
        menuClose: (state) => {
            state.isOpen = false;
        }

    }
});

export const { toggleSidebar, menuClose } = sidebarSlice.actions;
export default sidebarSlice.reducer;