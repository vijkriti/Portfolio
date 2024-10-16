import "./footerStyles.css";
import {FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";
import React from 'react'

const footer = () => {

  const githubUrl = "https://github.com/vijkriti";
  const twitterUrl = "https://x.com/KritiVij2?t=WKGB7I7JUJkDLMD1AnK6Rw&s=08";
  const linkedinUrl = "https://www.linkedin.com/in/kriti-vij-842560239/";

  return (
    <div className="footer" id="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={
                        {color:"#fff", marginRight:"2rem"}
                    }/>
                    <div>
                        <p>84, Phase 1, Green Avenue Estate</p>
                        <p>Himachal Pradesh, India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={
                        {color:"#fff", marginRight:"2rem"}
                    }/> 8352014288</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={
                        {color:"#fff", marginRight:"2rem"}
                    }/> kritivij11@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>About Me</h4>
                <p>Hello! I'm Kriti, a passionate Full-Stack Developer specializing in Angular, .NET Core, and SQL solutions. I help businesses build scalable and efficient web applications by combining cutting-edge technology with practical problem-solving skills.</p>
                <div className="social">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                </a>
                <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                </a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default footer;