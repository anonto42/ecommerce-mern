import React, { useState } from 'react'
import ProductOfCart from '../../components/Cart/ProductOfCart';

const CartPage = () => {    
  const[cart,setCart] = useState(true)

  return (
    <div
        className='w-full min-h-[60svh]'
    >
      <div
          className={`max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 xl:px-0 ${!cart?"pt-[150px]":"pt-10"}`}
      >
        {
          !cart?
          <div
          className='max-w-[800px] h-[120px] border-2 mx-auto rounded-xl border-topBarTextColor flex justify-center items-center'
        >
          <h1
            className='text-sm md:text-xl text-topBarTextColor font-medium font-serif'
          >Your did not add any product to your cart yet!</h1>
        </div>:<></>
        }



        <ProductOfCart />

      </div>
    </div>
  )
}

export default CartPage