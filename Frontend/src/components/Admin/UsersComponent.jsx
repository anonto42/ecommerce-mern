import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Hourglass } from 'react-loader-spinner';

const UsersComponent = () => {
    const [loading,setLoading] = useState(false);
    const { totalUsers } = useSelector( data => data.applicationData.adminData);
    const [email, setSearchInput] = useState('');
    const [user,setUser] = useState('')

    const SerchUser = async () => {
      try {
        setLoading(true);
        const finalEmail = email.trim();
        if (finalEmail == '') {
          return toast.warn("Please enter a email address of user!");
        }
    
        const response = await axios.post(`${import.meta.env.VITE_REACT_SERVER_API}/admin/user`, {email:finalEmail}
          , // Send email in request body
          { withCredentials: true,
            headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*' // This is for CORS
            }
           } // Config object
        );
        toast.success("User found successfully!");
        setUser(response.data.data); // Assuming you have a setUser state
      } catch (error) {
        toast.error("User not exist!");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    async function block () {
        try {
          setLoading(true);
          if (user.email == undefined) {
            return toast.warn("Please enter a email address of user!");
          }
      
          const response = await axios.put(`${import.meta.env.VITE_REACT_SERVER_API}/admin/user`, {email,block:true}
            , // Send email in request body
            { withCredentials: true,
              headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' // This is for CORS
              }
            } // Config object
          );
          toast.success("User Blocked!");
          setUser(response.data.data); // Assuming you have a setUser state
        } catch (error) {
          toast.error("Something went wrong!");
          console.log(error);
        } finally {
          setLoading(false);
        }
    }
    async function unBlock () {
        try {
          setLoading(true);
          if (user.email == undefined) {
            return toast.warn("Please enter a email address of user!");
          }
      
          const response = await axios.put(`${import.meta.env.VITE_REACT_SERVER_API}/admin/user`, {email,block:false}
            , // Send email in request body
            { withCredentials: true,
              headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' // This is for CORS
              }
            } // Config object
          );
          toast.success("User Unblocked!");
          setUser(response.data.data); // Assuming you have a setUser state
        } catch (error) {
          toast.error("Something went wrong!");
          console.log(error);
        } finally {
          setLoading(false);
        }
    }

    const deleteUser = async () => {
        try {
          setLoading(true);
          const finalEmail = email.trim();
          if (finalEmail == '') {
            return toast.warn("Please enter a email address of user!");
          }
      
          await axios.post(`${import.meta.env.VITE_REACT_SERVER_API}/admin/duser`, {email:finalEmail},
            { withCredentials: true,
              headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' // This is for CORS
              }
            } // Config object
          );
          toast.success("User Deleted.");
        } catch (error) {
          toast.error("Something went wrong!");
          console.log(error.response.data);
        } finally {
          setLoading(false);
          toast.warn("Please Refresh the page!")
        }
    }

  return (
    <div
      className='w-full h-full px-4'
    >
      <h1
        className='text-2xl underline py-4 text-topBarTextColor font-semibold'
      >Total user's: ({totalUsers.length})</h1>

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
          {
            totalUsers.map((user,index) => (
              <div
                key={index}
                className='w-[1300px] h-[40px] border-b border-[#80808079] text-topBarTextColor items-center flex px-4 justify-between'
              >
                <h1
                  className='italic w-[325px] font-mono'
                >{user.name}</h1>
                <h1
                  className='italic w-[325px] font-mono flex justify-start'
                >{user.email}</h1>
                <h1
                  className='italic w-[325px] font-mono flex justify-start'
                >{user.number}</h1>
                <h1
                  className='italic w-[300px] font-mono flex justify-start'
                >{user.orders.length}</h1>
              </div>
            ))
          }

      </div>


      <h1
        className='text-2xl underline py-4 text-topBarTextColor font-semibold'
      >Get user:</h1>

      <div
        className='w-full h-[80px]'
      >
        <div
            className='md:w-[350px] w-[250px] h-[50px] mt-4 rounded-lg overflow-hidden font-serif'
          >
            <input 
              value={email}
              onChange={ e => setSearchInput( e.target.value ) }
              type="text" 
              className='h-full outline-none px-4 text-lg w-[80%] text-textDarkColor'
              placeholder='Search user by email'
              />
            <button
              onClick={() => SerchUser()}
              className='w-[20%] h-[53px] bg-blue-400 text-white hover:bg-blue-500'
            >Search</button>
        </div>
      </div>

      {/* Serch user info */}
      
        <div
          className='w-full min-h-[240px] pb-4 text-topBarTextColor relative'
        >
          {
          loading?(
            <div className='absolute h-full w-full flex justify-center items-center'>
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
          {/* Dufalt value */}
          <h1
            className='text-2xl underline py-4 font-semibold'
          >User info:</h1>

          <div>
            <h3>Name: <small>{user.name}</small></h3>
            <h3>Email: <small>{user.email}</small></h3>
            <h3>Number: <small>{user.number}</small></h3>
            <div
              className='flex'
            >Address:(
              <p className='text-sm font-mono'>{user.city}</p>) ; ( 
              <p className='text-sm font-mono'>{user.thana}</p> ) ; (
              <p className='text-sm font-mono'>{user.location}</p> )
            </div>
            <h3>Status: <small>{
                user.isBlocked === '' ?
                "....."
                :
                user.isBlocked != true ? "Unblock":"Block"
                }</small></h3>
            <div
              className=''
            >
              <button
                onClick={()=>{
                  user.isBlocked == true ? unBlock():block()
                }}
                className='w-[110px] h-[40px] hover:bg-red-800 cursor-pointer active:scale-95 bg-red-700 mt-4 rounded-md text-lg font-semibold font-serif'
              >
                {
                  user.isBlocked == true ? "Unblock":"Block"
                }
              </button>
              <button
              onClick={()=>deleteUser()}
              className='w-[110px] h-[40px] hover:bg-pink-800 cursor-pointer active:scale-95 bg-pink-700 mt-4 rounded-md text-lg font-semibold font-serif ml-2'
            >Delete</button>
          </div>
          </div>

        </div>

    </div>
  )
}

export default UsersComponent