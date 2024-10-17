import "./HeroImgStyles.css";
import IntroImg from "../assets/intro-bg.jpg";
import React from 'react';
import {Link} from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            {/* <p>HI, I'M A FREELANCER.</p> */}
            <h1>Full Stack Developer.</h1>
            <div>
                <Link to="/projects" className="btn">Projects</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg