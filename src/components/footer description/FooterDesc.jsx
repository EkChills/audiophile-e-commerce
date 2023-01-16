import React from 'react'
import manImg from '../../assets/shared/mobile/image-best-gear.jpg'
import manImgTab from '../../assets/shared/tablet/image-best-gear.jpg'
import manImgDesk from '../../assets/shared/desktop/image-best-gear.jpg'

const FooterDesc = () => {
  return (
    <div className="flex flex-col  w-full justify-center lg:items-center  space-y-5 lg:flex-row-reverse lg:justify-between  ">
      <div className='lg:w-[45%]'>
        <img src={manImg} className="md:hidden rounded-lg w-full " alt="" />
        <img src={manImgTab} className="hidden md:block lg:hidden w-full rounded-lg" alt="" />
        <img src={manImgDesk} className="hidden lg:block rounded-lg w-full " alt="" />
      </div>
      <div className="flex flex-col space-y-5  items-center lg:items-start lg:w-[45%]">
        <div className='max-w-[20rem] lg:max-w-[26rem] md:max-w-[25rem] text-center lg:text-left'>
          <h2 className='text-[28px] lg:text-[40px] font-semibold uppercase '>Bringing you the <span className='text-orange'>best</span> audio gear</h2>
        </div>
        <div>
          <p className='text-darkGray text-[15px] text-center lg:text-left lg:max-w-[49rem] max-w-[19rem] md:max-w-[573px]'>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

      </div>
    </div>
  )
}

export default FooterDesc