import { React, useState, useCallback } from "react";
import "./project.css";

function Projects() {
  const [activeBox, setActiveBox] = useState(null);

  const handleMouseEnter = useCallback((id) => {
    console.log(id);
    setTimeout(() => {
      setActiveBox(id);
    }, 500);
  }, []);

  const projects = [
    {
      id: 1,
      name: "Project One",
      description: "Airways Landing Page",
      BgPic: "src/assets/airways.png",
      url:"https://airways-phi.vercel.app"
    },
    {
      id: 2,
      name: "Project Two",
      description: "Gym Landing page",
      BgPic: "src/assets/netflix.png",
      url:"https://gym-webpage-design.vercel.app"
    },
    {
      id: 3,
      name: "Project Three",
      description: "Robotics Landing page",
      BgPic: "src/assets/gym.png",
      url:"https://bro-robo-robotics-page-2.vercel.app"
     
    },
    {
      id: 4,
      name: "Project Four",
      description: "Netflix-clone",
      BgPic: "src/assets/netflix.png",
      Imgurl:"https://netflix-clone-olive-beta.vercel.app"
    },

    // Add more projects as needed
  ];

  return (
    <>
      <div className="project-container">
        <div className="project-logo">
          {" "}
          <h2 className="underline">Project's</h2>
        </div>

        <div className="project-info">
            
{projects.map((project) => (
          <div
            key={project.id}
            className={`boxes ${activeBox === project.id ? "active" : ""}`}
            id={`box${project.id}`}>
                
            <img src={project.BgPic} alt="" />


            <div
              className="project-content"
              onMouseEnter={() => handleMouseEnter(project.id)}
            >
              <span>{project.name}</span>
              <p className="project-para">{project.description}</p>
              <button className="visit-btn">
              <a href={project.Imgurl}>visit <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
              </button>
            </div>
          </div>
        ))}
        </div>
</div>
      
    </>
  );
}

export default Projects;
