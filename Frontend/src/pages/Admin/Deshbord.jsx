import React, { Suspense, useState } from 'react';
import { toast } from "react-toastify";
import { MdDashboard } from "react-icons/md";
import { IoStorefront } from "react-icons/io5";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import Loader from '../../components/Loader/Loader';
const DeshbordComponent = React.lazy(()=>import('../../components/Admin/DeshbordComponent'));
const ShopComponent = React.lazy(()=>import('../../components/Admin/ShopComponent'));
const MessageComponent = React.lazy(()=>import('../../components/Admin/MessageComponent'));
const SetingsComponent = React.lazy(()=>import('../../components/Admin/SetingsComponent'));
const UsersComponent = React.lazy(()=>import('../../components/Admin/UsersComponent'));

const Deshbord = () => {

  const [position,setPosition] = useState(1);
  const [logOutState,setLogOut] = useState(false);

  const logOut = () => {
    try {
      setLogOut(!confirm("We will log out your account!"))
      console.log(logOutState)
    } catch (error) {
      toast.error("Couldn't log out. try again")
    }
  }

  return (
    <div
      className='max-w-[1400px] min-h-[100svh] mx-auto relative'
    >
      {/* SideBar */}
      <div
        className='w-[65px] h-full absolute bg-navebarBgColor shadow-[5px_0_10px_rgba(0,0,0,0.3)] flex justify-center pt-[20%]'
      >
        <div
          className='text-topBarTextColor text-3xl'
        >
            <div
              onClick={()=>setPosition(1)}
              className={`mb-4 active:scale-90 duration-150 ease-linear rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer ${position == 1? " shadow-md text-mainIconColor shadow-slate-400":""}`}
            >
              <MdDashboard/>
            </div>
            <div
              onClick={()=>setPosition(2)}
              className={`mb-4 active:scale-90 duration-150 ease-linear rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer ${position == 2? " shadow-md text-mainIconColor shadow-slate-400":""}`}
            >
              <IoStorefront className='' />
            </div>
            <div
              onClick={()=>setPosition(3)}
              className={`mb-4 active:scale-90 duration-150 ease-linear rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer ${position == 3? " shadow-md text-mainIconColor shadow-slate-400":""}`}
            >
              <BiSolidMessageSquareDetail className='' />
            </div>
            <div
              onClick={()=>setPosition(4)}
              className={`mb-4 active:scale-90 duration-150 ease-linear rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer ${position == 4? " shadow-md text-mainIconColor shadow-slate-400":""}`}
            >
              <FaUsers className='' />
            </div>
            <div
              onClick={()=>setPosition(5)}
              className={`mb-4 active:scale-90 duration-150 ease-linear rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer ${position == 5? " shadow-md text-mainIconColor shadow-slate-400":""}`}
            >
              <IoSettings className='' />
            </div>
            <div
              onClick={()=>logOut()}
              className={`mb-4 active:scale-90 duration-150 ease-linear rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer text-red-600`}
            >
              <IoLogOut className='' />
            </div>
        </div>
      </div>

      {/* Body of the main contents */}
      <div
        className='w-full h-full pl-[65px]'
      >
        <Suspense fallback={<Loader/>}>
          {
            position === 1? <DeshbordComponent /> :
            position === 2? <ShopComponent /> :
            position === 3? <MessageComponent /> :
            position === 4? <UsersComponent /> :
            position === 5? <SetingsComponent /> :
            <></>
          }
        </Suspense>
      </div>

    </div>
  )
}

export default Deshbord