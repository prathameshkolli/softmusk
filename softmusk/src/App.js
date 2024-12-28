import React from 'react';
import './App.css';


import Achievement from './component/Achievement';
import Mission from './component/Mission';
import Navbar from './component/Navbar';
import Home from './component/Home'
import Footer from './component/Footer'
import ClientSays from './component/ClientSays';






function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Mission/>
    <ClientSays/>
    <Achievement/>
    <Footer/>
    </>
  );
}

export default App;
