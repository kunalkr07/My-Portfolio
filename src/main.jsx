import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Skill from "./components/Skill.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Hero/>
      {/* <Routes>
    
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/skill" element={<Skill />} />
        
      </Routes> */}
      <About/>
      <Projects/>
      <Skill/> 
      <Contact/>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
);
