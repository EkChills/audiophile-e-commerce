import React from 'react'

const PageHeader = ({text}) => {
  return (
    <>
      <div className="min-h-[8rem] md:min-h-[12rem] bg-pureBlack grid place-items-center font-bold">
        <h2 className="text-pureWhite text-[28px] uppercase">{text}</h2>
      </div>
    </>
  )
}

export default PageHeader