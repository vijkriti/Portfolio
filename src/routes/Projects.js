import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Background from '../components/Background';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <Background heading="PROJECTS" text="Some of my most recent works"/>
      <PricingCard/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Projects;