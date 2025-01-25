import React from 'react'

const Profile = () => {
  return (
    <div
      className='w-full min-h-svh text-topBarTextColor'
    >
      <div
        className='max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 xl:px-0 pt-8'
      >
        <div
          className='w-full h-[415px] border lg:flex rounded-md p-4 border-topBarTextColor relative'
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
          className='w-full h-[400px] border mt-4 rounded-md'
        >
          <h1
            className='text-2xl underline p-4'
          >Order's : </h1>
          <div
            className='w-full h-[80px] border-b border-t flex items-center px-4 justify-between'
           >
            <img 
              src="" 
              alt="" 
              className='w-[80px] h-[50px] rounded-lg overflow-hidden'
            />
            <h2
              className='min-w-[120px] h-full border-l border-r justify-center flex items-center'
            >Title</h2>
            <h2
              className='min-w-[120px] h-full border-l border-r justify-center flex items-center'
            >Price</h2>
            <h2
              className='w-[120px] text-center h-full border-l border-r justify-center flex items-center'
            >Bkash <br /> Pament</h2>

            <h2
              className='w-[120px] text-center h-full border-l border-r justify-center flex items-center'
            >Number <br /> 01600101074</h2>
            <h2
              className='w-[120px] text-center h-full border-l border-r justify-center flex items-center'
            >2 <br /> Pice's</h2>
          </div>
          <div
            className='w-full h-[80px] border-b border-t flex items-center px-4 justify-between mt-3'
           >
            <img 
              src="" 
              alt="" 
              className='w-[80px] h-[50px] rounded-lg overflow-hidden'
            />
            <h2
              className='min-w-[120px] h-full border-l border-r justify-center flex items-center'
            >Title</h2>
            <h2
              className='min-w-[120px] h-full border-l border-r justify-center flex items-center'
            >Price</h2>
            <h2
              className='w-[120px] text-center h-full border-l border-r justify-center flex items-center'
            >Bkash <br /> Pament</h2>

            <h2
              className='w-[120px] text-center h-full border-l border-r justify-center flex items-center'
            >Number <br /> 01600101074</h2>
            <h2
              className='w-[120px] text-center h-full border-l border-r justify-center flex items-center'
            >2 <br /> Pice's</h2>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile