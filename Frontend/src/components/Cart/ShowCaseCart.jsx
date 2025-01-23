import React, { useState } from 'react';
import { MdStar } from "react-icons/md";
import { RotatingLines } from 'react-loader-spinner';

const ShowCaseCart = ({price,title,images,reviews,count}) => {
    const [hover,setHover] = useState(1);
    const [load,setLoad] = useState(false)
  return (
    <div
        onMouseEnter={()=>setHover(2)}
        onMouseLeave={()=>setHover(1)}
        className={`min-w-[200px] h-[250px] bg-[#646464] mr-2 sm:mr-3 md:mr-4 rounded-lg overflow-hidden cursor-pointer hover:-translate-y-2 duration-150 ease-in-out hover:shadow-lg hover:shadow-[#000000] text-topBarTextColor`}
        style={
            {
                transform:`translateX(-${count * 100}%)`
            }
        }
    >
        <div
            className='w-full h-[150px] relative'
        >
            <div
                className='w-full h-full bg-center bg-cover relative flex-shrink-0 bg-[#f0f0f0] flex'
            >
                <img 
                    className={`w-full h-full object-cover transition-opacity duration-500 ease-in ${load? "opacity-100" : "opacity-0"}`}
                    src={images[hover]} 
                    alt="Not found"
                    loading='lazy'
                    onLoad={()=>setLoad(true)}
                />
                {
                    !load?(
                        <div className="absolute inset-0 flex items-center justify-center">
                            <RotatingLines
                                visible={true}
                                height="50"
                                width="50"
                                color="#7F8289"
                                strokeWidth="5"
                                animationDuration="0.75"
                                ariaLabel="rotating-lines-loading"
                            />
                        </div>
                    ):(<></>)
                }
            </div>
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