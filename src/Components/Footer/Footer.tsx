"use client"
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[300px] bg-[#c4c4c4] relative text-white'>
        <div className='max-w-[1400px] h-full mx-auto relative flex justify-between'>
            <div className='md:w-[150px] w-[120px] pt-5 md:pt-3 absolute top-7 left-2 sm:left-5 md:left-12 xl:left-0'>
                <a href="/">
                    <img src="/Image/logo.svg" className='w-full h-full' alt="logo" />
                </a>
            </div>
            <div className='w-[300px] h-full absolute right-2 sm:right-5 md:right-12 xl:right-0 text-center text-black capitalize font-medium pt-3'>
                <h1 className='my-2 text-[20px] mt-6'><a href="">Contact Us</a></h1>
                <a href="/contact">
                  <button className='w-[140px] h-[50px] shadow-md bg-[yellow] rounded-md text-[20px] text-[#646363] active:scale-105 duration-150 ease-linear mt-6'>Contact</button>
                </a>
            </div>
        </div>
        <div className='w-full h-[100px] bottom-0 absolute bg-[#02020b]'>
            <div className='max-w-[1400px] h-full mx-auto flex justify-center items-center'>
                <div className='flex items-center'><strong className='text-[20px] mr-2'>©</strong> All Rights Reserved 2024 - 2027 | Sohidul Islam Ananto</div>
            </div>
        </div>
    </div>
  )
}

export default Footer