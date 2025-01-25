import React, { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { Link } from 'react-router-dom'

const SideBarForMobile = ({on}) => {
  return (
    <div
      className={ on ? 'w-[200px] min-h-[70px] bg-mainIconColor absolute z-[51] right-[10%] duration-150 ease-linear top-[60px] rounded-md overflow-hidden' : 'w-[200px] min-h-[0px] bg-mainIconColor absolute z-[51] right-[10%] duration-150 ease-linear top-[60px] rounded-md overflow-hidden'}>
      <Link to={"/"}>
        <h2 className={on?'w-full h-[50px] hover:bg-[green] duration-100 ease-linear font-semibold hover:text-topBarTextColor text-lg border-b-2 flex justify-center items-center':'w-full h-[0px] hover:bg-[green] duration-100 ease-linear font-semibold hover:text-topBarTextColor text-[0px] flex justify-center items-center'}>
          Home
        </h2>
      </Link>
      <Link to={"/products"}>
        <h2 className={on?'w-full h-[50px] hover:bg-[green] duration-100 ease-linear font-semibold hover:text-topBarTextColor text-lg border-b-2 flex justify-center items-center':'w-full h-[0px] hover:bg-[green] duration-100 ease-linear font-semibold hover:text-topBarTextColor text-[0px] flex justify-center items-center'}>
          Products
        </h2>
      </Link>
      <Link to={"/profile"}>
        <h2 className={on?'w-full h-[50px] hover:bg-[green] duration-100 ease-linear font-semibold hover:text-topBarTextColor text-lg border-b-2 flex justify-center items-center':'w-full h-[0px] hover:bg-[green] duration-100 ease-linear font-semibold hover:text-topBarTextColor text-[0px] flex justify-center items-center'}>
          Account
        </h2>
      </Link>
      <Link to={"/contact"}>
        <h2 className={on?'w-full h-[50px] hover:bg-[green] duration-100 ease-linear font-semibold hover:text-topBarTextColor text-lg border-b-2 flex justify-center items-center':'w-full h-[0px] hover:bg-[green] duration-100 ease-linear font-semibold hover:text-topBarTextColor text-[0px] flex justify-center items-center'}>
          Contact
        </h2>
      </Link> 
    </div>
  )
}

export default SideBarForMobile