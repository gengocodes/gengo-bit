import React, { useRef} from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Header from "./components/Header"; // Import Header component

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

  return (
    <div className="App">
      <Header
        heroSectionRef={heroSectionRef}
        aboutSectionRef={aboutSectionRef}
        skillsSectionRef={skillsSectionRef}
        projectsSectionRef={projectsSectionRef}
      />
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
