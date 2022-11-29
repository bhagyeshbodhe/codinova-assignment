import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.name === payload.name
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].itemQuantity += 1;
      } else {
        const tempItem = { ...payload, itemQuantity: 1 };
        state.cartItems = [...state.cartItems, tempItem];
      }
    },
    incQuantity: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.name === payload.name
      );
      state.cartItems[itemIndex].itemQuantity += 1;
    },
    decQuantity: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.name === payload.name
      );
      if (payload.itemQuantity > 0)
        state.cartItems[itemIndex].itemQuantity -= 1;
    },

    removeItem: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.name === payload.name
      );
      state.cartItems.splice(itemIndex, 1);
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeItem, clearCart, incQuantity, decQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
