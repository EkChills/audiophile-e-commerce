import React from 'react'
import emptyCart from '../assets/cart/empty-cart.svg'
import { Link } from 'react-router-dom'
import OrangeButton from './buttons/OrangeButton'

const EmptyCart = () => {
  return (
    <div className='w-full flex flex-col items-center space-y-4 justify-center '>
      <img src={emptyCart} className="w-[13rem]" alt="empty cart image" />
      <h3 className='text-pureBlack font-bold text-[28px] capitalize'>your cart is empty</h3>
      <Link to={'/'}>
        <OrangeButton text={'see products'} />
      </Link>
    </div>
  )
}

export default EmptyCart