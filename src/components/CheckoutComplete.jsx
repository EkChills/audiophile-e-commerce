import React from 'react'
import confirmImg from '../assets/checkout/icon-order-confirmation.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { calculateTotals, closeCheckoutModal } from '../features/cartSlice'
import { clearCart } from '../features/cartSlice'
import { addTotalToLocalStorage } from '../utils/localStorage'
import { Link } from 'react-router-dom'

const CheckoutComplete = () => {
  const { cartTotal, cartItems } = useSelector((store) => store.cart)
  const { cartImg, name, price, amount } = cartItems[0]
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
    addTotalToLocalStorage(cartTotal)
  },[])
  return (
    <div className='p-6 bg-pureWhite rounded-lg flex flex-col space-y-5 md:space-y-7'>
      <img src={confirmImg} className="w-14" alt="confirmation image" />
      <h2 className='text-pureBlack font-bold uppercase text-[24px]'>THANK YOU <br /> FOR YOUR ORDER</h2>
      <p className='text-[15px] text-darkGray max-w-[17rem] md:max-w-[20rem]'>You will receive an email confirmation shortly.</p>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col space-y-3 py-2  bg-lightGray">
          <div className='flex justify-between px-7 items-center'>
            <img src={cartImg} className="w-12" alt="" />
            <div className='flex flex-col space-y-2'>
              <h5 className='text-[15px] text-pureBlack font-bold'>{name.substring(0, 6)}</h5>
              <h5 className='text-[14px] text-darkGray font-bold'>${price}</h5>
            </div>
            <span className='text-darkGray text-[15px] font-bold'>x{amount}</span>
          </div>
          <div className='px-6'>
            <hr className='bg-darkGray text-3xl text-borderColor ' />
          </div>
          <p className='text-[12px] text-darkGray mx-auto font-bold'>and {cartItems.length - 1} item(s) </p>
        </div>

        <div className="flex flex-col bg-pureBlack p-6 space-y-4 rounded-b-lg md:rounded-r-lg md:rounded-l-none">
          <h3 className='text-[15px] font-semibold text-darkGray uppercase'>
            grand total
          </h3>
          <span className='text-[18px] text-pureWhite font-bold'>${cartTotal + 50}</span>
        </div>
      </div>
      <Link to="/" onClick={() => dispatch(clearCart())}><button className={`text-pureWhite text-[13px] uppercase px-4 py-3 bg-orange font-bold hover:bg-lightOrange w-[100%] transition-colors duration-300`} onClick={() => dispatch(closeCheckoutModal('checkout-modal-backdrop'))}>back to home</button></Link>
    </div>
  )
}

export default CheckoutComplete