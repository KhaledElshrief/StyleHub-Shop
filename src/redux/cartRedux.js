import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        removeProduct: (state, action) => {
            state.quantity -= 1;
            state.products.splice(action.payload, 1);
            state.total -=
                state.products[action.payload].price *
                state.products[action.payload].quantity;
        },
        reset: (state) => {
            state.quantity = 0;
            state.products = [];
            state.total = 0;
        },    
    },
});

export const { addProduct, removeProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;