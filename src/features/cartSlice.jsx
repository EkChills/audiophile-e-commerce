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

        if(foundItem.amount >= 20) {
          return
        }
        foundItem.amount += amount
        return
      }
      state.cartItems = [...state.cartItems, payload]
    },
    openCartModal:(state) => {
      state.cartModalOpen = true
    },
    closeCartModal:(state, {payload}) => {
      if(payload === 'cart-backdrop') {
        state.cartModalOpen = false
      }
      return
    },
    increaseCartItemAmount:(state,{payload}) => {
      const {name,amount} = payload
      const foundItem = state.cartItems.find((item) => item.name === payload.name)
      if(foundItem.amount >= 20) {
        return
      }
      foundItem.amount += 1
    },
    reduceCartItemAmount:(state,{payload}) => {
      const {name,amount} = payload
      const foundItem = state.cartItems.find((item) => item.name === payload.name)
      if(foundItem.amount <= 0) {
        state.cartItems = state.cartItems.filter((item) => item.name !== foundItem.name)
        return
      }
      foundItem.amount -= 1
    },
    clearCart:(state) => {
      state.cartItems = []
    }
  }
})

export const {addToCart, openCartModal, closeCartModal, increaseCartItemAmount, reduceCartItemAmount, clearCart} = cartSlice.actions
export default cartSlice.reducer