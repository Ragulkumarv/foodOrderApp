import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    //can have multiple small reducer, can be imported with same name & with separate name also
  },
});

export default appStore;
