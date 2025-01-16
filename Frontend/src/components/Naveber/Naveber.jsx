"use client"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopBar from './TopBar.Jsx';
import Navigato from '../Navigator/Navigato';
import { FaBars } from "react-icons/fa";
import SideBarForMobile from './SideBarForMobile';

const Naveber = () => {
  const [items,setBar] = useState(true);
  return (
    <div className='w-full h-auto'>
      {
        window.location.href === "http://localhost:5173/" ? <TopBar /> : ""
      }
      <SideBarForMobile on={items} setBar={setBar} />
         {/* This is the main navebar */}
       <nav className='w-full bg-navebarBgColor h-[100px] z-50 relative'>
        <div className='max-w-[1280px] mx-auto px-6 sm:px-8 md:px-10  xl:px-0 duration-150 ease-in-out flex justify-between items-center h-full'>
          <div className='w-full h-full flex items-center'>
            <Link to="/" className='w-[145px]'>
              <img src="/logo.png" className='w-full h-full' alt="" />
            </Link>
          </div>
          <div className='xl:flex justify-between items-center w-[60%] h-full hidden'>
            <Link to="/">
              <h2 className='text-topBarTextColor text-[18px] hover:scale-105 duration-150 hover:text-[white]'>
                Home
              </h2>
            </Link>
            <Link to="/">
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
          </div>
          <div
            className='xl:hidden w-full h-full flex justify-end items-center'
          >
            <FaBars 
              onClick={()=>setBar(true)}
              className='text-topBarTextColor text-[30px] active:scale-110'
            />
          </div>
        </div>
       </nav>
    </div>
  )
}

export default Naveber