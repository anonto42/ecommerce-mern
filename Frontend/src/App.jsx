import React from 'react'
import { BrowserRouter, Route, Router, Routes} from "react-router-dom"
import Home from './pages/Home/Home'
import NavigationBar from './components/Naveber/NavigationBar'

const App = () => {
  return (
    <BrowserRouter>
    <NavigationBar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App