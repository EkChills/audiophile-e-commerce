import React from 'react'
import HomeSubImages from './homepage-components/HomeSubImages'
import { closeNavModal } from '../features/allProductsSlice'
import { useDispatch, useSelector } from 'react-redux'

const NavModal = () => {
  const dispatch = useDispatch()
  const {isNavOpen} = useSelector((store) => store.allProducts)
  const closeNav = (e) => {
    dispatch(closeNavModal(e.target.id))
  }
  return (
    <div onClick={closeNav} id="nav-backdrop" className={`fixed top-20 -left-3 -right-3 ${isNavOpen ? '  visible opacity-100' : 'invisible opacity-0'} -bottom-3 z-[55] bg-pureBlack bg-opacity-25 lg:hidden `}>
      <div className={`px-10 py-6 bg-pureWhite md:py-[5rem] rounded-b-[1.6rem] ${isNavOpen ? '  visible opacity-100' : 'invisible opacity-0'} transition-all duration-300` }>
        <HomeSubImages />
      </div>
    </div>
  )
}

export default NavModal