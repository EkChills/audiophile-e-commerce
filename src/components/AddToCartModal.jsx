import React from 'react'
import Cart from './Cart'
import { closeCartModal } from '../features/cartSlice'
import { useDispatch } from 'react-redux'

const AddToCartModal = () => {
  const dispatch = useDispatch()

  const closeCart = (e) => {
    dispatch(closeCartModal(e.target.id))
    console.log(e.target.id);
  }
  return (
    <div onClick={closeCart} id="cart-backdrop" className='fixed -inset-3 z-[55] bg-pureBlack bg-opacity-25 grid justify-center items-start pt-[7rem] md:justify-end  md:pr-[7rem] '>
      <Cart />
    </div>

  )
}

export default AddToCartModal