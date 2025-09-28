import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import suggestionSlice from "./suggestionSlice";
import videoSlice from "./videoSlice";
import searchSlice from "./searchSlice";
const appStore = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        suggestion: suggestionSlice,
        popularVideos: videoSlice,
        search: searchSlice,
    },
});

export default appStore;
