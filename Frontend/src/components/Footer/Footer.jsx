import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookSquare , FaTwitterSquare , FaLinkedin} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {

    const productsCatagory = ["T-shirt", "polo T-shirt", "Hoodie", "Guiter" , "AllProducts"]
    const Sortcuts = ["Cart", "Products Wishlist", "Registration", "Contact Us"]
    const PolicyInfo = ["Privacy Policy", "Terms of Sevices", "Refund Policy", "Express Delivery"]

  return (
    <div
        className='w-full min-h-[500px] bg-navebarBgColor text-topBarTextColor'
    >
        <div 
            className='max-w-[1280px] h-full mx-auto px-6 sm:px-8 md:px-10  xl:px-0 duration-150 ease-in-out flex justify-between items-center pt-4'
        >
            <div>
                <div
                    className='w-full h-[150px] border-b border-sndIconColor md:flex justify-between'
                >
                    <h1
                        className='text-topBarTextColor text-xl font-[500] sm:text-3xl md:text-4xl'
                    >Join Our Newsletter and Get updated.</h1>
                    <div
                        className='w-full md:w-[50%] h-full flex justify-center md:justify-end items-center'
                    >
                        <div
                            className='flex w-[450px] h-[60px] rounded-lg justify-center text-topBarTextColor items-center overflow-hidden'
                        >
                            <input 
                                type="text" 
                                className='w-full h-full px-4 text-lg font-semibold bg-[#222222ad]'
                                placeholder='Enter your Email'    
                            />
                            <button 
                                className='w-[180px] font-semibold h-full bg-mainIconColor hover:bg-[#44df44] hover:text-[#5f5f5f] duration-100 ease-linear text-xl active:bg-[#2c912c] active:text-[#d6d6d6]'
                            >SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>
                <div 
                    className='w-full h-full'
                >
                    <div
                        className=''
                    >
                        <h2>Company Info</h2>
                        <p>S-Brand, We Design our Tshirts for young generation, we keep positive footprint on all of our items. We are working to bringing a new sense of fashion design and style.</p>
                    </div>
                    <div
                        className='w-full h-full'
                    >
                        <h2>Products Info</h2>
                        {
                            productsCatagory.map((item,i)=>{
                                return (
                                    <Link to={`/cat/${item}`} key={i}>
                                        <h4>{item}</h4>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div>
                        <h2>Shortcuts</h2>
                        {
                            Sortcuts.map((item,i)=>{
                                return (
                                    <Link to={`/${item}`} key={i}>
                                        <h4>{item}</h4>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div>
                        <h2>Policy & Info</h2>
                        {
                            PolicyInfo.map((item,i)=>{
                                return (
                                    <Link to={`/policy/${item}`} key={i}>
                                        <h4>{item}</h4>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                <div
                    className='w-full h-[60px] flex justify-center items-center text-4xl'
                >
                    <div
                        className='w-[200px] items-center h-full flex justify-between'
                    >
                        <Link to={"/"} className='text-[#1877F2]'>
                            <FaFacebookSquare />
                        </Link>
                        <Link to={"/"} className='text-[#962fbf]'>
                            <FaSquareInstagram />
                        </Link>
                        <Link to={"/"} className='text-[#0077B5]'>
                            <FaLinkedin />
                        </Link>
                        <Link to={"/"} className='text-[#1DA1F2]'>
                            <FaTwitterSquare />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div
            className='w-full h-[60px] bg-[black] mt-5'
        >
            <div
                className='max-w-[1280px] h-full mx-auto flex justify-center items-center'
            >
                <p className='text-white text-md text-topBarTextColor'>S-Brand. © All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer