import React from 'react'
import './footer.css'


const Footer = () => {
  return (
    <>
      <footer>
        <div className="left-container">
          <span>PortFolio</span>
          <p><strong>Email:</strong>:kunalkumar7702@gmail.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
        </div>
        <div className="middle-container">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/skill">Skills</a>
          <a href="/project">Project</a>
        </div>
        <div className="right-container">
          <span>Sociel Links</span>
        <div className="sociel-links">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-square-github"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-facebook"></i>
        </div>
        </div>
        <div className="footer-bottom">
        &copy; 2024 | Designed by Kunal Kumar
        </div>

      </footer>
    </>
  )
}

export default Footer;
