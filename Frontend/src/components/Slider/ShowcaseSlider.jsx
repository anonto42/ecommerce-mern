import React, { useState } from 'react';
import ShowCaseCart from '../Cart/ShowCaseCart';
import { Link } from 'react-router-dom';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const ShowcaseSlider = ({cart}) => {
    const [on,setOn] = useState(false);
    const [position,setPosition] = useState(0);
    let windowsSize = window.innerWidth;
    const fixedSize = Math.floor(windowsSize / 205)

    const increment = () => {
        if( position > ( cart.length - fixedSize))setPosition(1);
        else setPosition(position + 1);
    }
    const decrement = () => {
        if( position < 1 ) setPosition(cart.length - 1 );
        else setPosition(position - 1);
    }
  return (
    <div 
        onMouseEnter={()=>setOn(true)}
        onMouseLeave={()=>setOn(false)}
        className='h-full w-full pl-1 xl:pl-0 py-6 flex overflow-hidden
        relative'
    >
        <GoChevronLeft 
            onClick={()=>decrement()}
            className={on?'absolute w-[60px] h-[60px] border-[3.5px] rounded-full text-center hover:text-textDarkColor hover:border-textDarkColor border-white text-white hover:bg-white active:bg-white top-[45%] text-[60px] z-30 cursor-pointer duration-200 ease-in-out left-5 bg-[#16b91679]' : 'absolute w-[60px] h-[60px] border-[3.5px] rounded-full text-center hover:text-textDarkColor hover:border-textDarkColor border-white text-white hover:bg-white active:bg-white top-[45%] text-[60px] z-30 cursor-pointer duration-200 ease-in-out left-5 xl:-left-[100px] bg-[#16b91679]' }
        />

        <GoChevronRight 
            onClick={()=>increment()}
            className={on?'absolute w-[60px] h-[60px] border-[3.5px] rounded-full text-center hover:text-textDarkColor hover:border-textDarkColor border-white text-white hover:bg-white active:bg-white top-[45%] text-[60px] z-30 cursor-pointer duration-200 ease-in-out right-5 bg-[#16b91679]' : 'absolute w-[60px] h-[60px] border-[3.5px] rounded-full text-centerhover:text-textDarkColor hover:border-textDarkColor border-white text-white hover:bg-white active:bg-white top-[45%] text-[60px] z-30 cursor-pointer duration-200 ease-in-out right-5 xl:-right-[100px] bg-[#16b91679]' }
        />


        {
            cart.map((data,index)=>{
                const {price,title,images,reviews} = data;
                return (
                    <Link 
                        key={index} 
                        to={`/product/${title}`}
                        >
                        <ShowCaseCart 
                            mr={true}
                            price={price}
                            title={title}
                            images={images || defualtImage}
                            reviews={reviews}
                            count={position}
                        />
                    </Link>
                )
            })
        }
    </div>
  )
}

export default ShowcaseSlider