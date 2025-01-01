import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Service from './routes/Service';
import Portfolio from './routes/Portfolio';
import Support from './routes/Support';
import Contact from './routes/Contact';
import Login from './routes/Login';

import ScrollToTop from './component/ScrollToTop'; // Correct import after folder name change

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop /> {/* Scroll to top on route change */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/services" element={<Service />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/support" element={<Support />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
