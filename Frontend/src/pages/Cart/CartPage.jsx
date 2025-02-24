import React, { useState } from 'react'
import ProductOfCart from '../../components/Cart/ProductOfCart';
import Checkout from '../../components/Checkout/Checkout';
import { useSelector } from 'react-redux';
import { Hourglass } from 'react-loader-spinner';

const CartPage = () => {
  const [checkOut,setCheckOut] = useState(false);
  const user = useSelector( user => user.applicationData.userData);
  
  const [dataForOrder,setDataForOrder] = useState ({
    productPrice:"",
    quantity:"",
    userId:"",
    product:{},
    totalPriceWithDelivery:"",
    shippingAddress:"",
    paymentMethod:"",
    paymentStatus:"",
    cartId:""
  })
  return (
    <div
        className='w-full min-h-[60svh] relative pb-8'
    >
      <div
          className={`max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 xl:px-0 pt-10`}
      >

        {
          user?.cart?.length == 0 ? <div className='w-full h-[40vh] flex justify-center items-center'>
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperClass=""
              colors={['#2db12d', '#72a1ed']}
            />
          </div>:
          Object.keys(user.cart[0]).length === 0?
          <div
          className='max-w-[800px] h-[120px] border-2 mx-auto rounded-xl border-topBarTextColor flex justify-center items-center'
        >
          <h1
            className='text-sm md:text-xl text-topBarTextColor font-medium font-serif'
          >Your did not add any product to your cart yet!</h1>
          </div>:<>
            {
              user.cart.map((item,index)=>{
                return(
                  <ProductOfCart setDataForOrder={setDataForOrder} key={index} data={item} shopNow={setCheckOut} />
                )
              })
            }
          </>
        }

      </div>


        {
          checkOut?(
            <Checkout allData={dataForOrder} shopNowSet={setCheckOut} />
          ):(<></>)
        }


    </div>
  )
}

export default CartPage