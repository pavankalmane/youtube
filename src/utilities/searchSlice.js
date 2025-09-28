import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const searchSlice = createSlice({
    name : 'search',
    initialState : {},
    reducers :{
        setSearchResults : (state,action) =>{
            state = Object.assign(state,action.payload);
     },
    }
});
export const {setSearchResults} = searchSlice.actions;
export default searchSlice.reducer;