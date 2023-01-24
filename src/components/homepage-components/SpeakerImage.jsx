import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DarkButton from '../buttons/DarkButton'

const SpeakerImage = () => {
  return (
    <Wrapper className='min-h-[50vh] px-[1.7rem] lg:px-[5rem] rounded-lg flex items-center justify-start'>
      <div className='flex flex-col  space-y-10'>
        <h2 className='text-[28px] text-pureBlack font-bold'>
        ZX7 SPEAKER
        </h2>
        <Link to="/speakers/zx7-speaker"><DarkButton bgColor="transparent" bc="#000000" bs="1px" hover={'#000000'} solid="solid" text="see product" textCol='#000000' textColHover={'#ffffff'} /></Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-image: url('../../assets/home/mobile/image-speaker-zx7.jpg');
  background-position: center;
  background-size: cover;



  @media  (min-width:768px) {
    background-image: url('../../assets/home/tablet/image-speaker-zx7.jpg'); 
}

@media  (min-width:1024px) {
  background-image: url('../../assets/home/desktop/image-speaker-zx7.jpg');
}
`

export default SpeakerImage