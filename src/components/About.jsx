import React from 'react'
import "../styles/About.css";

const About = ({ videoRef }) => {

  return (
    <section className="about-section">
      <video
        ref={videoRef}
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={require("../assets/about-background.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm passionate about technology, design, and integrating hardware 
          and software solutions to solve real-world problems.
        </p>
      </div>
    </section>
  );
};

export default About;
