import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
    name: "suggestion",
    initialState: {
        Suggestions: []
    },
    reducers: {
        setSuggestions: (state, action) => {
            state.Suggestions = action.payload;
        }
    }
});

export const { setSuggestions } = suggestionSlice.actions;
export default suggestionSlice.reducer;