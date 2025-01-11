import React, { useRef } from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const heroSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);

  const heroVideoRef = useRef(null);
  const aboutVideoRef = useRef(null);
  const skillsVideoRef = useRef(null);
  const projectsVideoRef = useRef(null);

  const synchronizeVideos = (currentTime) => {
    if (heroVideoRef.current) heroVideoRef.current.currentTime = currentTime;
    if (aboutVideoRef.current) aboutVideoRef.current.currentTime = currentTime;
    if (skillsVideoRef.current) skillsVideoRef.current.currentTime = currentTime;
    if (projectsVideoRef.current) projectsVideoRef.current.currentTime = currentTime;
  };

  const handleScrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#hero" onClick={() => handleScrollTo(heroSectionRef)}>Home</a></li>
            <li><a href="#about" onClick={() => handleScrollTo(aboutSectionRef)}>About</a></li>
            <li><a href="#skills" onClick={() => handleScrollTo(skillsSectionRef)}>Skills</a></li>
            <li><a href="#projects" onClick={() => handleScrollTo(projectsSectionRef)}>Projects</a></li>
          </ul>
        </nav>
      </header>

      <section ref={heroSectionRef} id="hero">
        <HeroSection
          videoRef={heroVideoRef}
          synchronizeVideos={synchronizeVideos}
        />
      </section>

      <section ref={aboutSectionRef} id="about">
        <About
          videoRef={aboutVideoRef}
          synchronizeVideos={synchronizeVideos}
        />
      </section>

      <section ref={skillsSectionRef} id="skills">
        <Skills
          videoRef={skillsVideoRef}
          synchronizeVideos={synchronizeVideos}
        />
      </section>

      <section ref={projectsSectionRef} id="projects">
        <Projects
          videoRef={projectsVideoRef}
          synchronizeVideos={synchronizeVideos}
        />
      </section>
    </div>
  );
}

export default App;
