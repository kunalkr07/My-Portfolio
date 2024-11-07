import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="about-section " id="about">
       <p className="about-name underline">About Me</p>
        <div className="about-content">
          <div className="left-content"></div>
          <div className="right-content">
            <h2 className="content-heading ">[Frontend Developer]</h2>
            <p className="content-para">
            As a passionate frontend developer, I thrive on creating dynamic, user-friendly web experiences. I have a strong foundation in HTML, CSS, and JavaScript, along with expertise in frameworks like React. I'm dedicated to writing clean, efficient code and continuously expanding my skills to stay updated with the latest web technologies. Whether building responsive websites or interactive applications, my goal is to deliver solutions that not only look great but also perform flawlessly.
            </p>
           <center>
           <button className="download-btn">
              <a
                href="/src/components/kunal_resume.pdf"
                download="My_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </button>
           </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
