import React from 'react'

const ShowcaseSlider = ({cart=[]}) => {
  return (
    <div>
        {
            cart.map((item,index)=>{
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