import React from 'react'
import HeroSection from '../../components/Hero/HeroSection'
import ProductShowCase from '../../components/Highlights/ProductShowCase'
import { useSelector } from 'react-redux'

const Home = () => {
  const { bestSellingProducts } = useSelector( data => data.applicationData.appData )
  const data = useSelector( data => data.applicationData.appData )
  // console.log(data)
  return (
    <div className='min-h-svh w-full'>
      <HeroSection />
      <ProductShowCase showCaseName={"Best Selling Products"} bestSellingProducts={bestSellingProducts} />
    </div>
  )
}

export default Home