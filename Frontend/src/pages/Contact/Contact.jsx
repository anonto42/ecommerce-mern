import React from 'react'

const Contact = () => {
  return (
    <div
        className='w-full min-h-[70svh] text-topBarTextColor'
    >
        <div
            className='max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 xl:px-0'
        >

            <div
                className='max-w-[500px] h-[150px] mx-auto text-center pt-6 text-[18px]'
            >
                <h1
                    className='md:text-2xl font-serif font-semibold mb-4'
                >Our whatsapp number : 
                    <small
                        className='md:text-lg font-light font-mono'
                    >
                        {" "}+91 9999999999
                    </small>
                </h1>

                <h1
                    className='md:text-2xl font-serif font-semibold mb-4'
                >Our email address : 
                    <small
                        className='md:text-lg font-light font-mono'
                    >
                       {" "} example@example.com
                    </small>
                </h1>

            </div>





            <div
                className='max-w-[800px] mx-auto min-h-[500px] mt-6 md:mt-0'
            >
                <form action="" className=''>
                    <h1
                        className='text-xl md:text-2xl mb-2 font-semibold'
                    >Send Your Messages</h1>
                    <div
                        className='md:flex w-full h-full justify-center items-center'
                    >
                        <div
                            className='mb-4 md:m-0 w-full'
                        >
                            <h5
                                className='text-sm font-semibold'
                            >Name</h5>
                            <input 
                                type="text" 
                                name="" 
                                placeholder='Inter your name'
                                className='md:w-[80%] w-full h-[40px] rounded-md px-2 mt-2 border-2 border-textDarkColor bg-[#8080806b] outline-none'
                                id="" 
                            />
                        </div>
                        <div
                            className='w-full'
                        >
                            <h5
                                className='text-sm font-semibold'
                            >Email</h5>
                            <input 
                                type="text" 
                                name="" 
                                placeholder='Inter your name'
                                className='md:w-[80%] w-full h-[40px] rounded-md text-textDarkColor px-2 mt-2 border-2 border-textDarkColor bg-[#8080806b] outline-none'
                                id="" 
                            />
                        </div>
                    </div>
                    <div
                        className='my-4'
                    >
                        <h5
                            className='text-sm font-semibold'
                        >Subject</h5>
                        <input 
                            type="text" 
                            name="" 
                            placeholder='Inter your name'
                            className='w-full md:w-[80%] h-[40px] rounded-md px-2 mt-2 border-2 border-textDarkColor bg-[#8080806b] outline-none'
                            id="" 
                        />
                    </div>
                    <div
                        className=''
                    >
                        <h5
                            className='text-sm font-semibold'
                        >Message</h5>
                        <textarea 
                            type="text" 
                            name="" 
                            rows='6'
                            placeholder='Inter your name'
                            className='w-full rounded-md px-2 mt-2 border-2 border-textDarkColor bg-[#8080806b] outline-none'
                            id="" 
                        />
                    </div>

                    <div
                        className='w-full h-[50px] sm:h-[60px] md:h-[70px] relative mb-4'
                    >
                        <button
                            className='absolute bottom-2 right-2 rounded-lg md:w-[130px] md:h-[50px] w-[100px] h-[40px] bg-mainIconColor text-textDarkColor font-serif font-semibold text-lg md:text-xl active:scale-105'
                        >Send</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact