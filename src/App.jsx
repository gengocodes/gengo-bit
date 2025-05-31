import React, { useRef } from "react";
import Projects from "./components/Projects/Projects";
import Arrow from "./components/Arrow/Arrow";
import Welcome from "./components/Welcome/Welcome";
import Contact from "./components/Contact/Contact";
import Techstack from "./components/Techstack/Techstack";
import Slideshow from "./components/Slideshow/Slideshow";
import Slideshow2 from "./components/Slideshow/Slideshow2";
import Timeline from "./components/Timeline/Timeline";
import "./App.css";
import "animate.css";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

function App() {
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const homeSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const experienceSectionRef = useRef(null);

  return (
    <ParallaxProvider>
      <div className="App">
        <Arrow />
        <Parallax speed={-10}>
          <section ref={homeSectionRef} id="home" className="firstSec">
            <Welcome />
          </section>
        </Parallax>

        <Parallax speed={23} translateY={[0, -50]}>
          <section id="slideshow">
            <Slideshow />
            <Slideshow2 />
          </section>
          <section className="ghost2"></section>

          <section ref={skillsSectionRef} id="skills">
            <Techstack />
          </section>

          <section ref={projectsSectionRef} id="projects">
            <Projects />
          </section>

          <section ref={experienceSectionRef} id="timeline">
            <Timeline />
          </section>
          <Parallax speed={1} translateY={[0, 0]}></Parallax>
          <section ref={contactSectionRef} id="contact">
            <Contact />
          </section>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}

export default App;
