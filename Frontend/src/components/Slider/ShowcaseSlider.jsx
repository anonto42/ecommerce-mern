import React from 'react'

const ShowcaseSlider = ({cart}) => {
    console.log(cart)
  return (
    <div className='w-full h-full flex'>
        {
            cart.map((item,index)=>{
                const {price,title,image} = item
                return(
                    <div 
                        key={index}
                    >

                    </div>
                )
            })
        }
    </div>
  )
}

export default ShowcaseSlider