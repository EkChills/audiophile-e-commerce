import React, { useEffect } from 'react'
import styled from 'styled-components'
import OrangeButton from '../buttons/OrangeButton'
import HomepageSubHero from './HomepageSubHero'
import HomeSubImages from './HomeSubImages'
import SpeakerImage from './SpeakerImage'
import EarphoneImage from './EarphoneImage'
import FooterDesc from '../footer description/FooterDesc'
import Aos from 'aos'
import 'aos/dist/aos.css'

const HeroSection = () => {

  useEffect(() => {
    Aos.init({duration:1000})
  }, [])
  return (
    <>
    <main>
    <div  data-aos="fade-up" className='min-h-[100vh] bg-semiBlack bg-img px-3 back-img  lg:px-[10rem] mt-[-1.2rem] grid place-items-center lg:flex relative'>
      <div className='self-left'>
        <div className='max-w-md flex flex-col  items-center  lg:items-start space-y-5'>
        <h5 className='uppercase tracking-[.4rem] text-darkGray'>new product</h5>
        <h1 className='text-pureWhite font-bold uppercase text-[36px] lg:text-[58px] text-center lg:text-left  leading-[2.8rem] lg:leading-[3.8rem]'>
          XX99 Mark II
          Headphones
        </h1>
        <Wrapper className='max-w-[21rem] text-center lg:text-left'>Experience natural, lifelike audio and exceptional <br /> build quality made for the passionate music <br /> enthusiast.</Wrapper>
        <OrangeButton text="see product" bgColor='orange' bgColorHover={'lightOrange'} />
        </div>
      </div>
    </div>

    <section  className='lg:px-[10rem] mt-[7rem]' data-aos="fade-down" >
      <HomeSubImages />
    </section>

    <section data-aos="zoom-in" className='px-7 lg:px-[10rem] mt-[7rem]'>
      <HomepageSubHero />
    </section>

    <section data-aos="flip-down" className='px-7 lg:px-[10rem] mt-[2rem]'>
      <SpeakerImage />
    </section>

    <section data-aos="flip-right" className='px-7 lg:px-[10rem] mt-[2rem]'>
      <EarphoneImage />
    </section>

    <section data-aos="fade-left" className='px-7 lg:px-[10rem] mt-[7rem] mb-[7rem]'>
      <FooterDesc />
    </section>

    </main>
    </>
  )
}

const Wrapper = styled.p`
  color: hsl(0,0%, 80%);
  font-size: 15px;

`

export default HeroSection