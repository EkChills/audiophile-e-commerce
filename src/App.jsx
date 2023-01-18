import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Earphones from './pages/Earphones'
import Headphones from './pages/Headphones'
import Home from './pages/Home'
import SingleEarphone from './pages/SingleEarphone'
import SingleHeadPhone from './pages/SingleHeadPhone'
import SingleSpeaker from './pages/SingleSpeaker'
import Speakers from './pages/Speakers'
const App = () => {
  return (
  
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/earphones' element={<Earphones />} />
          <Route path='/earphones/:slug' element={<SingleEarphone />} />
          <Route path='/headphones' element={<Headphones />} />
          <Route path='/headphones/:slug' element={<SingleHeadPhone />} />
          <Route path='/speakers' element={<Speakers />} />
          <Route path='/speakers/:slug' element={<SingleSpeaker />} />
        </Routes>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App