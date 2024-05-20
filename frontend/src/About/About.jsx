import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const About = () => {
  return <div>
    <Navbar/>
    <div>
        <AboutUs/>
        <p className=" bg-black h-0.5 mt-10 mx-5"></p>
    </div>
    <Footer/>
  </div>;
};

export default About;
