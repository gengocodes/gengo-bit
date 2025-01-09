import React, { useEffect } from "react";
import "../styles/HeroSection.css";


const HeroSection = () => {
  useEffect(() => {
    let ticking = false;

    const parallaxEffect = () => {
      const background = document.querySelector(".parallax-background");
      const scrollPosition = window.pageYOffset;

      if (background && !ticking) {
        window.requestAnimationFrame(() => {
          background.style.transform = `translateY(${scrollPosition * 0.5}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", parallaxEffect);

    return () => {
      window.removeEventListener("scroll", parallaxEffect);
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="parallax-background"></div>
      <div className="hero-content">
        <h1>Welcome to Gengo-site</h1>
        <p>Here contains all of my professional projects</p>
      </div>
    </section>
  );
};

export default HeroSection;
