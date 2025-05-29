import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import "./Projects.css";
import "./embla.css";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function Projects() {
  return (
    <div className="projects-main">
      <div className="projects-div1">
        <div>
          <h1 className="projects-title">Projects</h1>
        </div>
      </div>
      <div className="projects-div2">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
}

export default Projects;
