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
    },
    {
      id: 2,
      name: "Project Two",
      description: "Gym Landing page",
      BgPic: "src/assets/netflix.png",
    },
    {
      id: 3,
      name: "Project Three",
      description: "Robotics Landing page",
      BgPic: "src/assets/gym.png",
    },
    {
      id: 4,
      name: "Project Four",
      description: "Music App",
      BgPic: "src/assets/airways.png",
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
              <a href="/">visit <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
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
