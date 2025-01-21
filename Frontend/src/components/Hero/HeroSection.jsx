import React from 'react'
import Slider from '../Slider/Slider';
import Image1 from "../../../public/hero.jpg";
import Image2 from "../../../public/hero2.jpg";
import Image3 from "../../../public/hero3.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HeroSection = () => {
  gsap.registerEffect(ScrollTrigger)

  useGSAP(()=>{
    gsap.from(".gsapAnimation",{
      y:20,
      opacity:0,
      duration:3,
      ease:"elastic.out(1,0.3)"
    })
  })

  const images = [
      Image1,
      Image2,
      Image3,
  ];

  return (
    <div 
       className='w-full h-[55svh] relative'
    >
      <Slider images={images} />

      <div
        className='w-full h-full absolute top-0 flex text-center items-center justify-center'
      >
        <h1
          className='w-[450px] font-bold text-2xl md:text-3xl md:w-[550px] xl:text-4xl xl:w-[600px] text-topBarTextColor font-serif gsapAnimation'
        >
          Over 1000+ fashion enthusiasts are using Exclusive Design apparels Which Discover by us...
        </h1>
      </div>
        
    </div>
  )
}

export default HeroSection