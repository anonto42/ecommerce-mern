import React from 'react'
import Slider from '../Slider/Slider';

const HeroSection = () => {

  const images = [
      "https://picsum.photos/id/1018/1000/600/",
      "https://picsum.photos/id/1015/1000/600/",
      "https://picsum.photos/id/1019/1000/600/",
  ];

  return (
    <div 
       className='w-full h-[55svh] relative'
    >
      <Slider images={images} />

      <div
        className='w-full h-full absolute top-0'
      >
        
      </div>
        
    </div>
  )
}

export default HeroSection