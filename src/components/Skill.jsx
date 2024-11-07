import React, { useEffect } from "react";
import "./skill.css";

const Skill = () => {
 useEffect(()=>{
  const progress = document.querySelectorAll(".progress");
  let number = document.querySelectorAll(".number");
  let progress_num = progress.length;
  let percentage = [90,90,75,70,90,60,65,75];

  

  for (var i = 0; i < progress_num; i++) {
    upadateProgressBar(i, percentage[i]);
  }

  function upadateProgressBar(num, percentage) {
    let counter = 0;
    setInterval(() => {
      if (counter < percentage) {
        counter = counter + 1;
        progress[num].style.width = counter + "%";
        number[num].innerHTML = counter + "%";
      } else {
        clearInterval;
      }
    }, 70);

  }
  return ()=>{
   
  }
 },[])


 

///////////////////////////////////////////////////////

 
  return (
    <div className="main-skill-container" id="skills">
      <div className="skill-name">
        <h2  className="underline">Skill's</h2>
       
       </div>
       <div className="skill-overview">
       <p>I have a strong foundation in frontend web development, particularly with modern JavaScript frameworks like React. My expertise includes creating responsive, user-friendly interfaces and working with tools like Sass for styling.</p>
       </div>
      <div className="skill-container">
       
        <div className="container">
          <div className="name">
            <h3>HTML</h3>
          </div>
          <div className="skill">
            <div className="progress">
              <div className="number"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="name">
            <h3>CSS</h3>
          </div>
          <div className="skill">
            <div className="progress">
              <div className="number"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="name">
            <h3>JavaScript</h3>
          </div>
          <div className="skill">
            <div className="progress">
              <div className="number"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="name">
            <h3>React</h3>
          </div>
          <div className="skill">
            <div className="progress">
              <div className="number"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="name">
            <h3>JQuery</h3>
          </div>
          <div className="skill">
            <div className="progress">
              <div className="number"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="name">
            <h3>Basic php</h3>
          </div>
          <div className="skill">
            <div className="progress">
              <div className="number"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="name">
            <h3>BootStrap</h3>
          </div>
          <div className="skill">
            <div className="progress">
              <div className="number"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="name">
            <h3>Git/Github</h3>
          </div>
          <div className="skill">
            <div className="progress">
              <div className="number"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
