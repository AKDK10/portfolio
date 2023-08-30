import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Busboard from './pages/BusBoard'
import Home from './pages/Home'


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/busboard" element={<Busboard />} />
      
      </Routes>
    </Router>
  )
}


