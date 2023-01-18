import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const SingleHeadPhone = () => {
  const { slug } = useParams();
  const { headphones } = useSelector((store) => store.allProducts)
  const singleHeadphone = headphones.find((headphone) => headphone.slug === slug)
  const { image: { mobile, tablet, desktop }, id, name, description } = singleHeadphone
  return (
    <div className="bg-pureWhite flex flex-col space-y-[7rem] px-[1.3rem] md:px-[2.3rem] py-[7rem] lg:px-[7.3rem] ">
      <div className="grid lg:grid-cols-2 space-y-[2rem] lg:gap-40">
        <div className="w-full">
          <img src={mobile} className="w-full  md:hidden rounded-lg" alt={name} />
          <img src={desktop} className="w-full max-h-[30rem] hidden  md:block md:object-cover lg:hidden rounded-lg" alt={name} />
          <img src={desktop} className="w-full hidden max-w-[30rem] lg:block rounded-lg" alt={name} />
        </div>

        <div className="flex flex-col space-y-[2rem] items-center lg:items-start">
          {singleHeadphone.new && <h5 className="uppercase tracking-[.4rem] text-orange text-[14px]">new product</h5>}
          <h3 className="text-[28px] font-bold md:text-[40px] text-center lg:text-left">{name}</h3>
          <p className="text-[15px] text-darkGray text-center lg:text-left">{description}</p>

        </div>

      </div>
    </div>
  )
}

export default SingleHeadPhone