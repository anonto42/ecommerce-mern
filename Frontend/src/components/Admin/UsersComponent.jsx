import React from 'react'

const UsersComponent = () => {
  return (
    <div
      className='w-full h-full px-4'
    >
      <h1
        className='text-2xl underline py-4 text-topBarTextColor font-semibold'
      >Total user's:</h1>

      <div
        className='w-full overflow-auto h-[40vh] border border-topBarTextColor rounded-lg'
      >
          {/* Lavel for the box */}
        <div
          className='w-[1300px] h-[40px] border-b border-topBarTextColor text-topBarTextColor items-center flex px-4 justify-between'
        >
          <h1
            className='italic w-[325px] font-mono'
          >Name.</h1>
          <h1
            className='italic w-[325px] font-mono flex justify-start'
          >Email.</h1>
          <h1
            className='italic w-[325px] font-mono flex justify-start'
          >Phone.</h1>
          <h1
            className='italic w-[300px] font-mono flex justify-start'
          >Total order's.</h1>
        </div>

          {/* Main user accounts */}
        <div
          className='w-[1300px] h-[40px] border-b border-[#80808079] text-topBarTextColor items-center flex px-4 justify-between'
        >
          <h1
            className='italic w-[325px] font-mono'
          >Sohidul islam Anonto</h1>
          <h1
            className='italic w-[325px] font-mono flex justify-start'
          >anontom90@gmail.com</h1>
          <h1
            className='italic w-[325px] font-mono flex justify-start'
          >0199901010</h1>
          <h1
            className='italic w-[300px] font-mono flex justify-start'
          >6</h1>
        </div>
        <div
          className='w-[1300px] h-[40px] border-b border-[#80808079] text-topBarTextColor items-center flex px-4 justify-between'
        >
          <h1
            className='italic w-[325px] font-mono'
          >Sohidul islam Anonto</h1>
          <h1
            className='italic w-[325px] font-mono flex justify-start'
          >anontom90@gmail.com</h1>
          <h1
            className='italic w-[325px] font-mono flex justify-start'
          >0199901010</h1>
          <h1
            className='italic w-[300px] font-mono flex justify-start'
          >6</h1>
        </div>
        <div
          className='w-[1300px] h-[40px] border-b border-[#80808079] text-topBarTextColor items-center flex px-4 justify-between'
        >
          <h1
            className='italic w-[325px] font-mono'
          >Sohidul islam Anonto</h1>
          <h1
            className='italic w-[325px] font-mono flex justify-start'
          >anontom90@gmail.com</h1>
          <h1
            className='italic w-[325px] font-mono flex justify-start'
          >0199901010</h1>
          <h1
            className='italic w-[300px] font-mono flex justify-start'
          >6</h1>
        </div>
        <div
          className='w-[1300px] h-[40px] border-b border-[#80808079] text-topBarTextColor items-center flex px-4 justify-between'
        >
          <h1
            className='italic w-[325px] font-mono'
          >Sohidul islam Anonto</h1>
          <h1
            className='italic w-[325px] font-mono flex justify-start'
          >anontom90@gmail.com</h1>
          <h1
            className='italic w-[325px] font-mono flex justify-start'
          >0199901010</h1>
          <h1
            className='italic w-[300px] font-mono flex justify-start'
          >6</h1>
        </div>

      </div>


      <h1
        className='text-2xl underline py-4 text-topBarTextColor font-semibold'
      >Get user:</h1>

      <div
        className='w-full h-[80px]'
      >
        <form action="">
          <div
            className='md:w-[350px] w-[250px] h-[50px] mt-4 rounded-lg overflow-hidden font-serif'
          >
            <input 
              type="text" 
              className='h-full outline-none px-4 text-lg w-[80%] text-textDarkColor'
              placeholder='Search user by email'
              />
            <button
              className='w-[20%] h-[53px] bg-blue-400 text-white hover:bg-blue-500'
            >Search</button>
          </div>
        </form>
      </div>

      {/* Serch user info */}
      
        <div
          className='w-full h-[340px] text-topBarTextColor'
        >
          {/* Dufalt value */}
          <h1
            className='text-2xl underline py-4 font-semibold'
          >User info:</h1>

          <h3>Name: <small>{"This is the name of the"}</small></h3>
          <h3>Email: <small>{"This is the name of the"}</small></h3>
          <h3>Number: <small>{"This is the name of the"}</small></h3>
          <h3>Address: <small>{"This is the name of the"}</small></h3>
          <div>
            <button
              className='w-[110px] h-[40px] hover:bg-red-800 cursor-pointer active:scale-95 bg-red-700 mt-4 rounded-md text-lg font-semibold font-serif'
            >Block</button>
            <button
            className='w-[110px] h-[40px] hover:bg-pink-800 cursor-pointer active:scale-95 bg-pink-700 mt-4 rounded-md text-lg font-semibold font-serif ml-2'
          >Delete</button>
          </div>

        </div>

    </div>
  )
}

export default UsersComponent