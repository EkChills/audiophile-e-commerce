import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { getItemFromLocalStorage, getTotalFromLocalStorage } from '../utils/localStorage'

const inputValues = {
  name: '',
  emailAddress: '',
  phoneNumber: '',
  yourAddress: '',
  zipCode: '',
  city: '',
  country: '',
  paymentMethod: 'e-money',
  eMoneyNo: '',
  eMoneyPin: ''
}

const initialState = {
  cartItems: getItemFromLocalStorage(),
  cartModalOpen: false,
  inputValues,
  checkoutModalOpen: false,
  cartTotal:getTotalFromLocalStorage(),
  inputError:false,
}

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const { name, amount } = payload
      const foundItem = state.cartItems.find((item) => item.name === payload.name)
      if (foundItem) {

        if (foundItem.amount >= 20) {
          return
        }
        foundItem.amount += amount
        return
      }
      state.cartItems = [...state.cartItems, payload]
    },
    openCartModal: (state) => {
      state.cartModalOpen = true
    },
    closeCartModal: (state, { payload }) => {
      if (payload === 'cart-backdrop') {
        state.cartModalOpen = false
      }
      return
    },
    increaseCartItemAmount: (state, { payload }) => {
      const { name, amount } = payload
      const foundItem = state.cartItems.find((item) => item.name === payload.name)
      if (foundItem.amount >= 20) {
        return
      }
      foundItem.amount += 1
    },
    reduceCartItemAmount: (state, { payload }) => {
      const { name, amount } = payload
      const foundItem = state.cartItems.find((item) => item.name === payload.name)
      if (foundItem.amount <= 0) {
        state.cartItems = state.cartItems.filter((item) => item.name !== foundItem.name)
        return
      }
      foundItem.amount -= 1
    },
    clearCart: (state) => {
      return {...initialState, cartItems:[]}
    },
    handleChange: (state, { payload }) => {
      const { name, value } = payload
      state.inputValues[name] = value
    },
    openCheckoutModal: (state) => {
      state.checkoutModalOpen = true
    },
    closeCheckoutModal: (state, { payload }) => {
      if (payload === 'checkout-modal-backdrop') {
        state.checkoutModalOpen = false
        return
      }
      return
    },
    calculateTotals:(state) => {
      const cartTotals = state.cartItems.reduce((totals, item) => {
        let totalAmount = item.amount * item.price
        return totals + totalAmount
      }, 0)
      state.cartTotal = cartTotals
    },
    activateError:(state) => {
      state.inputError = true
    },
    deactivateError:state => {
      state.inputError = false
    }
  }
})

export const {
  addToCart,
  openCartModal,
  closeCartModal,
  increaseCartItemAmount,
  reduceCartItemAmount,
  openCheckoutModal,
  closeCheckoutModal,
  clearCart,
  handleChange,
  calculateTotals,
  activateError,
  deactivateError
} = cartSlice.actions
export default cartSlice.reducer