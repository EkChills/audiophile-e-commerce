import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

let headphones = data.filter((item) => item.category === 'headphones')
let earphones = data.filter((item) => item.category === 'earphones')
let speakers = data.filter((item) => item.category === 'speakers')

const initialState = {
  allProducts: [...headphones, ...earphones, ...speakers],
  headphones,
  earphones,
  speakers,
  itemAmount: 1,
}

const allProductsSlice = createSlice({
  name: 'allProducts',
  initialState,
  reducers: {
    increaseAmount: (state, { payload }) => {
      if (payload <= state.itemAmount) {
        return
      }
      let increasedAmount = state.itemAmount + 1
      state.itemAmount = increasedAmount
    },
    reduceAmount: (state, { payload }) => {
      if (state.itemAmount <= 1 ) {
        return
      }
      let newAmount = state.itemAmount - 1
      state.itemAmount = newAmount
    },
    resetAmount:(state) => {
      state.itemAmount = 1
    }
  }
})

export const { increaseAmount, reduceAmount, resetAmount } = allProductsSlice.actions
export default allProductsSlice.reducer