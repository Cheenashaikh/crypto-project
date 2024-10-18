import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './home';
import Footer from './components/footer/footer';
import Navbarmenu from './components/menu/Navbarmenu';
import Servics from './home/servics';
import Form from './pages/form';


function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;


