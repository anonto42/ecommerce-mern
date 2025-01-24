import React from 'react'
import Slider from '../Slider/Slider'
import { RotatingLines } from 'react-loader-spinner'

const ScreenBeforeMounted = () => {
  return (
    <div
      className='w-full min-h-svh bg-[#a5a5a5] relative'
    >
      <nav
      >
        <div
          className='w-full h-[70px] bg-[#292929]'
        ></div>
        <div
          className='w-full h-[90px] bg-[#5a5a5a] shadow-xl shadow-[#00000080] z-20 flex justify-center items-center'
        >
          <RotatingLines
          width={55}
          />
        </div>
      </nav>
      <div
        className='w-full h-[55vh] bg-[#ffffffa2] flex justify-center items-center'
      >
        <RotatingLines />
      </div>
    </div>
  )
}

export default ScreenBeforeMounted