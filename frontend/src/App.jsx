import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Category from "./components/Category/Category";

export const userContext = createContext();

const App = () => {
  const [user, setUser] = useState(null); 
  const [token, setToken] = useState(null);  

  return (
    <userContext.Provider value={{ user, setUser, token, setToken }}>
      <Navbar />
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </userContext.Provider>
  );
};

export default App;
