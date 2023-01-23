import React from 'react'
import HomeSubImages from './homepage-components/HomeSubImages'

const NavModal = () => {
  return (
    <div className='fixed top-20 -left-3 -right-3 -bottom-3 z-[55] bg-pureBlack bg-opacity-25 lg:hidden '>
      <div className='px-10 py-6 bg-pureWhite md:py-[5rem]'>
        <HomeSubImages />
      </div>
    </div>
  )
}

export default NavModal