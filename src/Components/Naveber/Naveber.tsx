"use client"
import React, { useState } from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import { MdOutlineContactSupport } from 'react-icons/md'
import { RiContactsLine, RiCustomerService2Line } from 'react-icons/ri'

type navigation = "home" | "services" | "about" | "contact"

const Naveber = () => {
    const [navigate , setNavigate] = useState<navigation>();

  return (
    <div className='w-full h-[90px] bg-[#e6c79f00] flex items-center absolute'>
        <div className='w-full mx-auto xl:w-[1400px] xl:px-0 px-12 flex items-center justify-between'>
            {/* Logo */}
            <div className='w-[110px] '>
                <img src="/Image/logo.svg" alt="logo" className='w-full h-full' />
            </div>
            {/* Menu */}
            <div className='hidden md:flex w-[280px] md:w-[300px] xl:w-[330px] justify-between text-[18px] text-[#ffffff] font-medium'>
                <a href="/" onClick={()=>{setNavigate("home")}}>
                    <h4 className={navigate === "home" ? 'cursor-pointer hover:scale-105 hover:text-gray-300 underline text-[#515050]' : 'cursor-pointer hover:scale-105 hover:text-gray-300'} title='Home'>Home</h4>
                </a>
                <a href="/services" onClick={()=>{setNavigate("services")}} >
                    <h4 className={navigate !== "services" ? 'cursor-pointer hover:scale-105 hover:text-gray-300' : 'cursor-pointer hover:scale-105 hover:text-gray-300 underline text-[#515050]'} title='Services'>Services</h4>
                </a>
                <a href="/about" onClick={()=>setNavigate("about")} >
                    <h4 className={navigate !== "about" ? 'cursor-pointer hover:scale-105 hover:text-gray-300': 'cursor-pointer hover:scale-105 hover:text-gray-300 underline text-[#515050]'} title='About'>About</h4>
                </a>
                <a href="/contact" onClick={()=>{setNavigate("contact")}} >
                    <h4 className={navigate !== "contact" ? 'cursor-pointer hover:scale-105 hover:text-gray-300': 'cursor-pointer hover:scale-105 hover:text-gray-300 underline text-[#515050]'} title='Contact'>Contact</h4>
                </a>
            </div>
            {/* Menu for Mobile */}
            <div className='w-[220px] md:hidden flex justify-between text-[26px] text-black'>
                <a href="/" title='Home'>
                    <IoHomeOutline className='cursor-pointer hover:text-gray-300 duration-150' />
                </a>
                <a href="/services" title='Services'>
                    <RiCustomerService2Line />
                </a>
                <a href="/contact" title='Contacts'>
                    <RiContactsLine />
                </a>
                <a href="/about" title='About'>
                    <MdOutlineContactSupport />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Naveber