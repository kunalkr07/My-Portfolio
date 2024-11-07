import React from "react";
import Typed from "typed.js";
import { useRef, useEffect } from "react";
import "./Hero.css";

const Hero = () => {

 useEffect(()=>{
  function createBubble() {
    const bubbleLayer = document.querySelector(".bubble-container");

 
    
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    const size = Math.random() * 30 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    bubble.style.left = `${Math.random() * 100}%`;

    const duration = Math.random() * 5 + 5;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.animationDelay = `${Math.random() * 3}s`;

    bubbleLayer.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, duration * 1000);
  }

  setInterval(createBubble, 3000);
  return ()=>{
    console.log("Animation completed")
  }
 },[])



  /////////////////////////////////////////////////////////////
  // text animation
  const typedElement = useRef(null);

  const effect = useEffect(() => {
    const options = {
      strings: [
        "I'm Kunal kumar",
        "A Front-End Developer",
      ],
      typeSpeed: 100,
      backSpeed: 25,
      loop: true,
      showCursor: false,
    };

    // Initialize Typed.js on the referenced element
    const typed = new Typed(typedElement.current, options);

    // Cleanup when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);



  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="hero-heading">Welcome</h2>
          <div className="hero-typed">
            <h2 ref={typedElement}></h2>
          </div>

          <div className="hero-para">
            <p>
            As a frontend developer, I approach code as both craft and meditation, where HTML and CSS form the structure, but true depth is born from the dance of JavaScript, the subtle grace of Sass, and the creative potential of React. My journey flows through projects as rivers flow to the sea—each one unique, yet part of a larger, infinite whole.
            </p>
          </div>



          <button className="hero-btn">Download CV</button>


          <div className="sociel-icons-list">
            <ul>
              <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>
              <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href=""><i className="fa-brands fa-linkedin-in"></i></a></li>
            </ul>
          </div>


    
        </div>
          {/* <div className="my-pic">

          </div> */}
    

        {/* hero content ends here */}

        <div className="bubble-container"></div>
        
      </div>

    
    </>
  );
};

export default Hero;
