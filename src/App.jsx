import React, { useRef } from "react";
import HeroSection from "./components/HeroSection";
// import About from "./components/About";
// import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Arrow from "./components/Arrow";
import Welcome from "./components/Welcome";
import Contact from "./components/Contact";

function App() {
  const heroSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const welcomeSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  return (
    <div className="App">
      <div>
        <Header
          heroSectionRef={heroSectionRef}
          aboutSectionRef={aboutSectionRef}
          skillsSectionRef={skillsSectionRef}
          projectsSectionRef={projectsSectionRef}
        />
        
        <section ref={welcomeSectionRef} id="welcome">
          <Welcome />
        </section>

        <section ref={contactSectionRef} id="contact">
          <Contact />
        </section>

        <Arrow />

        <section ref={heroSectionRef} id="hero">
          <HeroSection />
        </section>

        {/* <section ref={aboutSectionRef} id="about">
          <About />
        </section>

        <section ref={skillsSectionRef} id="skills">
          <Skills />
        </section> */}

        <section ref={projectsSectionRef} id="projects">
          <Projects />
        </section>
      </div>
    </div>
  );
}

export default App;
