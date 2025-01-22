import React, { useEffect } from 'react'
import { useSelector } from "react-redux"
import ShowcaseSlider from '../Slider/ShowcaseSlider'

const BestSellingProducts = () => {
  const {appData , userData} = useSelector( data => data.applicationData)
  return (
    <div 
      className='w-full min-h-[300px]'>
      <div
        className='max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 xl:px-0 h-full pt-4 sm:pt-8 md:pt-10'
      >
        <h1 className='text-topBarTextColor text-xl font-semibold font-serif'>Best Selling Products</h1>
        <div
          className='w-full h-full bg-gray-200'
        >
          <ShowcaseSlider cart={appData.cart} />
        </div>
      </div>
    </div>
  )
}

export default BestSellingProducts