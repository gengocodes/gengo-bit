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
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}

export default Projects;
