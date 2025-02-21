import React, { useState } from 'react';
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductOfCart = ({shopNow,data,setDataForOrder}) => {
    const[image,setImage] = useState(false);
    const { product } = data;
    const Navigate = useNavigate()
    const[quantity,setQuantity] = useState(1);
    const user = useSelector( user => user.applicationData.userData);

    const deleteCartItemHandler = async () => {
      try {
        
        const responce = await axios.post(`${import.meta.env.VITE_REACT_SERVER_API}/user/dcart`,{ id:data._id});

        toast.success(`${responce.data.message}`)
        toast.warn("please refresh the page!")
      } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
      }
    }
    
    const shopHandler = () => {
      setDataForOrder(
        {
          cartId:data._id,
          productPrice: ( product?.price * quantity ),
          quantity: quantity ,
          userId:data.user,
          product:{
            name:product.name,
            productImage:product.images[0],
            size:product.size,
            productId:product._id
          },
          totalPriceWithDelivery:( user?.city.toLowerCase() === "dhaka" ? ( (product?.price * quantity) + 60 ) : ( (product?.price * quantity ) + 120 ) ),
          shippingAddress:( user?.location == "DEFAULT! Please enter yours..." ? null : { city : user.city , thana: user.thana , location: user.location } ),
          productImage: product?.images?.[0],
          paymentMethod:"",
          orderStatus:""
        }
      )
    }
  return (
    <div
      className={'w-full max-w-[900px] min-h-[300px] border-2 border-topBarTextColor rounded-xl bg-[#80808023] mx-auto mb-8'}
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
            {
              !image?<div
              className={`absolute w-full h-full bg-slate-200 duration-100 ease-linear`}
            />:<></>
            }
            
            <img 
                className='w-full h-full'
                src={product?.images?.[0]} 
                alt=""
                loading='lazy'
                onLoad={()=>setImage(true)}
                />
          </div>
          <div
          >
            <h2
                className='text-[14px] w-[56px] sm:w-auto'
            >{product?.name}</h2>
            <h3
              className='md:text-sm text-[12px]'
            >Size: {product?.size}</h3>
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
            <h2>{product?.price} BDT</h2>
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
                  onClick={()=>setQuantity( e => e - 1)}
                  className='text-4xl active:scale-95 duration-100 ease-in-out cursor-pointer'
                />
                <span 
                  className='mx-4'
                >
                  {quantity} 
                </span>
                <CiCirclePlus 
                  onClick={()=>setQuantity( e => e + 1)}
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
              <h2>{product?.price * quantity} BDT</h2>
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
          onClick={()=>deleteCartItemHandler()}
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
            onClick={()=>Navigate("/")}
            className='w-[120px] h-[45px] text-sm text-textDarkColor rounded-full shadow-md cursor-pointer font-semibold active:scale-95 shadow-[#000000d0] bg-mainIconColor'
          >Continue Shopping</button>
        </div>


        <div
          className='w-[50%] h-full flex justify-end items-center'
        >
          <button
              onClick={()=>{return shopNow( e => !e ) , shopHandler()}}
              className='w-[120px] h-[45px] text-sm text-textDarkColor rounded-full shadow-md cursor-pointer font-semibold active:scale-95 shadow-[#000000d0] bg-mainIconColor'
          >Shop Now</button>
        </div>

      </div>

    </div>
  )
}

export default ProductOfCart