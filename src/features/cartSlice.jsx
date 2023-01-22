import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { getItemFromLocalStorage } from '../utils/localStorage'

const initialState = {
  cartItems: getItemFromLocalStorage(),
  cartModalOpen:false,
}

const cartSlice = createSlice({
  name:'cartSlice',
  initialState,
  reducers: {
    addToCart:(state, {payload}) => {
      const {name,amount} = payload
      const foundItem = state.cartItems.find((item) => item.name === payload.name)
      if(foundItem) {
        foundItem.amount += amount
        return
      }
      state.cartItems = [...state.cartItems, payload]
    },
    openCartModal:(state) => {
      state.cartModalOpen = true
    },
    closeCartModal:(state) => {
      state.cartModalOpen = false
    }
  }
})

export const {addToCart, openCartModal, closeCartModal} = cartSlice.actions
export default cartSlice.reducer