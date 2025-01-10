import React, { useEffect } from "react";
import "../styles/About.css";

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector(".about-section");
      const videoElement = aboutSection.querySelector(".background-video");

      if (videoElement) {
        const parallaxFactor = 0.2; // Adjust for parallax intensity
        const offset = (window.scrollY - aboutSection.offsetTop) * parallaxFactor;
        videoElement.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="about-section">
      <video className="background-video" autoPlay loop muted>
        <source src={require("../assets/about-background.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm passionate about technology, design, and crafting solutions that
          make a difference. Let me share my journey with you.
        </p>
      </div>
    </section>
  );
};

export default About;
