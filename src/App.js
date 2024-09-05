

import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom'; // Ensure NavLink is imported properly
import './App.css';
import Home from './home';
import Footer from './components/footer/footer';

import Navbarmenu from './components/menu/Navbarmenu';

function App() {
  return (
    <div>
      <Navbarmenu />
      <Routes>
        <Route path="/" element={<Home />} />
      
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;


