import React from 'react'
import HeroSection from '../../components/Hero/HeroSection'
import ProductShowCase from '../../components/Highlights/ProductShowCase'
import { useSelector } from 'react-redux'
import WhyUs from '../../components/WhyUs/WhyUs'

const Home = () => {
  const { bestSellingProducts , specialOffersDiscounts , products } = useSelector( data => data.applicationData.appData )
  return (
    <div className='min-h-svh w-full'>
      <HeroSection />
      <ProductShowCase key={1} showCaseName={"Special Offers"} sellingProducts={specialOffersDiscounts} />
      <ProductShowCase key={2} showCaseName={"Best Selling Products"} sellingProducts={bestSellingProducts} />
      <ProductShowCase key={3} showCaseName={"All hot item's"} sellingProducts={products} />
      <WhyUs />
    </div>
  )
}

export default Home