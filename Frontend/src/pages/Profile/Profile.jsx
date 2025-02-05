import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Hourglass } from 'react-loader-spinner';
import { CiLogin } from "react-icons/ci";

const Profile = () => {  
  
  const { userData } = useSelector( event => event.applicationData)

  
  function myFunction(){
    if (userData === undefined) return toast.info("Please login!")
    else return
  }
  setTimeout(myFunction, 8000);
  
  const [name , setName] = useState("name...");
  const [email , setEmail] = useState("email...");
  const [phone , setPhone] = useState("phone...");
  const [city , setCity] = useState("city...");
  const [thana , setThana] = useState("thana...");
  const [Area , setArea] = useState("area...");
  const [road , setRoad] = useState("road...");
  const [loading,setLoad]= useState(false);
  
  useEffect(()=>{
    if(userData != null){
      setEmail(userData.email)
      setPhone(userData.number)
      setThana(userData.thana)
      setName(userData.name)
      setCity(userData.city)
      setArea(userData.area)
      setRoad(userData.location)
    }
  },[userData])

  const updatedUserInformation = async (e) => {
    try {
      e.preventDefault()
      if ( userData === undefined ) return window.location.href = "/auth"
      setLoad(true)
      const updateData = {
        number:phone,
        city,
        thana,
        area: Area,
        location : road
      }

      const {data} = await axios.put(`${import.meta.env.VITE_REACT_SERVER_API}/user/update`, updateData , { withCredentials: true })

      toast.success(data.message)

      setLoad(false)
      
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong! Please try again")
      setLoad(false)
    }
  }

  const logout =  async () => {
    try {
      if ( userData === undefined ) return window.location.href = "/auth"

      const continew = confirm("Are you sure you want to log out?")

      if (!continew) return;

      await axios.delete(`${process.env.REACT_APP_API_URL}/user/logout`,{withCredentials:true});
      toast.success("Logged out successfully");
      setTimeout(() => {
        window.location.href = "/";
      }, 4000);
      
    } catch (error) {
      toast.error("Something went wrong! Please try again");
    }
  }

  return (
    <div
      className='w-full min-h-svh text-topBarTextColor mb-6 relative'
    >
      <CiLogin
        onClick={logout}
        className='absolute text-3xl right-5 top-4 bg-navebarBgColor w-[40px] h-[40px] rounded-xl p-1 z-10 active:scale-110 duration-100 ease-linear cursor-pointer'
      />
      {
        loading?(
          <div className='absolute h-full w-full bg-[#c7c0c033] flex justify-center items-center'>
            <Hourglass
              visible={true}
              height="60"
              width="60"
              ariaLabel="hourglass-loading"
              wrapperClass=""
              colors={['#2db12d', '#72a1ed']}
            />
          </div>
        ):(<></>)
      }
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