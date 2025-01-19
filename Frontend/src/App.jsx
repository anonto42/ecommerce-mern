import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home/Home'
import NavigationBar from './components/Naveber/NavigationBar'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <NavigationBar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App