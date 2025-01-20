import React from 'react'
import { Link } from 'react-router-dom'

const NavigatorForMobile = ({items,on}) => {
  return (
    <div
        className={on?'absolute w-[200px] min-h-[50px] top-[129px] z-[90] duration-150 ease-linear rounded-md overflow-hidden right-[150px] bg-navigatorBg opacity-100':'absolute w-[200px] min-h-[0px] top-0 opacity-0 duration-150 ease-linear rounded-md overflow-hidden right-0 bg-navigatorBg'}
    >
        {
            items.map((i,index)=>{
                return(
                    <Link to={`/cat/${i}`} key={index}>
                        <h3 
                            className={on?'text-navigatorTextColor font-semibold text-[18px text-center w-full h-[45px] border-b-2 pt-2 active:scale-110 hover:bg-[rgba(0,0,0,0.2)] duration-150 ease-linear':
                                'text-navigatorTextColor font-semibold text-[18px text-center w-full h-[0px] border-b-2 pt-2 active:scale-110 hover:bg-[rgba(0,0,0,0.2)] duration-75 ease-linear'
                            }
                        >
                            {i}
                        </h3>
                    </Link>
                )
            })
        }
        
    </div>
  )
}

export default NavigatorForMobile