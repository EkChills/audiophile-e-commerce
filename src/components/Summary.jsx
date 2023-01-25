import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { addItemToLocalStorage } from "../utils/localStorage"
import CounterButton from "./CounterButton"
import OrangeButton from "./buttons/OrangeButton"
import EmptyCart from "./EmptyCart"
import { increaseCartItemAmount, reduceCartItemAmount, clearCart, closeCartModal, openCheckoutModal } from "../features/cartSlice"
import { Link } from "react-router-dom"


const Summary = () => {
  const { cartItems } = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    addItemToLocalStorage(cartItems)
  }, [cartItems])

  const cartTotals = cartItems.reduce((totals, item) => {
    let totalAmount = item.amount * item.price
    return totals + totalAmount
  }, 0)



  return (
    <div className="flex flex-col  space-y-[1.7rem] w-[90vw] md:w-[30rem]  bg-pureWhite p-7 rounded-lg max-h-[30rem] overflow-y-scroll" id="cart-overlay">

      <div className="flex justify-between items-center" >
        <span className="text-[18px] font-bold uppercase">summary</span>
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
          <span className="text-[15px] font-bold text-darkGray">X{amount}</span>
        </div>

      })}
      <div className="flex flex-col space-y-1">
        <div className="flex justify-between items-center" >
          <span className="text-darkGray uppercase text-[15px]">Total</span>
          <span className="text-[18px] font-bold uppercase">$ {cartTotals}</span>
        </div>
        <div className="flex justify-between items-center" >
          <span className="text-darkGray uppercase text-[15px]">shipping</span>
          <span className="text-[18px] font-bold uppercase">$ 50</span>
        </div>
        <div className="flex justify-between items-center" >
          <span className="text-darkGray uppercase text-[15px]">vat (included)</span>
          <span className="text-[18px] font-bold uppercase">$ 50</span>
        </div>
      </div>
      <div className="flex justify-between items-center" >
        <span className="text-darkGray uppercase text-[15px]">grand total</span>
        <span className="text-[18px] font-bold uppercase">${cartTotals + 50}</span>
      </div>
      <Link to="/checkout"><button className={`text-pureWhite text-[13px] uppercase px-4 py-3 bg-orange font-bold hover:bg-lightOrange w-[100%] transition-colors duration-300`} onClick={() => dispatch(openCheckoutModal())}>continue and pay</button></Link>

    </div>
  )
}

export default Summary