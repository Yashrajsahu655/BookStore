import React from "react";
import Home from "./Home";
import { BrowserRouter, Router, Routes, Route, Navigate } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ContactUs from "./Contact/ContactUs"
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";
import AboutUs from "./components/AboutUs";
import About from "./About/About";

const App = () => {

  const [authUser,setAuthUser] =useAuth();
    console.log(authUser);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/aboutus" element={<About/>}/>
        </Routes>
        <Toaster />

      </BrowserRouter>
    </div>

  );
};

export default App;
