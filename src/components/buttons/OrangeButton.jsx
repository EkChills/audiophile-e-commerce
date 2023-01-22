import React from 'react'
import { useDispatch } from 'react-redux'

const OrangeButton = ({text, bgColor,bgColorHover, onClick}) => {
  return (
    <button className={`text-pureWhite text-[13px] uppercase px-4 py-3 bg-orange hover:bg-lightOrange w-[11rem] transition-colors duration-300` } onClick={onClick}>{text}</button>
  )
}

export default OrangeButton