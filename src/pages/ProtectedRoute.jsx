import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import React from 'react'

const ProtectedRoute = ({ children }) => {
  const { cartItems } = useSelector((store) => store.cart)
  if (cartItems.length === 0) {
    return <Navigate to="/" />
  }
  return (
    children
  )
}

export default ProtectedRoute