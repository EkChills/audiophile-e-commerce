import React from 'react'
import { Link } from 'react-router-dom'
import OrangeButton from './buttons/OrangeButton'
import Aos from 'aos'
import { useEffect } from 'react'

const Alternatives = ({ altList }) => {

  useEffect(() => {
    Aos.init({duration:1000})
  })
  return (
    <div className="flex flex-col items-center space-y-[2rem]" data-aos="fade-down">
      <h2 className='text-pureBlack uppercase text-[24px] md:text-[32px] font-bold'>you may also like</h2>
      <div className="flex flex-col space-y-[2rem] md:flex-row md:space-y-0 md:justify-between md:space-x-5">
        {
          altList.map((item, index) => {
            const { slug, name, sub_category:category, image:{mobile,desktop,tablet} } = item
            return (
              <div key={index} className="flex flex-col space-y-[1.3rem] items-center md:w-[35%]">
                <div className='flex justify-center items-center '>
                  <img src={mobile} className="show-mobile rounded-lg" alt={name} />
                  <img src={tablet} className="show-tablet rounded-lg" alt={name} />
                  <img src={desktop} className="show-desktop rounded-lg" alt={name} />
                </div>
                <h3 className='text-pureBlack text-[24px] font-bold'>{name}</h3>
                <Link to={`/${category}/${slug}`}><OrangeButton text={'see product'} /></Link>
              </div>
            )
          })

        }
      </div>
    </div>
  )
}

export default Alternatives