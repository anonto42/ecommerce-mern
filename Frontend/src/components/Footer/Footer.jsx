import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookSquare , FaTwitterSquare , FaLinkedin} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { useSelector } from 'react-redux';

const Footer = () => {
    const { catagorys } = useSelector( e => e.applicationData.appData);
    const Sortcuts = ["products", "profile", "auth", "contact"];
    const PolicyInfo = ["Privacy Policy", "Terms of Sevices", "Refund Policy", "Express Delivery"];
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return (
    <div
        className='w-full min-h-[300px] bg-navebarBgColor text-topBarTextColor'
    >
        <div
            className='w-full border-b-[0.1px] h-auto border-sndIconColor'
        >
            <div className='h-[150px] md:flex max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 xl:px-0 duration-150 ease-in-out justify-between py-6 md:py-0'>
                <h1
                    className='text-topBarTextColor text-xl font-[500] sm:text-2xl md:flex items-center md:text-3xl'
                >Join Our Newsletter and Get updated.</h1>
                <div
                    className='w-full md:w-[50%] h-auto mt-2 sm:mt-0 sm:h-full flex justify-center md:justify-end items-center mb-1'
                >
                    <div
                        className='flex w-[450px] xl:w-[550px] h-[50px] md:h-[55px] rounded-lg justify-center text-topBarTextColor items-center overflow-hidden'
                    >
                        <input 
                            type="email" 
                            className='w-full h-full px-4 text-sm md:text-lg font-semibold bg-[#222222ad]'
                            placeholder='Enter your Email'    
                        />
                        <button 
                            className='w-[180px] font-semibold h-full bg-mainIconColor hover:bg-[#44df44] hover:text-[#5f5f5f] duration-100 ease-linear text-base md:text-[17px] active:bg-[#2c912c] active:text-[#d6d6d6]'
                        >SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div 
            className='max-w-[1400px] h-full mx-auto px-6 sm:px-8 md:px-10  xl:px-0 duration-150 ease-in-out pt-4'
        >
            <div className='w-full h-full'>
                <div 
                    className='w-full h-full grid sm:grid-cols-2 md:grid-cols-4 '
                >
                    <div
                        className='sm:w-[90%] mb-4 sm:text-center'
                    >
                        <h2 className='text-2xl text-topBarTextColor font-semibold mb-3'>Company Info</h2>
                        <p className='text-sm text-sndTextColor'>S-Brand, We Design our product for young generation, we keep positive footprint on all of our items. We are working to bringing a new sense of fashion design and style.</p>
                    </div>
                    <div
                        className='mb-4 sm:text-center'
                    >
                        <h2 className='text-2xl text-topBarTextColor font-semibold mb-3'>Products Info</h2>
                        {
                            catagorys?.length > 4 ? 
                            catagorys.slice(0,5).map((item,i)=>{
                                return (
                                    <div key={i}>
                                        <Link to={`/products?cat=${item}`}>
                                            <p className='text-sm text-sndTextColor hover:text-[gray] mb-1'>{capitalize(item)}</p>
                                        </Link>
                                    </div>
                                )
                            })
                            : catagorys.map((item,i)=>{
                                return (
                                    <Link to={`/cat/${item}`} key={i}>
                                        <p className='text-sm text-sndTextColor hover:text-[gray] mb-1'>{item}</p>
                                    </Link>
                                )
                            })
                        }
                        <Link to={`/products?cat="all"`}>
                                <p className='text-sm text-sndTextColor hover:text-[gray] mb-1'>All Products</p>
                        </Link>
                    </div>
                    <div 
                        className='mb-4 sm:text-center'
                    >
                        <h2 className='text-2xl text-topBarTextColor font-semibold mb-3'>Shortcuts</h2>
                        {
                            Sortcuts.map((item,i)=>{
                                return (
                                    <Link to={`/${item.toLowerCase()}`} key={i}>
                                        <p className='text-sm text-sndTextColor hover:text-[gray] mb-1'>{ 
                                            item === "contact"?
                                            "Contact Us" : 
                                            item === "auth" ?
                                            "Registration":
                                            capitalize(item)
                                        }</p>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div
                        className='mb-4 sm:text-center'
                    >
                        <h2 className='text-2xl text-topBarTextColor font-semibold mb-3'>Policy & Info</h2>
                        {
                            PolicyInfo.map((item,i)=>{
                                return (
                                    <Link to={`/policy/${item}`} key={i}>
                                        <p className='text-sm text-sndTextColor hover:text-[gray] mb-1'>{item}</p>
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
                        <a to={"/"} className='text-[#1877F2]'>
                            <FaFacebookSquare />
                        </a>
                        <a to={"/"} className='text-[#962fbf]'>
                            <FaSquareInstagram />
                        </a>
                        <a to={"/"} className='text-[#0077B5]'>
                            <FaLinkedin />
                        </a>
                        <a to={"/"} className='text-[#1DA1F2]'>
                            <FaTwitterSquare />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div
            className='w-full h-[60px] bg-[black] mt-2'
        >
            <div
                className='max-w-[1280px] h-full mx-auto flex justify-center items-center'
            >
                <p className='text-md text-topBarTextColor'>S-Brand. © All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer