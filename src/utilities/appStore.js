import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import suggestionSlice from "./suggestionSlice";
import videoSlice from "./videoSlice";

const appStore = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        suggestion: suggestionSlice,
        popularVideos: videoSlice,
    },
});

export default appStore;
