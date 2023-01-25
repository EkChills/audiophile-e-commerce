import { useSelector, useDispatch } from "react-redux"
import { closeCheckoutModal } from "../features/cartSlice"
import confirmIcon from '../assets/checkout/icon-order-confirmation.svg'
import CheckoutComplete from "./CheckoutComplete"

const CheckoutModal = () => {
  const { checkoutModalOpen } = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  const closeCheckout = (e) => {
     dispatch(closeCheckoutModal(e.target.id))
  }
  return (
    <div  id="checkout-modal-backdrop" className={` ${checkoutModalOpen ? 'visible' : 'invisible'} z-[60] -inset-3 fixed bg-pureBlack bg-opacity-25 grid place-items-center`}>
      <CheckoutComplete />
    </div>
  )
}

export default CheckoutModal