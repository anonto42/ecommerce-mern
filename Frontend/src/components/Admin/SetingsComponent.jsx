import React from 'react'

const SetingsComponent = () => {
  return (
    <div
      className='w-full h-full text-topBarTextColor'
    >
      <h1
        className='text-2xl p-4 font-semibold'
      >Upload Product...</h1>
      <div 
        className='w-full h-full'
      >
        <form action="">
          <div
            className='max-w-[800px] min-h-[40svh] mx-auto text-textDarkColor'
          >
            <div
              className='flex'
            >
              <img 
                src="" 
                alt=""
                className='w-[100px] mr-4 h-[150px]'
              />
            </div>
            <input
              multiple
              type='file'
              className='w-full h-full mt-4'
            />
            <div>
              <input 
                type="text" 
                name="" id="" 
                placeholder='Inter the title of the product'
                className='w-[250px] xl:w-[350px] h-[40px] rounded-md outline-none px-2 mt-2'
              />
            </div>
            <div>
              <input 
                type="text" 
                name="" id="" 
                placeholder='Inter the price'
                className='w-[250px] xl:w-[350px] h-[40px] rounded-md outline-none px-2 mt-2'
              />
            </div>
            <div>
              <input 
                type="text" 
                name="" id="" 
                placeholder='Catagory of the product'
                className='w-[250px] xl:w-[350px] h-[40px] rounded-md outline-none px-2 mt-2'
              />
            </div>
            <div>
              <input 
                type="text" 
                name="" id="" 
                placeholder='Quantity of the product'
                className='w-[250px] xl:w-[350px] h-[40px] rounded-md outline-none px-2 mt-2'
              />
            </div>
            <div>
              <textarea 
                type="text" 
                name="" id="" 
                rows={4}
                placeholder='Description'
                className='w-[250px] xl:w-[350px] h-[40px] rounded-md outline-none px-2 mt-2'
              />
            </div>
            <button
              className='w-[120px] h-[50px] font-semibold text-lg rounded-lg hover:bg-blue-600 active:scale-105 text-topBarTextColor bg-blue-500'
            >Public</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SetingsComponent