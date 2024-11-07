import React, { lazy, Suspense } from "react";
import "./header.css";
import { Link, Router } from "react-router-dom";

// navbar scroll function

window.addEventListener("scroll", () => {
  const navbar = document.querySelector("header");

  if (window.scrollY > 60) {
    navbar.classList.add("background");
  } else {
    navbar.classList.remove("background");
  }
});

// toggleMenu
function toggleMenu() {
  let bar = document.querySelector(".links");
  bar.classList.toggle("active");
}

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo-name">
          <h2>
            Port<span>Folio</span>
          </h2>
        </div>
        
        <div className="nav-links">
          <ul className="links">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/skill">Skill</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/project">Project</a>
            </li>
          </ul>
        </div>
    
        <i className="fa-solid fa-bars  " id="bar" onClick={toggleMenu}></i>
      </header>
    </>
  );
};

export default Header;
