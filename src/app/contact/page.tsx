"use client"
import React from 'react'

const page = () => {
  return (
    <div style={{backgroundImage:`url("/Image/bg-se.jpg")`}} className='w-full min-h-screen bg-cover px-4 xl:px-0'>
      <div className='max-w-[1400px] h-full mx-auto pt-[20vh]'>
        <div className='text-white font-medium px-6 xl:px-0'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolorum aspernatur cupiditate praesentium quos odio quisquam libero totam. Neque, alias!</p>
        </div>
        <div className='w-[full] min-h-[400px] mt-[20vh] bg-[#ffffff74] border-2 border-white shadow-lg rounded-md flex'>
          <div className="w-[30%] minh-full bg-[#0000005c] text-2xl text-white p-[5%] relative ">
            <h1 className='font-semibold uppercase'>contact</h1>
            <p className='text-xs italic'>And many more think if you want.</p>
            <button title='Submit your comment' className='w-[150px] text-[18px] font-bold rounded-md h-[40px] absolute bottom-2 right-2 bg-green-500 hover:bg-[#2e972e] duration-150 active:scale-75'>Submit</button>
          </div>
          <div className="w-[70%] pt-[5%] px-[5%]">
            <input className='w-full h-[40px] rounded-lg shadow-md px-6 mx-auto outline-none' placeholder='Name' type="text" />
            <input className='w-full h-[40px] rounded-lg shadow-md px-6 mx-auto outline-none my-3' placeholder='Email' type="email" />
            <textarea placeholder='Comment..' className='w-full rounded-md px-6 pt-2 outline-none' id="" cols={20} rows={7}></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page