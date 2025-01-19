import React, { useState } from 'react'

const Auth = () => {
  const [auth,setAuth] = useState(true);
  const [forgot,setForgot] = useState(true);
  return (
      <div className="flex items-center justify-center min-h-[70svh]">
      <div className="bg-[white] shadow-lg rounded-lg p-8 max-w-xs md:max-w-md w-full">
          {
            forgot ? (
            <div id="forgot-password-form">
              <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">Forgot Password</h2>
              <form>
                  <input type="email" placeholder="Email" className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-inputOnAuthRing"   required />
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
                  <input type="email" placeholder="Email" className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-inputOnAuthRing"   required />
                  <input type="password" placeholder="Password" className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-inputOnAuthRing" required />
                  <button type="submit" className="w-full bg-btn text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-[#1f861b] transition duration-200">Log In</  button>
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
                  <input type="text" placeholder="Name" className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-inputOnAuthRing"   required />
                  <input type="email" placeholder="Email" className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-inputOnAuthRing"   required />
                  <input type="password" placeholder="Password" className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-inputOnAuthRing" required />
                  <input type="password" placeholder="Confirm Password" className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-inputOnAuthRing" required />
                  <button type="submit" className="w-full bg-btn text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-[#1f861b]  transition duration-200">Sign Up</ button>
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