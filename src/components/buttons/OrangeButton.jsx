import React from 'react'

const OrangeButton = ({text, bgColor,bgColorHover}) => {
  return (
    <button className={`text-pureWhite text-[13px] uppercase px-4 py-3 bg-orange hover:bg-lightOrange w-[11rem] transition-colors duration-300` }>{text}</button>
  )
}

export default OrangeButton