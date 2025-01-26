import React, { useRef } from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Header from "./components/Header";

function App() {
  const heroSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);

  return (
    <div className="App">
      <Header
        heroSectionRef={heroSectionRef}
        aboutSectionRef={aboutSectionRef}
        skillsSectionRef={skillsSectionRef}
        projectsSectionRef={projectsSectionRef}
      />
      <section ref={heroSectionRef} id="hero">
        <HeroSection />
      </section>

      <section ref={aboutSectionRef} id="about">
        <About />
      </section>

      <section ref={skillsSectionRef} id="skills">
        <Skills />
      </section>

      <section ref={projectsSectionRef} id="projects">
        <div className="line"></div>
        {/* <p className="credits">Test</p> */}
        <Projects />
      </section>

    </div>
  );
}

export default App;
