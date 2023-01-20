import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems:[]
}

const cartSlice = createSlice({
  name:'cartSlice',
  initialState
})

export default cartSlice.reducer