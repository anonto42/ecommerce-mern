import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Auth from '../pages/Auth/Auth'
import NavigationBar from '../components/Naveber/NavigationBar'
import Footer from '../components/Footer/Footer'

const LazyConfig = () => {
  return (
    <>
        <NavigationBar />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/auth' element={<Auth/>} />
            </Routes>
        <Footer />
    </>
  )
}

export default LazyConfig