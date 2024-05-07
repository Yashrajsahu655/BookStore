import React from "react";
import Home from "./Home";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ContactUs from "./Contact/ContactUs"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
