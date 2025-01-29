import React, { useState } from 'react';
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const ProductOfCart = () => {
    const[image,setImage] = useState(false)
  return (
    <div
      className='w-full max-w-[900px] min-h-[300px] border-2 border-topBarTextColor rounded-xl bg-[#80808023] mx-auto'
    >
      <div
        className='w-full h-[80px] border-b-2 border-topBarTextColor flex justify-between px-4 text-topBarTextColor font-medium'
      >
        <div
          className='w-[50%] h-full flex items-center text-lg '
        >
          <h2>Product</h2>
        </div>


        <div
          className='w-[50%] h-full flex justify-end items-center'
        >
          <div
            className='w-[50px] h-[65px] mr-3 overflow-hidden rounded-md relative'
          >
            <div
                className={`absolute w-full h-full z-10 bg-slate-200 ${!image?"opacity-100":"opacity-0"} duration-100 ease-linear`}
            />
            <img 
                className='w-full h-full'
                src="" 
                alt=""
                loading='lazy'
                onLoad={()=>setImage(true)}
                />
          </div>
          <div
          >
            <h2
                className='text-[14px] w-[56px] md:w-auto'
            >{"Title of the Product"}</h2>
            <h3
              className='md:text-sm text-[12px]'
            >Size: {"M"}</h3>
          </div>
        </div>

      </div>

      <div
        className='w-full h-[80px] border-b-2 border-topBarTextColor flex justify-between px-4 text-topBarTextColor font-medium'
      >
        <div
          className='w-[50%] h-full flex items-center text-lg '
        >
          <h2>Price</h2>
        </div>


        <div
          className='w-[50%] h-full flex justify-end items-center'
        >
            <h2>{"99.99"} BDT</h2>
        </div>

      </div>

      <div
        className='w-full h-[80px] border-b-2 border-topBarTextColor flex justify-between px-4 text-topBarTextColor font-medium'
      >
        <div
          className='w-[50%] h-full flex items-center text-lg '
        >
          <h2>Quantity</h2>
        </div>


        <div
          className='w-[50%] h-full flex justify-end items-center'
        >
            <div
                className='flex items-center'
            >
                <CiCircleMinus
                    className='text-4xl active:scale-95 duration-100 ease-in-out cursor-pointer'
                />
                <span 
                    className='mx-4'
                >
                    {"99.99"} 
                </span>
                <CiCirclePlus 
                    className='text-4xl active:scale-95 duration-100 ease-in-out cursor-pointer'
                />
            </div>
        </div>

      </div>


      <div
        className='w-full h-[80px] border-b-2 border-topBarTextColor flex justify-between px-4 text-topBarTextColor font-medium'
      >
        <div
          className='w-[50%] h-full flex items-center text-lg '
        >
          <h2>Total</h2>
        </div>


        <div
          className='w-[50%] h-full flex justify-end items-center'
        >
            <div
                className='flex items-center'
            >
                <h2>{"99.99"} BDT</h2>
            </div>
        </div>

      </div>

      <div
        className='w-full h-[80px] border-b-2 border-topBarTextColor flex justify-between px-4 text-topBarTextColor font-medium'
      >
        <div
          className='w-[50%] h-full flex items-center text-lg '
        >
          <h2>Remove</h2>
        </div>


        <div
          className='w-[50%] h-full flex justify-end items-center'
        >
            <div
                className='flex items-center'
            >
                <RiDeleteBin6Line 
                    className='p-2 rounded-full border-topBarTextColor w-[40px] h-[40px] border-2 active:scale-95 duration-100 ease-in-out cursor-pointer' 
                />
            </div>
        </div>

      </div>

      <div
        className='w-full h-[80px] flex justify-between px-4 text-topBarTextColor font-medium'
      >
        <div
          className='w-[50%] h-full flex items-center '
        >
          <button
            onClick={()=>window.location.href ="/"}
            className='w-[120px] h-[45px] text-sm text-textDarkColor rounded-full shadow-md cursor-pointer font-semibold active:scale-95 shadow-[#000000d0] bg-mainIconColor'
          >Continue Shopping</button>
        </div>


        <div
          className='w-[50%] h-full flex justify-end items-center'
        >
            <div
                className='flex items-center'
            >
                <button
                    className='w-[120px] h-[45px] text-sm text-textDarkColor rounded-full shadow-md cursor-pointer font-semibold active:scale-95 shadow-[#000000d0] bg-mainIconColor'
                >Checkout</button>
            </div>
        </div>

      </div>

    </div>
  )
}

export default ProductOfCart