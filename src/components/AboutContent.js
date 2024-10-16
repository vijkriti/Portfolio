import "./AboutContentStyles.css";
import about from "../assets/me.jpg";
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a full stack developer experienced in using Angular for frontend development, SQL for database management, and .NET Core for backend development.</p>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={about} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={about} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent