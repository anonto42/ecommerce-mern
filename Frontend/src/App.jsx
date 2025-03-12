import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScreenBeforeMounted from './components/ScreenBeforeMounted/ScreenBeforeMounted';
import { ToastContainer } from 'react-toastify';
import Deshbord from './pages/Admin/Deshbord';
import Promis from "../src/utils/Promis";
const Contact = React.lazy(()=>import('./pages/Contact/Contact'));
const Profile = React.lazy(()=>import('./pages/Profile/Profile'));
const ProductPage = React.lazy(()=>import('./pages/Product/ProductPage'));
const Products = React.lazy(()=>import('./pages/products/Products'));
const Nopage = React.lazy(()=>import('./pages/Nopage/Nopage'));
const CartPage = React.lazy(()=>import('./pages/Cart/CartPage'));
const NavigationBar =  React.lazy( ()=>import('./components/Naveber/NavigationBar') );
const Footer =  React.lazy( ()=>import('./components/Footer/Footer') );
const Home =  React.lazy( ()=>import('./pages/Home/Home') );
const Auth =  React.lazy( ()=>import('./pages/Auth/Auth') );
import {ProtectedRoute} from './pages/Admin/ProtectRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Promis />
      <Suspense fallback={<ScreenBeforeMounted />}>
      <NavigationBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/admin/dashboard' element={
            <ProtectedRoute>
              <Deshbord />
            </ProtectedRoute>} />
          <Route path='/auth' element={<Auth/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='*' element={<Nopage />} />
        </Routes>
      <Footer />
      <ToastContainer />
      </Suspense>
    </BrowserRouter>
  )
}

export default App