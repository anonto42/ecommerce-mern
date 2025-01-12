import React from 'react';
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Link from 'next/link';

const TopBar = () => {
  return (
    <div className="w-full bg-[#202124]">
        <div className='flex mx-auto h-[60px] max-w-[1280px] justify-between items-center px-6 sm:px-8 md:px-10  xl:px-0 duration-150 ease-in-out'>
            <div className='flex'>
                <Link href={"/"} className='flex text-center mr-3'>
                    <div 
                        className={`border-2 border-[#c9c9c9] hover:border-none hover:bg-[#2db12d] w-[35px] h-[35px] rounded-full flex justify-center items-center text-[#2db12d] hover:text-[#c9c9c9] ease-in-out duration-100 cursor-pointer mr-1`}
                        title='Contact number'
                        >
                        <IoIosCall size={24}/>
                    </div>
                    <h2 className='hidden xl:block text-[#c9c9c9] font-semibold mt-1'>+88-01864461331</h2>
                </Link>
                <Link href={""} className='flex text-center mr-3'>
                    <div 
                        className={`border-2 border-[#c9c9c9] hover:border-none hover:bg-[#2db12d] w-[35px] h-[35px] rounded-full flex justify-center items-center text-[#2db12d] hover:text-[#c9c9c9] ease-in-out duration-100 cursor-pointer mr-3`}
                        title='E-Mail'
                    >
                        <IoMail size={23} />
                    </div>
                    <h2 className='hidden xl:block text-[#c9c9c9] font-semibold mt-1'>+88-01864461331</h2>
                </Link>
                <Link href="" className='xl:hidden'>
                    <div 
                        className={`border-2 border-[#c9c9c9] hover:border-none hover:bg-[#2db12d] w-[35px] h-[35px] rounded-full flex justify-center items-center text-[#2db12d] hover:text-[#c9c9c9] ease-in-out duration-100 cursor-pointer mr-3 relative`}
                        title="Cart"
                    >
                        <FaShoppingCart size={21} />
                        <div className={`absolute -top-2 left-4 w-[20px] flex items-center justify-center h-[20px] bg-[red] rounded-full`}>
                            <span className='text-[#fffff] font-semibold '>{'0'}</span>
                        </div>
                    </div>
                </Link>
                <Link href="" className='xl:hidden'>
                    <div
                        className={`border-2 border-[#c9c9c9] hover:border-none hover:bg-[#2db12d] w-[35px] h-[35px] rounded-full flex justify-center items-center text-[#2db12d] hover:text-[#c9c9c9] ease-in-out duration-100 cursor-pointer relative`}
                        title='Favorite items'
                    >
                        <MdOutlineFavorite size={24} />
                        <div className={`absolute -top-2 left-4 w-[20px] flex items-center justify-center h-[20px] bg-[red] rounded-full`}>
                            <span className='text-[#fffff] font-semibold '>{'0'}</span>
                        </div>
                    </div>
                </Link>
            </div>
            <div className=''>
                <Link href="">
                    <div className={`flex h-[35px] border-2 w-[100px] justify-center items-center rounded-full text-[#2db12d] hover:bg-[#2db12d] border-[#c9c9c9] hover:text-[#c9c9c9] hover:border-none`}>
                        <div className='flex'>
                            <FaUser size={20} className='mt-[1.5px]' />
                            <span className='ml-2 text-white'>Login</span>
                        </div>
                    </div>
                </Link> 
            </div>
        </div>
    </div>
  )
}

export default TopBar