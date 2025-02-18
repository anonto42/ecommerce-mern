import React, { useState } from 'react';
import axios from "axios";
import { Hourglass } from 'react-loader-spinner';
import { toast } from 'react-toastify';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [auth,setAuth] = useState(true);
  const [forgot,setForgot] = useState(false);
  const [load,setLoading] = useState(false);
  const server = import.meta.env.VITE_REACT_SERVER_API

  
  // Login funcion
  const login = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();

      if( email && password === "" ) return setLoading(false) , toast.warning("Email and password must not be empty!")
      
      const data =  await axios.post(`${server}/user/login`, {email,password} , {withCredentials:true} );
      setEmail("");
      setPassword("");
      setLoading(false);

      toast.success(data.data.message);
      setTimeout(() => {
        window.location.href = "/";
      }, 4000);
      console.log("success")
    } catch (error) {
      console.log(error)
      setLoading(false)
      toast.error("Couldn't login")
    }
  }

  // Register funcion
  const registre = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();


      if( email && password === "" ) return setLoading(false) , toast.warning("All fields ar required!")

      if( password != confirmPassword ) return setLoading(false) , toast.error("Please check the confirm password");

      const data = {
        name,
        email,
        password
      }

      const respons = await axios.post(`${server}/user/register`, data , {withCredentials:true} );

      setName("")
      setEmail("");
      setPassword("");
      setConfirmPassword("")
      setLoading(false);

      toast.success(respons.data.message);
      setTimeout(() => {
        window.location.href = "/";
      }, 4000);

    } catch (error) {
      console.log(error)
      setLoading(false)
      toast.error("Couldn't sign up")
    }
  }



  return (
      <div className="flex items-center justify-center min-h-[70svh] relative">
        {
          load?(
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
      <div className="bg-[white] shadow-lg rounded-lg p-8 max-w-xs md:max-w-md w-full">
          {
            forgot ? (
            <div id="forgot-password-form">
              <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">Forgot Password</h2>
              <form>
                  <input 
                    type="email" placeholder="Email" 
                    className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-inputOnAuthRing"   
                    required
                    value={email}
                    onChange={ e => setEmail(e.target.value )}
                  />
                  <button type="submit" className="w-full bg-btn text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-[#1f861b]  transition duration-200">Reset   Password</button>
                  <p className="text-center text-gray-600 mt-6">
                      Remember your password? 
                    <a href="#" className="text-blue-600 hover:underline" 
                    onClick={()=>{
                      setAuth(true);
                      setForgot(false);
                    }}
                    >Log In</a>
                  </p>
              </form>
            </div>
            ):(auth === true ?(
              <div id="login-form" className={forgot?"hidden":""}>
                <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">Log In</h2>
                <form>
                  <input 
                    type="email" placeholder="Email" 
                    className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-inputOnAuthRing"   
                    required
                    value={email}
                    onChange={ e => setEmail(e.target.value )} 
                  />
                  <input 
                    type="password" placeholder="Password" 
                    className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-inputOnAuthRing" 
                    required
                    value={password}
                    onChange={ e => setPassword(e.target.value )} 
                  />
                  <button
                    type='submit'
                    onClick={login}
                    className="w-full bg-btn text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-[#1f861b] transition duration-200">Log In</button>
                  <p className="text-center text-gray-500 mt-6">
                      <a href="#" className="text-blue-600 hover:underline" onClick={()=>setForgot(true)}>Forgot Password?</a>
                  </p>
                  <p className="text-center text-gray-600 mt-6">
                      Don’t have an account? {" "}
                      <a href="#" className="text-blue-600 hover:underline" onClick={()=>setAuth(!auth)}>Sign Up</a>
                  </p>
                </form>
              </div>
            ):(
              <div id="signup-form" className={forgot?"hidden":""} >
                <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
                <form>
                  <input 
                    type="text" placeholder="Name" 
                    className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-inputOnAuthRing"   
                    required
                    value={name}
                    onChange={ e => setName(e.target.value )} 
                  />
                  <input 
                    type="email" placeholder="Email" 
                    className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-inputOnAuthRing"   
                    required
                    value={email}
                    onChange={ e => setEmail(e.target.value )}
                   />
                  <input 
                    type="password" placeholder="Password" 
                    className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-inputOnAuthRing" 
                    required
                    value={password}
                    onChange={ e => setPassword(e.target.value )} 
                  />
                  <input 
                    type="password" placeholder="Confirm Password" 
                    className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-inputOnAuthRing" 
                    required
                    value={confirmPassword}
                    onChange={ e => setConfirmPassword(e.target.value )}
                    />
                  <button 
                    onClick={registre}
                    className="w-full bg-btn text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-[#1f861b]  transition duration-200">Sign Up</ button>
                  <p className="text-center text-gray-600 mt-6">
                      Already have an account? 
                      <a href="#" className="text-blue-600 hover:underline" onClick={()=>setAuth(!auth)}>Log In</a>
                  </p>
                </form>
              </div>
            ))
          }
    
          
      </div>
  </div>
)
}

export default Auth