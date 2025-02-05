import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ScreenBeforeMounted from './components/ScreenBeforeMounted/ScreenBeforeMounted'
import { ToastContainer } from 'react-toastify';
import Deshbord from './pages/Admin/Deshbord';
const Contact = React.lazy(()=>import('./pages/Contact/Contact'))
const Profile = React.lazy(()=>import('./pages/Profile/Profile'))
const ProductPage = React.lazy(()=>import('./pages/Product/ProductPage'))
const Products = React.lazy(()=>import('./pages/products/Products'))
const Nopage = React.lazy(()=>import('./pages/Nopage/Nopage'))
const CartPage = React.lazy(()=>import('./pages/Cart/CartPage'))
const NavigationBar =  React.lazy( ()=>import('./components/Naveber/NavigationBar') )
const Footer =  React.lazy( ()=>import('./components/Footer/Footer') )
const Home =  React.lazy( ()=>import('./pages/Home/Home') )
const Auth =  React.lazy( ()=>import('./pages/Auth/Auth') )

const App = () => {
  const apiUrl = import.meta.env.VITE_REACT_APP_TESTIN
  console.log("env : " + apiUrl)
  return (
    <BrowserRouter>
      <Suspense fallback={<ScreenBeforeMounted />}>
      <NavigationBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/auth' element={<Auth/>} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/admin/dashboard' element={<Deshbord />} />
          <Route path='*' element={<Nopage />} />
        </Routes>
      <Footer />
      <ToastContainer />
      </Suspense>
    </BrowserRouter>
  )
}

export default App