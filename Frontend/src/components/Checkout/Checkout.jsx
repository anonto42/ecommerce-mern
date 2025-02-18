import axios from 'axios';
import React, { useState } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import { Hourglass } from 'react-loader-spinner';
import { toast } from 'react-toastify';

const Checkout = ({allData,shopNowSet}) => {
  const[load,setLoad] = useState(false);
  const[orderLoad,setOrderLoad] = useState(null);

  // console.log(allData)

  const handleCashOndelivery = async () => {
    try {
      setOrderLoad(true);
      allData.paymentMethod = "CashOndelivery";

      if (!allData.shippingAddress) return toast.error("Please add shipping address.") , setOrderLoad(false);

      const { data } = await axios.post(
        `${import.meta.env.VITE_REACT_SERVER_API}/user/order`,
        allData,
        { withCredentials: true }
      );
      console.log(data)

      const responce = await axios.post(`${import.meta.env.VITE_REACT_SERVER_API}/user/dcart`,{ id:allData.cartId});

      console.log("Cart deleted successfully.", responce)

      toast.success(data.message);
      setOrderLoad(false);
      
      setTimeout(() => {
        window.location.href = "/cart"
      }, 2000);
    } catch (error) {
      console.log(error);
      setOrderLoad(false);
      toast.error(`${error.message}`);
    }
   }
   const onlinePayment = async () => {
    try {
      setOrderLoad(true);

      if (!allData.shippingAddress) return toast.error("Please add shipping address.") , setOrderLoad(false);

      const { data } = await axios.post(
        `${import.meta.env.VITE_REACT_SERVER_API}/user/onliepay`,
        allData,
        { withCredentials: true }
      );

      console.log(data)
      setOrderLoad(false);

      if (data.paymentUrl == "") {
        return toast.error("Please add payment method") , setOrderLoad(false);  
      }

      window.location.href = `${data.paymentUrl}`

    } catch (error) {
      setOrderLoad(false);
      console.log(error)
      toast.error(`${error.response.data.messge}`)
    }
   }
  return (
    <div
      className='absolute w-full h-full top-0'
    >
      <div
        className='w-full h-full relative bg-[#ffffff42]'
        >
        
        <div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#d1dbd1] w-[90%] max-w-[700px] max-h-[80svh] h-[95%] rounded-md shadow-md shadow-black py-4'
        >
          <IoCloseCircleOutline 
           onClick={()=>shopNowSet( e => !e)}
           className='w-[40px] h-[40px] absolute top-6 right-6 cursor-pointer active:scale-105 text-textDarkColor z-10 shadow-md shadow-black rounded-full duration-100 ease-in'
        />
        {
          orderLoad ?
          <div className='absolute z-20 w-full h-[60%] mt-[120px] flex justify-center items-center'>
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperClass=""
              colors={['#2db12d', '#72a1ed']}
            />
          </div> : <></>
        }
        <div
          className='w-[90%] h-full mx-auto border border-textDarkColor rounded-md relative'
        >
          <h2
            className='w-full h-[60px] text-center py-4 border-b border-textDarkColor font-semibold text-textDarkColor md:text-xl text-lg'
          >{allData.product.name}.</h2>

          <div
            // this is the image dive
            className='w-full h-[220px] border-b border-textDarkColor py-2'
          >
            <div
              className='h-[200px] w-[150px] mx-auto border-x relative shadow-sm shadow-black'
            >
              <img 
                src={allData.productImage}
                alt="" 
                loading='lazy'
                onLoad={()=>setLoad(true)}
                className='w-full h-full'
              />

                <div
                  className={`w-full h-full bg-white absolute top-0 z-10 ease-in-out duration-150 ${!load?"opacity-100":"opacity-0"}`}
                >

                </div>

            </div>
          </div>


          <div
            className='flex justify-between items-center px-4 w-full h-[40px] border-b border-textDarkColor'
          >
            <h2
              className='text-lg font-serif'
            >Price</h2>
            <small
              className='italic font-serif font-bold'
            >{allData.productPrice} BDT</small>
          </div>

          <div
            className='flex justify-between items-center px-4 w-full h-[40px] border-b border-textDarkColor'
          >
            <h2
              className='text-lg font-serif'
            >Quantity</h2>
            <small
              className='italic font-serif font-bold'
            >{allData.quantity} PIECE</small>
          </div>
          
          <div
            className='flex justify-between items-center px-4 w-full h-[80px] border-b border-textDarkColor'
          >
            <h2
              className='text-lg w-[100px] font-serif'
            >Total with delivery</h2>

            {
              allData.shippingAddress?
              <small
                className='italic font-serif font-bold'
              >{allData.totalPriceWithDelivery} BDT</small>
              :
              <small
                onClick={()=> window.location.href = "/profile"}
                className='w-[80px] text-center underline text-blue-700 active:text-blue-900 hover:text-blue-600 cursor-pointer'
              >Add Delivery Address</small>
            }
            
          </div>

          <div
            className='flex absolute bottom-0 justify-between items-center px-4 w-full h-[60px] border-t border-textDarkColor'
          >
            <button
              onClick={()=>handleCashOndelivery()}
              className='w-[90px] bg-green-700 text-white text-sm shadow-sm shadow-black duration-100 ease-linear active:scale-95 active:bg-mainIconColor h-[45px] font-semibold font-serif rounded-lg'
            >Cash On <br /> Delivery</button>
            <button
              onClick={()=>onlinePayment()}
              className='w-[90px] bg-green-700 text-white text-sm shadow-sm shadow-black duration-100 ease-linear active:scale-95 active:bg-mainIconColor h-[45px] font-semibold font-serif rounded-lg'
            >Online<br />Payment</button>
          </div>

        </div>

        </div>
      </div>
    </div>
  )
}

export default Checkout