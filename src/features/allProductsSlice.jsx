import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

let headphones = data.filter((item) => item.category === 'headphones')
let earphones = data.filter((item) => item.category === 'earphones')
let speakers = data.filter((item) => item.category === 'speakers')

const initialState = {
  allProducts:[...headphones,...earphones,...speakers],
  headphones,
  earphones,
  speakers,
}

const allProductsSlice = createSlice({
  name:'allProducts',
  initialState,
})

export default allProductsSlice.reducer