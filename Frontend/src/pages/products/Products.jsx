import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BsThreeDots } from "react-icons/bs";
import Pagination from '../../components/Pagination/Pagination';

const Products = () => {
  const { catagorys , products } = useSelector( data => data.applicationData.appData );
  const [catagory , setCatagory] = useState("All");
  const [catogoryBar,setCatogoryBar] =  useState(false);
  return (
    <div
        className='w-full min-h-[91svh]'
    >
      <div
        className='max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 xl:px-0'
      >
        <div
          className='w-full h-[80px] border-b-2 border-topBarTextColor relative lg:hidden'
        >
          <div 
            className='w-full h-full text-xl font-semibold flex justify-between items-center text-topBarTextColor'
          >
            <h2
              onClick={()=>setCatogoryBar(!catogoryBar)}
              className='mr-2'
            >{catagory}'s</h2>
            <div
              onClick={()=>setCatogoryBar(!catogoryBar)}
              className='w-[30px] h-[30px] border-2 rounded-full flex justify-center items-center active:scale-105'
            >
              <BsThreeDots />
            </div>
          </div>
          <div
            className={`w-[200px] ${ catogoryBar?"min-h-[80px]":"max-h-0"} duration-150 ease-in-out overflow-hidden bg-slate-50 absolute right-[9%] z-50`}
          >
            <h2
              onClick={()=>{
              setCatagory("All")
              setCatogoryBar(false)
              }}
              className='flex justify-center items-center h-[40px] border-b text-lg font-medium active:bg-slate-400 duration-150 ease-in-out'>
              {"All"}
            </h2>
            {
              catagorys.map((item,index)=>(
                <h2
                  onClick={()=>{
                    setCatagory(item)
                    setCatogoryBar(false)
                  }}
                  className='flex justify-center items-center h-[40px] border-b text-lg font-medium active:bg-slate-400 duration-150 ease-in-out'
                  key={index}>
                    {item}
                </h2>
              ))
            }
          </div>
        </div>
      </div>
      <div
        className='max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 xl:px-0'
      >
        <Pagination catagory={catagory} catagorys={catagorys} setCatagory={setCatagory} products={products} />
      </div>
    </div>
  )
}

export default Products