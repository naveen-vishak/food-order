import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem : (state, action) => {
            console.log("addItem");
            state.items.push(action.payload);
        },
        removeItem : (state, action) => {
            console.log("removeItem");
            state.items.pop();
        },
        clearCart : (state, action) => {
            console.log("clearCart");
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;