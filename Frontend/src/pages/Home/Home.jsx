import React from 'react'
import HeroSection from '../../components/Hero/HeroSection'
import BestSellingProducts from '../../components/Highlights/BestSellingProducts'

const Home = () => {
  return (
    <div className='min-h-svh w-full'>
      <HeroSection />
      <BestSellingProducts />
    </div>
  )
}

export default Home