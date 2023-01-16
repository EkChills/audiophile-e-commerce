import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Earphones from './pages/Earphones'
import Headphones from './pages/Headphones'
import Home from './pages/Home'
import Speakers from './pages/Speakers'
const App = () => {
  return (
  
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/earphones' element={<Earphones />} />
          <Route path='/headphones' element={<Headphones />} />
          <Route path='/speakers' element={<Speakers />} />
        </Routes>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App