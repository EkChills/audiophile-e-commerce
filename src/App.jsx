import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Earphones from './pages/Earphones'
import Headphones from './pages/Headphones'
import Home from './pages/Home'
import SingleEarphone from './pages/SingleEarphone'
import SingleHeadPhone from './pages/SingleHeadPhone'
import Speakers from './pages/Speakers'
import SingleSpeaker from './pages/SingleSpeaker'
import Checkout from './pages/Checkout'
import ProtectedRoute from './pages/ProtectedRoute'
const App = () => {
  return (

    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/earphones' element={<Earphones />} />
        <Route path='/earphones/:slug' element={<SingleEarphone />} />
        <Route path='/headphones' element={<Headphones />} />
        <Route path='/headphones/:slug' element={<SingleHeadPhone />} />
        <Route path='/speakers' element={<Speakers />} />
        <Route path='/speakers/:slug' element={<SingleSpeaker />} />
        <Route path='/checkout' element={<ProtectedRoute>
          <Checkout />
        </ProtectedRoute>} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App