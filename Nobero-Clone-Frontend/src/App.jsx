import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import Header from './homepage/Header'
import Footer from './homepage/Footer'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactUs from './components/ContactUs'
import Review from './components/Review'
import StoresNearMe from './homepage/StoresNearMe'
import PrintedTShirts from './components/PrintedTShirts'
import Hoodies from './components/Hoodies'
import Cart from './components/Cart'
import Joggers from './components/Joggers'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/review' element={<Review />} />
      <Route path='/contact-us' element={<ContactUs />} />
      <Route path='/store-locator' element={<StoresNearMe />} />
      <Route path='/printed-t-shirts' element={<PrintedTShirts />} />
      <Route path='/hoodies' element={<Hoodies />} />
      <Route path='/joggers' element={<Joggers />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />

      <Route path='*' element={<Home />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
