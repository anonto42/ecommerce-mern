import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ScreenBeforeMounted from './components/ScreenBeforeMounted/ScreenBeforeMounted'
import { ToastContainer } from 'react-toastify';
import Nopage from './pages/Nopage/Nopage';
const NavigationBar =  React.lazy( ()=>import('./components/Naveber/NavigationBar') )
const Footer =  React.lazy( ()=>import('./components/Footer/Footer') )
const Home =  React.lazy( ()=>import('./pages/Home/Home') )
const Auth =  React.lazy( ()=>import('./pages/Auth/Auth') )

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<ScreenBeforeMounted />}>
      <NavigationBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/auth' element={<Auth/>} />
          <Route path='*' element={<Nopage />} />
        </Routes>
      <Footer />
      <ToastContainer />
      </Suspense>
    </BrowserRouter>
  )
}

export default App