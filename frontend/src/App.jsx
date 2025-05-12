import React from 'react'
import "./App.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createContext } from 'react';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NavbarfoREG from './components/NavbarfoREG/Navbar'
import Category from './components/Category/Category';



export const userContext = createContext();
const App = () => {
  const [token, setToken] = useState(null)




  return (
    <>
      <userContext.Provider value={{ token, setToken }}>
          <NavbarfoREG/>
        <Routes>
          <Route path="/Rgister" element= {<Register />} />
          <Route path="/Login" element= {<Login />} />
          <Route path="/category" element = {<Category />} />
        </Routes>
      </userContext.Provider>
    </>
  )
}

export default App
