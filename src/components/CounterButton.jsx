import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { reduceAmount, increaseAmount } from '../features/allProductsSlice'

const CounterButton = ({cartItemAmount, increase, decrease}) => {
  const { itemAmount } = useSelector((store) => store.allProducts)
  const dispatch = useDispatch()
  return (
    <div className='flex p-3 items-center space-x-9 bg-lightGray'>
      <span className='text-darkGray font-bold text-[13px] orangeHover' onClick={() => dispatch(decrease())} >-</span>
      <span className='text-pureBlack text-[13px] font-bold'>{ cartItemAmount ? cartItemAmount :  itemAmount}</span>
      <span className='text-darkGray font-bold text-[13px] orangeHover' onClick={() => dispatch(increase(20))}>+</span>

    </div>
  )
}

export default CounterButton