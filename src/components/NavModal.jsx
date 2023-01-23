import React from 'react'
import HomeSubImages from './homepage-components/HomeSubImages'
import { closeNavModal } from '../features/allProductsSlice'
import { useDispatch } from 'react-redux'

const NavModal = () => {
  const dispatch = useDispatch()
  const closeNav = (e) => {
    dispatch(closeNavModal(e.target.id))
  }
  return (
    <div onClick={closeNav} id="nav-backdrop" className='fixed top-20 -left-3 -right-3 -bottom-3 z-[55] bg-pureBlack bg-opacity-25 lg:hidden '>
      <div className='px-10 py-6 bg-pureWhite md:py-[5rem]'>
        <HomeSubImages />
      </div>
    </div>
  )
}

export default NavModal