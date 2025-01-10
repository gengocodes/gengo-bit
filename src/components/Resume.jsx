import React from "react";
import "../styles/Resume.css";
import resume from "../assets/Paul_Emmanuel_Corsino_Resume.pdf";

const Resume = () => {
  return (
    <section className="resume-section">
      <h2>My Resume</h2>
      <p>Download my resume to learn more about my skills and experiences.</p>
      <a href={resume} download className="resume-button">
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
