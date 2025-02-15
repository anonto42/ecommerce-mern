import React from 'react';
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TopStatusBar = () => {
    const { userType } = useSelector( event => event.applicationData.userData );
    const Navigatior = useNavigate();
    const data = useSelector( e => e.applicationData.userData.cart);
  return (
    <div className={`w-full bg-mainBg`}>
        <div className='flex mx-auto h-[60px] max-w-[1400px] justify-between items-center px-6 sm:px-8 md:px-10  xl:px-0 duration-150 ease-in-out'>
            <div className='flex'>
                <Link to={"/contact"} className='flex text-center lg:mr-3'>
                    <div 
                        className={`border-2 border-sndIconColor hover:border-none hover:bg-mainIconColor w-[35px] h-[35px] rounded-full flex justify-center items-center text-mainIconColor hover:text-sndIconColor ease-in-out duration-100 cursor-pointer mr-3 xl:mr-1`}
                        title='Contact number'
                        >
                        <IoIosCall size={24}/>
                    </div>
                    <h2 className={`hidden lg:block text-topBarTextColor font-semibold mt-1`}>+88-01864461331</h2>
                </Link>
                <Link to={"/contact"} className='flex text-center'>
                    <div 
                        className={`border-2 border-sndIconColor hover:border-none hover:bg-mainIconColor w-[35px] h-[35px] rounded-full flex justify-center items-center text-mainIconColor hover:text-sndIconColor ease-in-out duration-100 cursor-pointer mr-3 xl:mr-1`}
                        title='E-Mail'
                    >
                        <IoMail size={23} />
                    </div>
                    <h2 className={`hidden lg:block text-topBarTextColor font-semibold mt-1`}>anontom90@gmail.com</h2>
                </Link>
                <Link to="/cart" className='lg:hidden'>
                    <div 
                        onClick={()=>Navigatior("/cart")}
                        className="border-2 border-sndIconColor hover:border-none hover:bg-mainIconColor w-[35px] h-[35px] rounded-full flex justify-center items-center text-mainIconColor hover:text-sndIconColor ease-in-out duration-100 cursor-pointer mr-3 xl:mr-1 relative"
                        title="Cart"
                    >
                        <FaShoppingCart size={21} />
                        <div className={`absolute -top-2 left-4 w-[20px] flex items-center justify-center h-[20px] bg-[red] rounded-full`}>
                            <span className={`text-sndIconColor font-semibold text-[11px]`}>{data?.length}</span>
                        </div>
                    </div>
                </Link>
            </div>
            <div className=''>
                <Link to=
                    {
                        userType !== undefined? 
                            `${ 
                                userType === "admin" ? "/admin/dashboard" : "/profile" 
                            }`: "/auth"
                    }
                >
                    <div className={`flex h-[35px] border-2 w-[100px] justify-center items-center rounded-full text-mainIconColor hover:bg-mainIconColor border-sndIconColor hover:text-sndIconColor hover:border-none`}>
                        <div className='flex'>
                            <FaUser 
                                size={20} 
                                className={`mt-1.5px ${userType !== undefined ? "hidden" : "block"}`} 
                            />
                            <span className={`ml-2 text-sndIconColor ${userType !== undefined? "text-sm ml-1":"text-md ml-2"}`}>
                                {
                                    userType !== undefined? 
                                        `${ 
                                            userType !== "user" ?
                                            "Dashboard" : "Account"
                                        }`:"Login"
                                }
                            </span>
                        </div>
                    </div>
                </Link> 
            </div>
        </div>
    </div>
  )
}

export default TopStatusBar