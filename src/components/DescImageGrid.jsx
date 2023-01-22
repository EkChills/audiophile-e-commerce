import React, { useEffect } from 'react'
import Aos from 'aos';

const DescImageGrid = ({ first, second, third, name }) => {
  useEffect(() => {
    Aos.init({duration:2000})
  },[])
  return (
    <div className='flex   flex-col justify-center md:items-between   md:flex-row gap-5'>
      <div className='flex flex-col gap-5 md:w-[40%]   justify-between '>
        <div data-aos="flip-up">
          <img src={first.mobile} className="w-full md:hidden rounded-lg" alt={name} />
          <img src={first.tablet} className="w-full hidden md:block lg:hidden rounded-lg" alt={name} />
          <img src={first.desktop} className="w-full hidden lg:block rounded-lg" alt={name} />
        </div>

        <div data-aos="flip-down">
          <img src={second.mobile} className="w-full md:hidden rounded-lg" alt={name} />
          <img src={second.tablet} className="w-full hidden md:block lg:hidden rounded-lg" alt={name} />
          <img src={second.desktop} className="w-full hidden lg:block rounded-lg" alt={name} />
        </div>
      </div>
      <div className='md:w-[60%]' data-aos="flip-right">
        <img src={third.mobile} className="w-full md:hidden rounded-lg"  alt={name} />
        <img src={third.desktop} className="w-full hidden md:block lg:hidden rounded-lg" alt={name} />
        <img src={third.desktop} alt={name} className="w-full hidden lg:block rounded-lg" />
      </div>
    </div>
  )
}

export default DescImageGrid