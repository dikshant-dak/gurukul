import React from 'react';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
