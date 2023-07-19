import React from 'react';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import DashBoard from './pages/DashBoard';
import Completed from './pages/Completed';


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/dashboard' element={<DashBoard />} />
            <Route path='/completed' element={<Completed />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
