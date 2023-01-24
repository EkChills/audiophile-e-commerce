import React from 'react'
import styled from 'styled-components'
import earphone from '../../assets/home/mobile/image-earphones-yx1.jpg'
import earphoneTab from '../../assets/home/tablet/image-earphones-yx1.jpg'
import earphoneDes from '../../assets/home/desktop/image-earphones-yx1.jpg'
import DarkButton from '../buttons/DarkButton'
import { Link } from 'react-router-dom'

const EarphoneImage = () => {
  return (
    <Wrapper className="flex  w-full  flex-col space-y-5 md:h-[50vh]  items-center md:flex-row md:justify-between md:space-y-0  ">
      <div className='w-full md:w-[49%] h-[inherit] '>
        <img src={earphone} alt="earphone" className='md:hidden w-full rounded-lg'  />
        <img src={earphone} alt="earphone" className='hidden md:block w-full h-[inherit] lg:hidden rounded-lg'  />
        <img src={earphone} alt="earphone" className='hidden lg:block w-full h-[inherit] rounded-lg' />
      </div>
      <div className='bg-lightGray w-full md:w-[49%] py-10 md:py-0 rounded-lg px-6 justify-center md:h-[100%]  flex  flex-col space-y-10'>
        <h2 className='text-[28px] font-semibold'>YX1 EARPHONES</h2>
        <Link to="/earphones/yx1-earphones"><DarkButton bgColor="transparent" bc="#000000" bs="1px" hover={'#000000'} solid="solid" text="see product" textCol='#000000' textColHover={'#ffffff'} /></Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`


`

export default EarphoneImage