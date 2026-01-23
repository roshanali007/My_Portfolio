import { useState } from 'react'
import './App.css'
import HomePage from './Components/HomePage'
import DoorDash from './pages/DoorDash'
import Mailchimp from './pages/Mailchimp'
import Mechkeys from './pages/Mechkeys'
import Flipkart from './pages/Flipkart'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/doordash" element={<DoorDash/>} />
      <Route path="/mailchimp" element={<Mailchimp/>} />
      <Route path="/mechkey" element={<Mechkeys/>} />
      <Route path="/flipkart" element={<Flipkart/>} />
    </Routes>
  )
}

export default App
