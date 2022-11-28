import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../components/redux-slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
