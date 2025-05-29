import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { useVisibilityObserver } from "../useVisibilityObserver";
import "./Projects.css";
import "./embla.css";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function Projects() {
  const [ref1, isVisible1] = useVisibilityObserver();
  return (
    <div className="projects-main animate__animated animate__slideInUp">
      <div className="projects-div1">
        <div>
          <h1
            ref={ref1}
            className={`projects-title ${
              isVisible1
                ? "animate__animated animate__slideInLeft"
                : "hidden-on-load"
            }`}
          >
            Projects
          </h1>
        </div>
      </div>
      <div className="projects-div2">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
}

export default Projects;
