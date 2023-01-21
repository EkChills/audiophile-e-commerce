import React from 'react'
import { subImageLinks } from '../../utils/links'
import { Link } from 'react-router-dom'
import rightArrow from '../../assets/shared/desktop/icon-arrow-right.svg'

const HomeSubImages = () => {
  return (
    <div className="flex flex-col space-y-12 md:space-y-0 md:flex-row  md:justify-between md:space-x-3">
      {subImageLinks.map((item) => {
        return (
          <Link key={item.id} to={item.to} className="w-full">
          <div className="flex flex-col w-full items-center bg-[#F1F1F1] justify-center rounded-lg space-y-3 pt-14 pb-4 relative">
            <img className='w-[80px] absolute -top-6' src={`${item.path}`} alt={item.desc} />
            <h5 className='uppercase text-[15px] font-semibold'>{item.desc}</h5>
            <div className="flex items-center space-x-2 cursor-pointer">
              <p className='uppercase text-[13px] text-veryDarkGray font-semibold'>shop</p>
              <img src={rightArrow} alt="" />
            </div>
          </div>
          </Link>
        )
      })}
    
    </div>
  )
}

export default HomeSubImages