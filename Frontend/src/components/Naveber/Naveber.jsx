"use client"
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopBar from './TopBar.Jsx';

const Naveber = () => {

  return (
    <div className='w-full h-auto'>
      {
        window.location.href === "http://localhost:5173/" ? <TopBar /> : ""
      }
         {/* This is the main navebar */}
       <nav className='w-full bg-[#111111] h-[100px] z-50'>
        <div className='max-w-[1280px] mx-auto px-6 sm:px-8 md:px-10  xl:px-0 duration-150 ease-in-out flex justify-between items-center'>
          <div className=''>
            <Link to="/">
              <img src="/Image/Main_Logo.png" height={120} width={120} className='absolute top-10 z-50' alt="" />
            </Link>
          </div>
          <div>
            <Link to="">
              <h2 className='text-[#c9c9c9] text-[16px]'>
                Home
              </h2>
            </Link>
          </div>
        </div>
       </nav>
    </div>
  )
}

export default Naveber