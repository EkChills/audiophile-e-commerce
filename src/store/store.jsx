import { configureStore } from "@reduxjs/toolkit";
import allProductsSlice from "../features/allProductsSlice";

export const store = configureStore({
  reducer:{
    allProducts:allProductsSlice
  }
})

