import React, { useState } from 'react';
import { IoIosSend } from "react-icons/io";
import { GrAttachment } from "react-icons/gr";

const MessageComponent = () => {
  const [chatNum,setChatNum] = useState(1)
  const [catNum,setCatNum] = useState(1)
  const image = "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-875.jpg?semt=ais_hybrid"
  return (
    <div
      className='w-full h-full relative'
    >

      {/* Side chat bar */}
      <div
        className='md:w-[120px] w-[80px] h-[90svh] overflow-y-auto overflow-x-hidden bg-[#0000006e] top-0 left-0 absolute'
      >

        <div
          className={`text-topBarTextColor mx-auto mt-7 relative w-full h-[90px] flex justify-center items-center ${chatNum==catNum?"bg-[#1c6bff44]":""}`}
        >
          <div
            className=''
          >
            <div
              className='w-[25px] h-[25px] bg-red-500 rounded-full absolute top-1 md:right-7 right-3 flex justify-center items-center'
            >
              <span className='text-[11px] text-white'>{"2"}</span>
            </div>
            <div
              className='md:w-[50px] md:h-[50px] w-[40px] h-[40px] mx-auto rounded-full bg-yellow-50 cursor-pointer'
            />
            <h4
              className='md:text-sm text-[12px] text-center font-serif font-thin'
            >The user name</h4>
          </div>
        </div>


        <div
          className='text-topBarTextColor mx-auto mt-7 relative'
        >
          <div
            className='w-[25px] h-[25px] bg-red-500 rounded-full absolute top-0 md:right-7 right-3 flex justify-center items-center'
          >
            <span className='text-[11px] text-white'>{"2"}</span>
          </div>
          <div
            className='md:w-[50px] md:h-[50px] w-[40px] h-[40px] mx-auto rounded-full bg-yellow-50 cursor-pointer'
          />
          <h4
            className='md:text-sm text-[12px] text-center font-serif font-thin'
          >The user name</h4>
        </div>
        <div
          className='text-topBarTextColor mx-auto mt-7 relative'
        >
          <div
            className='w-[25px] h-[25px] bg-red-500 rounded-full absolute top-0 md:right-7 right-3 flex justify-center items-center'
          >
            <span className='text-[11px] text-white'>{"2"}</span>
          </div>
          <div
            className='md:w-[50px] md:h-[50px] w-[40px] h-[40px] mx-auto rounded-full bg-yellow-50 cursor-pointer'
          />
          <h4
            className='md:text-sm text-[12px] text-center font-serif font-thin'
          >The user name</h4>
        </div>
        <div
          className='text-topBarTextColor mx-auto mt-7 relative'
        >
          <div
            className='w-[25px] h-[25px] bg-red-500 rounded-full absolute top-0 md:right-7 right-3 flex justify-center items-center'
          >
            <span className='text-[11px] text-white'>{"2"}</span>
          </div>
          <div
            className='md:w-[50px] md:h-[50px] w-[40px] h-[40px] mx-auto rounded-full bg-yellow-50 cursor-pointer'
          />
          <h4
            className='md:text-sm text-[12px] text-center font-serif font-thin'
          >The user name</h4>
        </div>
        

      </div>


      {/* Cheat body */}

      <div
        className='w-full h-[90svh] overflow-y-auto'
      >
        <div className="w-full h-auto relative pl-[96px] md:pl-[136px] pb-[96px] flex flex-col-reverse gap-4 p-5">
          {/* Person A (Left) */}
          <div className="max-w-[150px] md:max-w-[320px] min-h-[40px] bg-slate-300 shadow-lg rounded-3xl py-3 px-5 text-center flex justify-center items-center text-[15px] font-semibold self-start">
            <span>I'm looking for some help with my project.</span>
          </div>

          {/* Person B (Right) */}
          <div className="max-w-[150px] md:max-w-[320px] min-h-[40px] bg-blue-500 text-white shadow-lg rounded-3xl py-3 px-5 text-center flex justify-center items-center text-[15px] font-semibold self-end">
            <span>Sure! What do you need?</span>
          </div>

          {/* Image Message from Person A (Left) */}
          <div className="max-w-[180px] md:max-w-[340px] bg-slate-300 shadow-lg rounded-3xl p-3 self-start">
            <img
              src={image}
              alt="Sent Image"
              className="rounded-lg max-w-full h-auto"
            />
          </div>

          {/* Person A (Left) */}
          <div className="max-w-[150px] md:max-w-[320px] min-h-[40px] bg-slate-300 shadow-lg rounded-3xl py-3 px-5 text-center flex justify-center items-center text-[15px] font-semibold self-start">
            <span>Hello? alsdkfasd asdlfkasdf asldkfalsd asldkfalsdk</span>
          </div>

          {/* Person B (Right) */}
          <div className="max-w-[150px] md:max-w-[320px] min-h-[40px] bg-blue-500 text-white shadow-lg rounded-3xl py-3 px-5 text-center flex justify-center items-center text-[15px] font-semibold self-end">
            <span>Hi! How can I help you?Hi! How can I help you?</span>
          </div>

          {/* Image Message from Person B (Right) */}
          <div className="max-w-[180px] md:max-w-[340px] bg-blue-500 shadow-lg rounded-3xl p-3 self-end">
            <img
              src={image}
              alt="Sent Image"
              className="rounded-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>




      {/* TextBox */}
      <div
          className='w-full h-[80px] bg-[#161616] absolute bottom-0 lg:rounded-r-xl shadow-[0px_-4px_10px_rgba(0,0,0,0.1)]'
        >
          <div
            className='w-full h-full flex justify-center items-center'
          >
            <div
              className='w-[90%] h-full flex justify-between items-center px-3 md:px-6'
            >
              <div
                className='text-2xl text-topBarTextColor cursor-pointer active:scale-110 ease-linear duration-150'
              >
                <GrAttachment />
              </div>
              <div
                className='h-full w-[150px] sm:w-[180px] md:w-[300px]'
              >
                <input 
                  placeholder='Message....'
                  className='h-full w-full bg-transparent outline-none text-white md:placeholder:text-xl md:text-xl'
                  type="text" name="" id="" 
                />
              </div>
              <div
                className='text-3xl text-blue-600 cursor-pointer active:scale-110 ease-linear duration-150'
              >
                <IoIosSend />
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}

export default MessageComponent