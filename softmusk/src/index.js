import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Service from './routes/Service'
import Portfolio from './routes/Portfolio'
import Support from './routes/Support'
import Contact from './routes/Contact'
import Login from './login logout/login.php'



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/services' element={<Service />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/support' element={<Support />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />


    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

