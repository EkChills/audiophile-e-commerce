import React from 'react'
import CheckoutForm from '../components/CheckoutForm'
import Summary from '../components/Summary'
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
    <main className='general-page-padding flex flex-col space-y-6 md:space-y-0 md:space-x-6 bg-lightGray md:flex-row'>
      <div className="flex flex-col p-7 space-y-5 lg:flex-row lg:space-y-0 lg:space-x-5 rounded-lg bg-pureWhite">
        <CheckoutForm />
      </div>
      <Summary />
    </main>
  )
}

export default Checkout