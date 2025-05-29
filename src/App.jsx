import React, { useRef } from "react";
import Projects from "./components/Projects/Projects";
import Arrow from "./components/Arrow/Arrow";
import Welcome from "./components/Welcome/Welcome";
import Contact from "./components/Contact/Contact";
import Techstack from "./components/Techstack/Techstack";
import Slideshow from "./components/Slideshow/Slideshow";
import Slideshow2 from "./components/Slideshow/Slideshow2";
// import Timeline from "./components/Timeline/Timeline";
import "animate.css";

function App() {
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const homeSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);

  return (
    <div className="App">
      <Arrow />
      <section ref={homeSectionRef} id="home">
        <Welcome />
      </section>
      <Slideshow />
      <Slideshow2 />
      <section ref={skillsSectionRef} id="skills">
        <Techstack />
      </section>
      <section ref={projectsSectionRef} id="projects">
        <Projects />
      </section>
      <section ref={contactSectionRef} id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
