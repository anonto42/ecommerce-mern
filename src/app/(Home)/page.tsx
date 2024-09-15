"use client"
import React from 'react'
import Cont from './Lib/Cont'

const page = () => {
  return (
    <div style={{backgroundImage:`url("/Image/bg-1.jpg")`}} className='w-full bg-cover'>
        <div className='max-w-[1400px] mx-auto h-svh flex justify-center items-center text-white'>
            <div className="w-[330px] text-center">
                <h2 className='text-[30px] font-semibold'>Lorem ipsum dolor sit.</h2>
                <p className='text-[18px] font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
            </div>
        </div>
        {/* Extra items */}
        <Cont />
    </div>
  )
}

export default page