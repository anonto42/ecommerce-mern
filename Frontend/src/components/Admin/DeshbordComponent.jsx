import React from 'react';
import { FaCalendarCheck, FaEye } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { GiNotebook } from "react-icons/gi";
import { useSelector } from 'react-redux';

const DeshbordComponent = () => {
  const data = useSelector( e => e.applicationData.adminData )
  return (
    <div
      className='w-full h-full p-6'
    >
      <h1
        className='text-2xl font-semibold text-topBarTextColor'
      >
        Dashboard
      </h1>
      <small
        className='text-[#a0a0a0] text-lg font-light'
      >Analytics</small>
    

      {/* Main box of analytics */}
      <div
        className='w-full mt-4 grid grid-cols-1 md:grid-cols-3 xl:px-10'
      >
        
        <div
          className='w-[240px] md:w-[215px] lg:w-[290px] h-[130px] bg-navebarBgColor rounded-xl text-topBarTextColor mx-auto flex justify-center items-center mb-4 md:mb-0'
        >
          <div
            className='w-[85%] h-[70%] flex justify-between items-center'
          >
            <div
              className='w-[90px] h-[90px] bg-blue-200 rounded-xl flex justify-center items-center text-4xl text-blue-700'
            >
              <FaCalendarCheck />
            </div>
            <div
              className='w-[100px] h-full p-2 items-center grid'
            >
              <div>
                <h1
                  className='text-2xl font-semibold'
                >{data?.orders?.length}</h1>
                <h3
                  className='text-sm'
                >Order's</h3>
              </div>
            </div>
          </div>
        </div>

        <div
          className='w-[240px] md:w-[215px] lg:w-[290px] h-[130px] bg-navebarBgColor rounded-xl text-topBarTextColor mx-auto flex justify-center items-center mb-4 md:mb-0'
        >
          <div
            className='w-[85%] h-[70%] flex justify-between items-center'
          >
            <div
              className='w-[90px] h-[90px] bg-orange-200 rounded-xl flex justify-center items-center text-4xl text-orange-500'
            >
              <FaEye />
            </div>
            <div
              className='w-[110px] h-full p-2 items-center grid justify-end'
            >
              <div>
                <h1
                  className='text-2xl font-semibold'
                >{data?.totalVisitors?.length}</h1>
                <h3
                  className='text-sm'
                >Total visitor's</h3>
              </div>
            </div>
          </div>
        </div>

        <div
          className='w-[240px] md:w-[215px] lg:w-[290px] h-[130px] bg-navebarBgColor rounded-xl text-topBarTextColor mx-auto flex justify-center items-center'
        >
          <div
            className='w-[85%] h-[70%] flex justify-between items-center'
          >
            <div
              className='w-[90px] h-[90px] bg-green-200 rounded-xl flex justify-center items-center text-4xl text-green-700'
            >
              <FaBangladeshiTakaSign />
            </div>
            <div
              className='w-[100px] h-full p-2 items-center grid'
            >
              <div>
                <h1
                  className='text-2xl font-semibold'
                >{data?.orders?.reduce((total, item) => total + item.productPrice, 0)}</h1>
                <h3
                  className='text-sm'
                >Total Sale's</h3>
              </div>
            </div>
          </div>
        </div>

      </div>


      {/* Order's sheat */}
      <div
        className='w-full h-[400px] bg-navebarBgColor mt-8 overflow-x-auto overscroll-y-auto rounded-xl'
      >

        
        <div
          className='w-[800px] h-full mx-auto'
        >
          {/*Title */}
          <div
            className='w-full h-[90px] border-b-2 border-[#80808073] text-topBarTextColor flex justify-start  pl-4 xl:pl-0'
          >
            <h1
              className='flex text-3xl items-center'
            >
              <GiNotebook className='mr-2'/>
              Order's
            </h1>
          </div>

          {/* Section's */}
          <div
            className='w-full h-[50px] border-b border-[#80808073] text-topBarTextColor flex justify-between items-center pl-4 xl:pl-0'
          >
            <div
              className='w-[332px] h-full flex items-center'
            >
              Name
            </div>
            <div
              className='w-[266px] h-full flex items-center justify-center'
            >
              Order Date
            </div>
            <div
              className='w-[200px] h-full flex items-center justify-start'
            >
              Status
            </div>
          </div>

          {/* Order's */}
          {
          data?.orders.length > 0 ? data?.orders?.map((item,index)=>{
            return(
              <div
                key={index}
                className='w-full h-[50px] border-b border-[#80808018] text-topBarTextColor flex justify-between items-center pl-4 xl:pl-0'
              >
                <div
                  className='w-[332px] h-full flex items-center'
                >
                  { item.buyer.name }
                </div>
                <div
                  className='w-[266px] h-full flex items-center justify-center'
                >
                  { item.createdAt}
                </div>
                <div
                  className='w-[200px] h-full flex items-center justify-start'
                >
                  { item.status }
                </div>
              </div>
            )
          }):<></>
        }

        </div>
      </div>

    </div>
  )
}

export default DeshbordComponent