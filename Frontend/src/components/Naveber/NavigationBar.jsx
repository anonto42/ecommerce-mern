import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigato from '../Navigator/Navigato';
import { FaBars, FaShoppingCart } from "react-icons/fa";
import SideBarForMobile from './SideBarForMobile';
import { IoClose as IoMdCloseCircle } from "react-icons/io5";
import NavigatorForMobile from '../Navigator/NavigatorForMobir';
import TopStatusBar from './TopStatusBar';

const NavigationBar = () => {
  const [items,setBar] = useState(false);
  const [cato, setCato] = useState(false);
  const [ navTob,setNavBar ] = useState(false);
  let bar = (window.location.href === "https://ecomarts.vercel.app/") || (window.location.href === "http://localhost:5173/")

  useEffect(()=>{
    ;(()=>window.addEventListener("scroll",function(){
    let scrTop = this.window.pageYOffset || document.documentElement.scrollTop;
    if(scrTop > 0 ) setNavBar(true);
    else setNavBar(false);
  }))()
  },[])

  useEffect(()=>{
    ;(()=>{ if ( items == false ) setCato(false) })()
    
  },[items,cato,bar])

  return (
    <div className='w-full h-full pb-[80px]'>
      {
        bar ? <TopStatusBar /> : ""
      }
         {/* This is the main navebar */}
       <div className={!navTob?'w-full bg-navebarBgColor h-[80px] z-50 fixed shadow-md shadow-black':'w-full bg-navebarBgColor h-[80px] z-50 fixed shadow-md shadow-black thebar top-0'}>
        <div className='max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10  xl:px-0 duration-150 ease-in-out flex justify-between items-center h-full relative'>
          <SideBarForMobile on={items} cat={cato} setCat={setCato} item={items} />
          <div className='w-full h-full flex items-center'>
            <Link to="/" className='w-[145px]'>
              <img src="/logo.png" className='w-full h-full' alt="" />
            </Link>
          </div>
          <div className='lg:flex justify-between items-center w-[800px] h-full hidden'>
            <Link to="/">
              <h2 className='text-topBarTextColor text-[18px] hover:scale-105 duration-150 hover:text-[white]'>
                Home
              </h2>
            </Link>
            <Link to="/products">
              <h2 className='text-topBarTextColor text-[18px] hover:scale-105 duration-150 hover:text-[white]'>
                Products
              </h2>
            </Link>
            <h2 
              className='text-topBarTextColor text-[18px] hover:scale-105 duration-150 hover:text-[white] cursor-pointer'
            >
              <Navigato />
            </h2>
            <Link to="/">
              <h2 className='text-topBarTextColor text-[18px] hover:scale-105 duration-150 hover:text-[white]'>
                Contact
              </h2>
            </Link>
            <Link to="/cat" className=''>
                <div 
                  className={`border-2 border-sndIconColor hover:border-none hover:bg-mainIconColor w-[35px] h-[35px] rounded-full flex justify-center items-center text-mainIconColor hover:text-sndIconColor ease-in-out duration-100 cursor-pointer relative`}
                  title="Cart"
                 >
                    <FaShoppingCart size={21} />
                    <div className={`absolute -top-2 left-4 w-[20px] flex items-center justify-center h-[20px] bg-[red] rounded-full`}>
                      <span className={`text-sndIconColor font-semibold`}>{'0'}</span>
                    </div>
                  </div>
            </Link>
          </div>
          <div
            className='lg:hidden w-full h-full flex justify-end items-center'
          >
            {
              items?
              <IoMdCloseCircle
                onClick={()=>setBar(!items)}
               className='text-topBarTextColor text-[45px] active:scale-110 cursor-pointer -mr-3'
              /> 
              :
              <FaBars 
              onClick={()=>setBar(!items)}
              className='text-topBarTextColor text-[30px] active:scale-110 cursor-pointer'
              />
            }
          </div>
        </div>
        <div
          className='relative'
        >
          <NavigatorForMobile on={cato} setCato={setCato} setBar={setBar} items={[1,2,3,54,6,7]} key={items} />
        </div>
       </div>
    </div>
  )
}

export default NavigationBar