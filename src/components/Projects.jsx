import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <img src="/assets/project1.jpg" alt="Project 1" />
          <h3>Project 1</h3>
          <p>Description of the project.</p>
        </div>
        <div className="project-card">
          <img src="/assets/project2.jpg" alt="Project 2" />
          <h3>Project 2</h3>
          <p>Description of the project.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
