import React from 'react'
import HeroSection from '../../components/Hero/HeroSection'
import ProductShowCase from '../../components/Highlights/ProductShowCase'
import { useSelector } from 'react-redux'

const Home = () => {
  const { bestSellingProducts , specialOffersDiscounts , products } = useSelector( data => data.applicationData.appData )
  const data = useSelector( data => data.applicationData.appData )
  // console.log(data)
  return (
    <div className='min-h-svh w-full'>
      <HeroSection />
      <ProductShowCase key={1} showCaseName={"Special Offers"} sellingProducts={specialOffersDiscounts} />
      <ProductShowCase key={2} showCaseName={"Best Selling Products"} sellingProducts={bestSellingProducts} />
      <ProductShowCase key={3} showCaseName={"All hot item's"} sellingProducts={products} />
    </div>
  )
}

export default Home