import { configureStore } from "@reduxjs/toolkit";
import allProductsSlice from "../features/allProductsSlice";
import cartSlice from "../features/cartSlice";
import userSlice from "../features/userSlice";

export const store = configureStore({
  reducer:{
    allProducts:allProductsSlice,
    cart:cartSlice,
    user:userSlice,
  }
})

