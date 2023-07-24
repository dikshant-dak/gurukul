import React from 'react';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
