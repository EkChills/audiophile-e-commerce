import styled from "styled-components"
import DarkButton from "../buttons/DarkButton"
import zx9Desc from '../../assets/home/desktop/image-speaker-zx9.png'
import zx9Mob from '../../assets/home/mobile/image-speaker-zx9.png'
import zx9Tab from '../../assets/home/tablet/image-speaker-zx9.png'
import { Link } from "react-router-dom"


const HomepageSubHero = () => {
  return (
    <Wrapper className="bg-orange min-h-[80vh] rounded-lg px-3 sub-back-img pt-[5rem] pb-[5rem] lg:pb-0 bg-circles mt-[-1.2rem] grid place-items-center lg:flex relative">
      <div className='flex flex-col w-full space-y-6 lg:space-y-0 lg:flex-row items-center  lg:justify-between'>
        <div className="lg:w-1/2 w-[197.21px] flex  lg:justify-center ">
          <img src={zx9Desc} alt="" className="hidden lg:block w-[20rem]"  />
          <img src={zx9Tab} alt="" className="hidden md:block lg:hidden" />
          <img src={zx9Mob} alt="" className=" md:hidden" />
        </div>
        <div className='max-w-md flex lg:w-1/2 flex-col items-center lg:items-start justify-center space-y-5'>
          <h2 className='text-pureWhite font-semibold uppercase text-[58px] text-center lg:text-left  leading-[3.8rem]'>ZX9 <br />
            SPEAKER.</h2>
          <div className="flex flex-col space-y-1 items-center lg:items-start">
            <p className="hero-p">Upgrade to premium speakers that are </p>
            <p className="hero-p">phenomenally built to deliver truly remarkable </p>
            <p className="hero-p"> sound.</p>
          </div>

          <Link to="/speakers/zx9-speaker"><DarkButton text="see product" bgColor="#000000" hover='#4C4C4C' textCol={'#ffffff'} textColHover={'#ffffff'} /></Link>
        </div>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`

  .hero-p {
    color: hsl(0,0%, 100%);
    font-size: 15px;
  }


`

export default HomepageSubHero