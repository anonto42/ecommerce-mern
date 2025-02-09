import React from 'react'
import Slider from '../Slider/Slider';
import Image1 from "/hero.jpg";
import Image2 from "/hero2.jpg";
import Image3 from "/hero3.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSelector } from 'react-redux';

const HeroSection = () => {
  gsap.registerEffect(ScrollTrigger)

  useGSAP(()=>{
    gsap.from(".gsapAnimation",{
      y:20,
      opacity:0,
      duration:1,
      // ease:"elastic.out(1,0.3)"
    })

    gsap.from(".gsapBtnAnimation",{
      y:15,
      opacity:0,
      duration:1,
      // ease:"elastic.out(1,0.3)"
    })
  })

  // get the gero data for show
  const { heroData } = useSelector( data => data.applicationData.appData );

  return (
    <div 
       className='w-full h-[55svh] xl:h-[60vh] 2xl:h-[65vh] relative'
    >
      <button
        className='border-2 text-topBarTextColor xl:p-3 p-2 md:text-lg xl:text-xl 2xl:text-2xl font-semibold rounded-lg mt-3 hover:bg-topBarTextColor hover:text-textDarkColor z-[11] cursor-pointer duration-200 absolute xl:top-[69%] top-[35svh] left-[50%] xl:left-[49.3%] translate-x-[-50%] translate-y-[-50%] gsapBtnAnimation opacity-[100%]'
      >Discover More</button>
      <Slider images={heroData.images} />

      <div
        className='w-full h-full absolute top-0 flex text-center items-center justify-center pb-[50px]'
      >
         <h1
          className='w-[450px] font-bold text-2xl md:text-3xl md:w-[550px] xl:text-4xl 2xl:text-5xl xl:w-[600px] 2xl:w-[800px] text-topBarTextColor font-serif gsapAnimation'
        >
          {heroData.topText}
        </h1>
      </div>
        
    </div>
  )
}

export default HeroSection