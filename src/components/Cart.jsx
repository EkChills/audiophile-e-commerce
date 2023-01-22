import { useSelector } from "react-redux"
import { useEffect } from "react"
import { addItemToLocalStorage } from "../utils/localStorage"
import CounterButton from "./CounterButton"
import OrangeButton from "./buttons/OrangeButton"


const Cart = () => {
  const { cartItems } = useSelector((store) => store.cart)

  useEffect(() => {
    addItemToLocalStorage(cartItems)
  }, [])

  return (
    <div className="flex flex-col space-y-[1.7rem] w-[90vw] md:w-[30rem]  bg-pureWhite p-7 rounded-lg max-h-[90vh] overflow-y-hidden">
      <div className="flex justify-between items-center" >
        <span className="text-[18px] font-bold uppercase">cart ({cartItems.length})</span>
        <span className="text-darkGray capitalize text-[15px] underline cursor-pointer">remove all</span>
      </div>
      {cartItems.map((item, index) => {
        const { cartImg, name, price } = item
        return <div key={index} className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={cartImg} alt="" className="rounded-lg w-20" />
            <div className="flex flex-col space-y-3">
              <p className="text-[15px] text-pureBlack font-bold">{name.substring(0, 6)}</p>
              <p className="text-darkGray text-[14px] font-bold">$ {price}</p>
            </div>
          </div>
          <CounterButton />
        </div>
        
      })}
         <div className="flex justify-between items-center" >
            <span className="text-darkGray uppercase text-[15px]">Total</span>
            <span className="text-[18px] font-bold uppercase">$ 5,396</span>
          </div>
          <button className={`text-pureWhite text-[13px] uppercase px-4 py-3 bg-orange hover:bg-lightOrange w-[100%] transition-colors duration-300` }>checkout</button>
    </div>
  )
}

export default Cart