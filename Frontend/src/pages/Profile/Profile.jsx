import React from 'react'

const Profile = () => {
  return (
    <div
      className='w-full min-h-svh text-topBarTextColor mb-6'
    >
      <div
        className='max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 xl:px-0 pt-8'
      >
        <div
          className='w-full md:h-[415px] h-[480px] sm:h-[450px] border lg:flex rounded-md p-4 border-topBarTextColor relative'
        >
          <form action="">
            <div
              className='flex items-center'
            >
              <h1>{"Name :"}</h1>
              <input 
                type="text" 
                name="" 
                value={"Sohidul Islam anonto"} 
                id="" 
                className='ml-2 min-w-[210px] sm:w-[350px] border bg-transparent px-1 sm:px-2 rounded-md border-topBarTextColor h-[40px]'
              />
            </div>
            <div
              className='flex items-center mt-3'
            >
              <h1>{"Email :"}</h1>
              <input 
                type="text" 
                name="" 
                value={"anontom90@gmail.com"} 
                id="" 
                className='ml-2 border min-w-[210px] sm:w-[350px] bg-transparent px-1 sm:px-2 rounded-md border-topBarTextColor h-[40px]'
              />
            </div>
            <div
              className='flex items-center mt-3'
            >
              <h1>{"Phone :"}</h1>
              <input 
                type="text" 
                name="" 
                value={"01600101074"} 
                id="" 
                className='ml-2 border min-w-[210px] sm:w-[350px] bg-transparent px-1 sm:px-2 rounded-md border-topBarTextColor h-[40px]'
              />
            </div>
            <div 
              className='mt-4'
            >
              <h1
                className='underline'
              >Address:</h1>
              <div
                className='pt-2'
              >
                <div
                  className='flex items-center'
                >
                  <h2
                    className='text-sm'
                  >City : </h2>
                  <input 
                    type="text" 
                    name="" 
                    value={"Dhaka"} 
                    className='ml-2 border min-w-[210px] sm:w-[350px] bg-transparent px-1 sm:px-2 rounded-md border-topBarTextColor h-[40px]'
                  />
                </div>
                <div
                  className='flex items-center mt-2'
                >
                  <h2
                    className='text-sm'
                  >Thana : </h2>
                  <input 
                    type="text" 
                    name="" 
                    value={"Siddhirgonj"} 
                    className='ml-2 border min-w-[210px] sm:w-[350px] bg-transparent px-1 sm:px-2 rounded-md border-topBarTextColor h-[40px]'
                  />
                </div>
                <div
                  className='flex items-center mt-2'
                >
                  <h2
                    className='text-sm'
                  >Area : </h2>
                  <input 
                    type="text" 
                    name="" 
                    value={"Dhaka"} 
                    className='ml-2 border min-w-[210px] sm:w-[350px] bg-transparent px-1 sm:px-2 rounded-md border-topBarTextColor h-[40px]'
                  />
                </div>
                <div
                  className='flex items-center mt-2'
                >
                  <h2
                    className='text-sm'
                  >Road : </h2>
                  <input 
                    type="text" 
                    name="" 
                    value={"Mosgid road"} 
                    className='ml-2 border min-w-[210px] sm:w-[350px] bg-transparent px-1 sm:px-2 rounded-md border-topBarTextColor h-[40px]'
                  />
                </div>
              </div>
            </div>
            <button
              className='bottom-[2%] absolute w-[120px] bg-mainIconColor text-textDarkColor h-[40px] text-xl font-semibold right-[5%] rounded-md'
            >Update</button>
          </form>
          <h1
            className='text-3xl justify-center items-center w-[55%] underline italic font-serif h-full hidden lg:flex'
          >User information</h1>
        </div>


        <div
          className='w-full min-h-[400px] border mt-4 rounded-md'
        >
          <h1
            className='text-2xl underline p-4'
          >Order's : </h1>



          <div
            className='w-full min-h-[100px] md:border-b border-t md:flex items-center px-4 justify-between pt-2 md:pt-0'
           >
            <img 
              src="" 
              alt="" 
              className='w-[60px] h-[80px] rounded-lg overflow-hidden mx-auto'
            />
            <h2
              className='md:w-[120px] w-full h-full border mt-2 md:border-0 md:border-l md:border-r justify-center flex items-center'
            >Title</h2>
            <h2
              className='md:w-[120px] w-full h-full border mt-2 md:border-0 md:border-l md:border-r justify-center flex items-center'
            >Price</h2>
            <h2
              className='md:w-[120px] w-full h-full border mt-2 md:border-0 md:border-l md:border-r justify-center flex items-center'
            >Paid</h2>

            <h2
              className='md:w-[120px] w-full h-full border mt-2 md:border-0 md:border-l md:border-r justify-center flex items-center text-center'
            >Number <br /> 01600101074</h2>
            <h2
              className='md:w-[120px] w-full h-full border mt-2 md:border-0 md:border-l md:border-r justify-center flex items-center text-center'
            >2 <br /> Pice's</h2>
          </div>



        </div>

      </div>
    </div>
  )
}

export default Profile