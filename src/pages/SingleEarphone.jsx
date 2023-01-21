import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { increaseAmount, reduceAmount } from '../features/allProductsSlice'
import Alternatives from '../components/Alternatives';
import DescImageGrid from '../components/DescImageGrid';
import HomeSubImages from '../components/homepage-components/HomeSubImages';
import FooterDesc from '../components/footer description/FooterDesc';
import OrangeButton from '../components/buttons/OrangeButton';
import FeaturesDescription from '../components/FeaturesDescription';

const SingleEarphone = () => {

  const { slug } = useParams();
  const { earphones, itemAmount } = useSelector((store) => store.allProducts)
  const singleEarphone = earphones.find((earphone) => earphone.slug === slug)
  const dispatch = useDispatch()
  const { image: { mobile, tablet, desktop }, name, description, price, features, includes, gallery:{first, second, third}, others } = singleEarphone
  let startAmount = 1
  return (
    <div className="singleProduct">
      <div className="grid md:grid-cols-2 space-y-[2rem] md:gap-20 lg:gap-40">
        <div className="w-full">
          <img src={mobile} className="w-full  md:hidden rounded-lg" alt={name} />
          <img src={tablet} className="w-full max-h-[30rem] hidden  md:block md:object-cover lg:hidden rounded-lg" alt={name} />
          <img src={desktop} className="w-full hidden max-w-[30rem] lg:block rounded-lg" alt={name} />
        </div>

        <div className="flex flex-col space-y-[2rem] items-start justify-center lg:items-start">
          {singleEarphone.new && <h5 className="uppercase tracking-[.4rem] text-orange text-[14px]">new product</h5>}
          <h3 className="text-[28px] font-bold md:text-[40px] text-left">{name}</h3>
          <p className="text-[15px] text-darkGray text-left">{description}</p>
          <p className='text-[18px] font-bold'>$ {price}</p>

          <div className="flex items-center justify-between space-x-4">
            <div className='flex p-3 items-center space-x-9 bg-lightGray'>
              <span className='text-darkGray font-bold text-[13px] orangeHover' onClick={() => dispatch(reduceAmount())} >-</span>
              <span className='text-pureBlack text-[13px] font-bold'>{itemAmount}</span>
              <span className='text-darkGray font-bold text-[13px] orangeHover' onClick={() => dispatch(increaseAmount(20))}>+</span>

            </div>
            <OrangeButton text={'add to cart'} />
          </div>
        </div>
      </div>

      <FeaturesDescription features={features} includes={includes} />
      <DescImageGrid first={first} second={second} third={third} name={name} />
      <Alternatives altList={others} />
      <HomeSubImages />
      <FooterDesc />
    </div>
  )
}

export default SingleEarphone