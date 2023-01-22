import React from 'react'
import Cart from './Cart'

const AddToCartModal = () => {
  return (
    <div className='fixed -inset-3 bg-pureBlack bg-opacity-25 grid justify-center items-start pt-[7rem] md:justify-end  md:pr-[7rem] '>
      <Cart />
    </div>

  )
}

export default AddToCartModal