import "../styles/Projects.css";

const Projects = ({ videoRef }) => {

  return (
    <section id="projects" className="projects-section">
      <video
        ref={videoRef}
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={require("../assets/projects-background.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="projects-content">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">
              <img src="/assets/project1.jpg" alt="Project 1" />
            </a>
            <h3>Project 1</h3>
            <p>Description of the project.</p>
          </div>
          <div className="project-card">
            <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">
              <img src="/assets/project2.jpg" alt="Project 2" />
            </a>
            <h3>Project 2</h3>
            <p>Description of the project.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
