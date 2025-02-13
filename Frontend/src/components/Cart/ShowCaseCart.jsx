import React, { useState } from 'react';
import { MdStar } from "react-icons/md";
import { RotatingLines } from 'react-loader-spinner';

const ShowCaseCart = ({price,title,images,reviews,count,mr=false,description}) => {
    const [hover,setHover] = useState(1);
    const [load,setLoad] = useState(false);
  return (
    <div
        title='Click to view details'
        onMouseEnter={()=>setHover(2)}
        onMouseLeave={()=>setHover(1)}
        className={`w-[215px] h-[360px] bg-[#646464] ${mr?"mr-2 sm:mr-3 md:mr-4":"mr-0"} rounded-lg overflow-hidden cursor-pointer hover:-translate-y-2 duration-150 ease-in-out hover:shadow-lg hover:shadow-[#000000] text-topBarTextColor hover:scale-[1.01]`}
        style={
            {
                transform:`translateX(-${count * 100}%)`
            }
        }
    >
        <div
            className='w-full h-[200px] relative'
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
        <div 
            className='flex justify-start items-center pl-2 py-1'>
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
        <small className='px-2 h-[10px] overflow-hidden font-light'>
            {
                description.length > 28 ?
                    description.substring(0, 28) + "..."
                    : description + "."
            }
        </small>
        <div 
            className='w-full h-[60px] bg-whit flex justify-center items-center'
        >
            <button
                className={hover===2? 'w-[80%] h-[80%] rounded-lg bg-topBarTextColor text-textDarkColor font-semibold duration-100 ease-in-out':'w-[80%] h-[80%] border-2 rounded-lg border-topBarTextColor font-semibold duration-100 ease-in-out'}
            >View Product</button>
        </div>
    </div>
  )
}

export default ShowCaseCart