import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Background from '../components/Background';
import AboutContent from '../components/AboutContent';


const About = () => {
  return (
    <div>
      <Navbar/>
      <Background heading="ABOUT" text="Full Stack Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About;