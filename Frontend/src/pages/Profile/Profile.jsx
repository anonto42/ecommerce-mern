import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {  
  
  const { userData } = useSelector( event => event.applicationData)
  const [load,setLoad]= useState(false);
  
  const [name , setName] = useState("name...");
  const [email , setEmail] = useState("email...");
  const [phone , setPhone] = useState("phone...");
  const [city , setCity] = useState("city...");
  const [thana , setThana] = useState("thana...");
  const [Area , setArea] = useState("area...");
  const [road , setRoad] = useState("road...");

  useEffect(()=>{
    if(userData != null){
      setEmail(userData.email)
      setName(userData.name)
      setPhone(userData.phone)
    }
  },[userData])


  const updatedUserInformation = (e) => {
    e.preventDefault()
    try {
      
    } catch (error) {
      console.log(error)
      toas
    }
  }

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
          <form>
            <div
              className='flex items-center'
            >
              <h1>{"Name :"}</h1>
              <input 
                type="text" 
                name="" 
                value={name} 
                onChange={ e => setName( e.target.value )}
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
                value={email} 
                onChange={ e => setEmail( e.target.value )}
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
                value={phone} 
                onChange={ e => setPhone( e.target.value )}
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
                    onChange={ e=> setCity( e.target.value )}
                    value={city} 
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
                    value={thana}
                    onChange={ e => setThana( e.target.value )} 
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
                    value={Area} 
                    onChange={ e => setArea( e.target.value )} 
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
                    value={road}
                    onChange={ e => setRoad( e.target.value )}
                    className='ml-2 border min-w-[210px] sm:w-[350px] bg-transparent px-1 sm:px-2 rounded-md border-topBarTextColor h-[40px]'
                  />
                </div>
              </div>
            </div>
            <button
              onClick={updatedUserInformation}
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
              className='w-[60px] h-[80px] rounded-lg overflow-hidden md:mx-0 mx-auto'
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