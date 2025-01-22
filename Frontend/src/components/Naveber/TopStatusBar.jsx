import React from 'react';
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const TopStatusBar = () => {
  return (
    <div className={`w-full bg-mainBg`}>
        <div className='flex mx-auto h-[60px] max-w-[1400px] justify-between items-center px-6 sm:px-8 md:px-10  xl:px-0 duration-150 ease-in-out'>
            <div className='flex'>
                <Link to={"/"} className='flex text-center md:mr-3'>
                    <div 
                        className={`border-2 border-sndIconColor hover:border-none hover:bg-mainIconColor w-[35px] h-[35px] rounded-full flex justify-center items-center text-mainIconColor hover:text-sndIconColor ease-in-out duration-100 cursor-pointer mr-3 xl:mr-1`}
                        title='Contact number'
                        >
                        <IoIosCall size={24}/>
                    </div>
                    <h2 className={`hidden lg:block text-topBarTextColor font-semibold mt-1`}>+88-01864461331</h2>
                </Link>
                <Link to={""} className='flex text-center'>
                    <div 
                        className={`border-2 border-sndIconColor hover:border-none hover:bg-mainIconColor w-[35px] h-[35px] rounded-full flex justify-center items-center text-mainIconColor hover:text-sndIconColor ease-in-out duration-100 cursor-pointer mr-3 xl:mr-1`}
                        title='E-Mail'
                    >
                        <IoMail size={23} />
                    </div>
                    <h2 className={`hidden lg:block text-topBarTextColor font-semibold mt-1`}>anontom90@gmail.com</h2>
                </Link>
                <Link to="" className='lg:hidden'>
                    <div 
                        className={`border-2 border-sndIconColor hover:border-none hover:bg-mainIconColor w-[35px] h-[35px] rounded-full flex justify-center items-center text-mainIconColor hover:text-sndIconColor ease-in-out duration-100 cursor-pointer mr-3 xl:mr-1 relative`}
                        title="Cart"
                    >
                        <FaShoppingCart size={21} />
                        <div className={`absolute -top-2 left-4 w-[20px] flex items-center justify-center h-[20px] bg-[red] rounded-full`}>
                            <span className={`text-sndIconColor font-semibold`}>{'0'}</span>
                        </div>
                    </div>
                </Link>
            </div>
            <div className=''>
                <Link to="">
                    <div className={`flex h-[35px] border-2 w-[100px] justify-center items-center rounded-full text-mainIconColor hover:bg-mainIconColor border-sndIconColor hover:text-sndIconColor hover:border-none`}>
                        <div className='flex'>
                            <FaUser size={20} className='mt-1.5px' />
                            <span className={`ml-2 text-sndIconColor`}>Login</span>
                        </div>
                    </div>
                </Link> 
            </div>
        </div>
    </div>
  )
}

export default TopStatusBar