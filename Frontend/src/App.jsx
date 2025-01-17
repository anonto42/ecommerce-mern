import React from 'react'
import { BrowserRouter, Route, Router, Routes} from "react-router-dom"
import Home from './pages/Home/Home'
import Naveber from './components/Naveber/Naveber'

const App = () => {
  return (
    <BrowserRouter>
    <Naveber />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App