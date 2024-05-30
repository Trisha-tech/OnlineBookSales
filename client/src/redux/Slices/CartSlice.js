import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            // Update frontend state
            return state.filter((item) => item._id !== action.payload);
        },
        updateUserCart: (state, action) => {
            return [...action.payload];
        },
    }
});

export const { add, remove, updateUserCart } = CartSlice.actions;

// Asynchronously remove item from cart in backend and frontend
export const removeFromCart = (itemId) => async (dispatch) => {
    try {
        // Dispatch action to update frontend state
        
        dispatch(remove(itemId));
        const token = localStorage.getItem('token');

        // Send request to backend to remove item from cart
        await axios.post('http://localhost:8080/customer/cart/remove-product', 
            { productId: itemId }, 
            {
                headers: {
                    'token': token
                }
            }
        );
    } catch (error) {
        console.error('Error removing item from cart:', error);
        // Handle error or dispatch error action
    }
};

export const addToCart = (item) => async (dispatch, getState) => {
    try {
        console.log(item);
        
        dispatch(add(item));
        const token = localStorage.getItem('token');

        await axios.post('http://localhost:8080/customer/cart/add-product', 
            { cartItems: [{ product: item._id, price: item.price }] }, 
            {
                headers: {
                    'token': token
                }
            }
        );
    } catch (error) {
        console.error('Error adding item to cart:', error);
    }
};

export default CartSlice.reducer;
