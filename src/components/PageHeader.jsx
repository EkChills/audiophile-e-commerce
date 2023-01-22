import React from 'react'

const PageHeader = ({text}) => {
  return (
    <>
      <div className="min-h-[10rem] md:min-h-[12rem] bg-pureBlack flex items-center justify-center font-bold">
        <h2 className="text-pureWhite text-[28px] uppercase mt-10">{text}</h2>
      </div>
    </>
  )
}

export default PageHeader