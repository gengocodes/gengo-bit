import React, { useRef } from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const heroVideoRef = useRef(null);
  const aboutVideoRef = useRef(null);
  const skillsVideoRef = useRef(null);
  const projectsVideoRef = useRef(null);

  const synchronizeVideos = (currentTime) => {
    // Synchronize all videos to the same time
    if (heroVideoRef.current) heroVideoRef.current.currentTime = currentTime;
    if (aboutVideoRef.current) aboutVideoRef.current.currentTime = currentTime;
    if (skillsVideoRef.current) skillsVideoRef.current.currentTime = currentTime;
    if (projectsVideoRef.current) projectsVideoRef.current.currentTime = currentTime;
  };

  return (
    <div className="App">
      <HeroSection
        videoRef={heroVideoRef}
        synchronizeVideos={synchronizeVideos}
      />
      <About
        videoRef={aboutVideoRef}
        synchronizeVideos={synchronizeVideos}
      />
      <Skills
        videoRef={skillsVideoRef}
        synchronizeVideos={synchronizeVideos}
      />
      <Projects
        videoRef={projectsVideoRef}
        synchronizeVideos={synchronizeVideos}
      />
    </div>
  );
}

export default App;
