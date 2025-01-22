import React, { useState } from 'react';
import { MdStar } from "react-icons/md";

const ShowCaseCart = ({price,title,images,reviews,count}) => {
    const [hover,setHover] = useState(false);
  return (
    <div
        onMouseEnter={()=>setHover(!hover)}
        onMouseLeave={()=>setHover(!hover)}
        className={`min-w-[200px] h-[250px] bg-[#646464] mr-2 sm:mr-3 md:mr-4 rounded-lg overflow-hidden cursor-pointer hover:-translate-y-2 duration-150 ease-in-out hover:shadow-lg hover:shadow-[#000000] hover:scale-[1.03] text-topBarTextColor`}
        style={
            {
                transform:`translateX(-${count * 100}%)`,
                scale: hover? 1.03 : 1
            }
        }
    >
        <div
            className='w-full h-[150px] relative'
        >
            <div
                className='w-full h-full bg-center bg-cover absolute'
                style={
                    { 
                        backgroundImage:!hover?`url(${images[0]})`:`url(${images[1]})`
                    }
                }
            />
        </div>
        <h2 
            className='text-xl font-normal pt-2 pl-2 pb-1 font-sans'
        >
            {title}
        </h2>
        <h3
            className='text-[15px] pl-2 font-semibold'
        >
            BDT
            {" "}
            {
                price
            }
        </h3>
        <div className='flex justify-start items-center pl-2 py-1'>
            <div 
                className='text-[#FACA51] flex text-xl mr-2'
            >
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
            </div>
            ( <span className='text-center font-semibold'>
                {
                    reviews.length
                }
            </span> )
        </div>
    </div>
  )
}

export default ShowCaseCart