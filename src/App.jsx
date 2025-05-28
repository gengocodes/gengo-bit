import React, { useRef } from "react";
// import HeroSection from "./components/HeroSection/HeroSection";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects/Projects";
import Header from "./components/Header/Header";
import Arrow from "./components/Arrow/Arrow";
import Welcome from "./components/Welcome/Welcome";
import Contact from "./components/Contact/Contact";
import Techstack from "./components/Techstack/Techstack";
import Slideshow from "./components/Slideshow/Slideshow";
import Slideshow2 from "./components/Slideshow/Slideshow2";
import "animate.css";

function App() {
  // const heroSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);

  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const homeSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);

  return (
    <div className="App">
      <Arrow />
      <Header
        // heroSectionRef={heroSectionRef}
        homeSectionRef={homeSectionRef}
        contactSectionRef={contactSectionRef}
        aboutSectionRef={aboutSectionRef}
        skillsSectionRef={skillsSectionRef}
        projectsSectionRef={projectsSectionRef}
      />

      <section ref={homeSectionRef} id="home">
        <Welcome />
      </section>
      <Slideshow />
      <Slideshow2 />
      <section ref={skillsSectionRef} id="skills">
        <Techstack />
      </section>

      {/* <section ref={heroSectionRef} id="hero">
        <HeroSection />
      </section> */}

      {/* <section ref={aboutSectionRef} id="about">
          <About />
        </section>

        <section ref={skillsSectionRef} id="skills">
          <Skills />
        </section> */}

      {/* <section ref={projectsSectionRef} id="projects">
          <Projects />
        </section> */}
      <section ref={contactSectionRef} id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
