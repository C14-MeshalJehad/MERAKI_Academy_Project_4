import React, { useEffect } from 'react'
import "./App.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createContext } from 'react';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NavbarfoREG from './components/NavbarfoREG/Navbar'
import Category from './components/Category/Category';
import PostPage from './components/Posts/Posts';
import Profile from './components/Profile/Profile';
// startPage
// page for both login and register
// footor
// 


export const userContext = createContext();
const App = () => {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(() => {

    useEffect(() => {
      const saveToken = localStorage.getItem("token")
      const saveUser = localStorage.getItem("user")
      if (saveToken) setToken(saveToken);
      if (saveUser) {
        try {
          setUser(JSON.parse(saveUser))
        }
        catch {
          localStorage.removeItem("user")
        }
      }
    })
  }, [])

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token)
    } else {
      localStorage.removeItem("token")
    }
  }, [token])


  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user))
    } else {
      localStorage.removeItem("user")
    }
  }, [user])

  return (
    <>
      <userContext.Provider value={{ token, setToken, user, setUser }}>
        <NavbarfoREG />
        <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/category" element={<Category />} />
          <Route path="/post/:categoryId" element={<PostPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </userContext.Provider>
    </>
  )
}

export default App
