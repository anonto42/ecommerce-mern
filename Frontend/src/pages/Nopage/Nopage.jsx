import React from 'react';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Nopage = () => {
  return (
    <div
        className='w-full h-[50svh] flex justify-center items-center text-topBarTextColor'
    >
        <div 
            className='text-center'
        >
            <h1 
                className='text-center text-xl md:text-2xl my-4'
            >
                <strong>
                    Sorry, this page isn't available.
                </strong>
                    <br />
                <small
                    className='font-light italic'
                >
                    Click here to return to the homepage.
                </small>
            </h1>
            <Link to={"/"}>
                <button 
                    className='md:text-4xl text-3xl active:scale-105 text-mainIconColor'
                >
                    <FaHome />
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Nopage