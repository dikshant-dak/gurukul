import React from 'react';
import './App.css';

import { BrowserRouter,Route,Routes } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import RegisterForm from './components/Registerform';

const App = () => {
  return (
  
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/register' element={<RegisterForm/>}/>

      

    </Routes>
    </BrowserRouter>

    
  )
}

export default App;
