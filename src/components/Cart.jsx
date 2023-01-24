import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { addItemToLocalStorage } from "../utils/localStorage"
import CounterButton from "./CounterButton"
import OrangeButton from "./buttons/OrangeButton"
import EmptyCart from "./EmptyCart"
import { increaseCartItemAmount, reduceCartItemAmount, clearCart } from "../features/cartSlice"


const Cart = () => {
  const { cartItems } = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    addItemToLocalStorage(cartItems)
  }, [cartItems])

  const cartTotals = cartItems.reduce((totals, item) => {
    let totalAmount = item.amount * item.price
    return totals + totalAmount
  }, 0)



  if(cartItems.length <= 0) {
    return <div className="flex flex-col z-[55] space-y-[1.7rem] w-[90vw] md:w-[30rem]  bg-pureWhite p-7 rounded-lg max-h-[90vh] overflow-y-hidden" id="cart-overlay">
      <EmptyCart />
    </div>
  }

  return (
    <div className="flex flex-col z-[55] space-y-[1.7rem] w-[90vw] md:w-[30rem]  bg-pureWhite p-7 rounded-lg max-h-[30rem] overflow-y-scroll" id="cart-overlay">

      <div className="flex justify-between items-center" >
        <span className="text-[18px] font-bold uppercase">cart ({cartItems.length})</span>
        <span className="text-darkGray capitalize text-[15px] underline cursor-pointer" onClick={() => dispatch(clearCart())}>remove all</span>
      </div>
      {cartItems.map((item, index) => {
        const { cartImg, name, price, amount } = item
        return <div key={index} className="flex justify-between items-center ">
          <div className="flex items-center space-x-3">
            <img src={cartImg} alt="" className="rounded-lg w-20" />
            <div className="flex flex-col space-y-3">
              <p className="text-[15px] text-pureBlack font-bold">{name.substring(0, 6)}</p>
              <p className="text-darkGray text-[14px] font-bold">$ {price}</p>
            </div>
          </div>
          <div className='flex p-3 items-center space-x-9 bg-lightGray'>
            <span className='text-darkGray font-bold text-[13px] orangeHover' onClick={() => dispatch(reduceCartItemAmount({ ...item }))} >-</span>
            <span className='text-pureBlack text-[13px] font-bold'>{amount}</span>
            <span className='text-darkGray font-bold text-[13px] orangeHover' onClick={() => dispatch(increaseCartItemAmount({ ...item }))}>+</span>

          </div>
        </div>

      })}
      <div className="flex justify-between items-center" >
        <span className="text-darkGray uppercase text-[15px]">Total</span>
        <span className="text-[18px] font-bold uppercase">$ {cartTotals}</span>
      </div>
      <button className={`text-pureWhite text-[13px] uppercase px-4 py-3 bg-orange font-bold hover:bg-lightOrange w-[100%] transition-colors duration-300`}>checkout</button>
      
    </div>
  )
}

export default Cart