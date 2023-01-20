

const FeaturesDescription = ({ features, includes }) => {
  return (
    <section className="flex  space-y-[7rem] flex-col lg:items-start lg:flex-row lg:space-y-0 lg:justify-between">
      <div className='flex flex-col space-y-[2rem] text-left lg:w-1/2'>
        <h4 className=' uppercase text-[24px] md:text-[32px] text-pureBlack font-bold'>Features</h4>
        <p className='text-15px text-darkGray text-left'>{features.substring(0, features.length / 2)}</p>
        <p className='text-15px text-darkGray text-left'>{features.substring(features.length / 2, features.length)}</p>
      </div>
      <div className=' items-start justify-center flex flex-col space-y-[2rem] md:flex-row  md:space-x-[6rem] md:justify-start md:space-y-0 lg:space-y-[2rem] lg:justify-center lg:flex-col lg:w-1/2 lg:pl-[8rem] lg:space-x-0'>
        <h4 className=' uppercase text-[24px] md:text-[32px] text-pureBlack font-bold md:w-1/2 lg:w-auto'>in the box</h4>
        <div className='flex flex-col space-y-[1rem] '>
          {
            includes.map((item, index) => {
              const { quantity, item: text } = item
              return <div className='flex items-center space-x-5' key={index}>
                <span className='text-15px font-bold text-orange'>{quantity}x</span>
                <span className='text-15px font-semibold text-darkGray capitalize'>{text}</span>
              </div>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default FeaturesDescription