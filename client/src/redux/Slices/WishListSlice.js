import { createSlice } from "@reduxjs/toolkit";


export const WishListSlice = createSlice({
    name:"WishList",
    initialState:[],
    reducers:{
        Like:(state,action) => {
            state.push(action.payload);
        },
        dislike:(state,action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

export const {Like,dislike} = WishListSlice.actions;
export default WishListSlice.reducer;