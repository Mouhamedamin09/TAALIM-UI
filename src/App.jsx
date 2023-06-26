import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import Layout from './components/Layout'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Features from './pages/Features'
import Login from './pages/Login'
import Register from './pages/Register'



function App() {
  

  return (
    <>
  
      
      <BrowserRouter>

      <Routes>
         <Route path="/" element={<Layout />} >
          <Route index element ={<Home />} />
          <Route path='pricing' element ={<Pricing />} />
          <Route path='about' element ={<About />} />
          <Route path='features' element ={<Features />} />
          <Route path='login' element ={<Login />} />
          <Route path='register' element ={<Register />} />

        </Route>
          
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
