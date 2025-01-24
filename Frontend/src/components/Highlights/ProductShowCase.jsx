import React, { useEffect } from 'react'
import ShowcaseSlider from '../Slider/ShowcaseSlider'

const ProductShowCase = ({showCaseName,sellingProducts}) => {
  return (
    <div 
      className='w-full min-h-[380px]'>
      <div
        className='max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 xl:px-0 h-full pt-4 sm:pt-8 md:pt-10'
      >
        <h1 
            className='text-topBarTextColor text-2xl sm:text-3xl md:text-4xl font-semibold font-serif'>
              {
                  showCaseName
              }
        </h1>
      </div>
      <div
        className='max-w-[1400px] mx-auto min-h-[350px]'
      >
        <ShowcaseSlider cart={sellingProducts} />
      </div>
    </div>
  )
}

export default ProductShowCase