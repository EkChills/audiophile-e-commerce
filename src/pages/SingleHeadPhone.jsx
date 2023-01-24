import React, { useEffect } from 'react'
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { increaseAmount, reduceAmount, resetAmount } from '../features/allProductsSlice'
import OrangeButton from '../components/buttons/OrangeButton';
import FeaturesDescription from '../components/FeaturesDescription';
import DescImageGrid from '../components/DescImageGrid';
import Alternatives from '../components/Alternatives';
import HomeSubImages from '../components/homepage-components/HomeSubImages';
import FooterDesc from '../components/footer description/FooterDesc';
import AddToCartModal from '../components/AddToCartModal';
import { addItemToLocalStorage } from '../utils/localStorage'
import { addToCart, openCartModal } from '../features/cartSlice';
import CounterButton from '../components/CounterButton';

const SingleHeadPhone = () => {
  const { slug } = useParams();
  const { headphones, itemAmount } = useSelector((store) => store.allProducts)
  const { cartItems, cartModalOpen } = useSelector((store) => store.cart)
  const singleHeadphone = headphones.find((headphone) => headphone.slug === slug)
  const dispatch = useDispatch()
  const { image: { mobile, tablet, desktop }, name, description, price, features, includes, gallery: { first, second, third }, others, category, cartImage: { cartImg } } = singleHeadphone

  const cart = {
    name,
    price,
    amount: itemAmount,
    cartImg,
  }

  useEffect(() => {
    dispatch(resetAmount())
  }, [])
  return (
    <div className="singleProduct relative">
      <div className="grid md:grid-cols-2 space-y-[2rem] md:gap-20 lg:gap-40">
        <div className="w-full flex flex-col">
          <Link to={'/headphones'} className='capitalize text-[15px] mb-6 font-semibold text-grayishBlack'>
            go back
          </Link>
          <img src={mobile} className="w-full  md:hidden rounded-lg" alt={name} />
          <img src={tablet} className="w-full max-h-[30rem] hidden  md:block md:object-cover lg:hidden rounded-lg" alt={name} />
          <img src={desktop} className="w-full hidden max-w-[30rem] lg:block rounded-lg" alt={name} />
        </div>

        <div className="flex flex-col space-y-[2rem] items-start justify-center lg:items-start">
          {singleHeadphone.new && <h5 className="uppercase tracking-[.4rem] text-orange text-[14px]">new product</h5>}
          <h3 className="text-[28px] font-bold md:text-[40px] text-left">{name}</h3>
          <p className="text-[15px] text-darkGray text-left">{description}</p>
          <p className='text-[18px] font-bold'>$ {price}</p>

          <div className="flex items-center justify-between space-x-4">
            <CounterButton increase={increaseAmount} decrease={reduceAmount} />
            <OrangeButton text={'add to cart'} onClick={() => {
              dispatch(openCartModal())
              dispatch(addToCart(cart))
            }} />
          </div>
        </div>
      </div>

      <FeaturesDescription features={features} includes={includes} />
      <DescImageGrid first={first} second={second} third={third} name={name} />
      <Alternatives altList={others}  />
      <HomeSubImages />
      <FooterDesc />
      {cartModalOpen && createPortal(<AddToCartModal />, document.getElementById('root'))}
    </div>
  )
}

export default SingleHeadPhone