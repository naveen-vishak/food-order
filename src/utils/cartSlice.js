import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        // mutating the state
        // Either mutate the exisisting state or return a new state
        addItem : (state, action) => {
            state.items.push(action.payload);
        },
        removeItem : (state, action) => {
            state.items.pop();
        },
        clearCart : (state, action) => { // state in this line is a local variable
            state.items.length = 0; // state = [] doesn't work because if IMMERjs
            // or return {items:[]};
        } // Local variable 'state' gets assigned with the reference rather than making the original state empty
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;