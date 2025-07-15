import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { useVisibilityObserver } from "../useVisibilityObserver";
import "./Projects.css";
import "./embla.css";
import project0_1 from "../Slideshow/images/image 2.4.png";
import project0_2 from "../Slideshow/images/image 2.3.png";
import project0_3 from "../Slideshow/images/image 2.2.png";
import project0_4 from "../Slideshow/images/image 2.1.png";
import project0_5 from "../Slideshow/images/image 2.0.png";
import project1_1 from "../Slideshow/images/image 1.0.png";
import project1_2 from "../Slideshow/images/image 1.1.png";
import project1_3 from "../Slideshow/images/image 1.2.png";
import project1_4 from "../Slideshow/images/image 1.3.png";
import project1_5 from "../Slideshow/images/image 1.4.png";
import project1_6 from "../Slideshow/images/image 1.5.png";
import project1_7 from "../Slideshow/images/image 1.6.png";
import project1_8 from "../Slideshow/images/image 1.7.png";
import project1_9 from "../Slideshow/images/image 1.8.png";
import project2_1 from "../Slideshow/images/image 2.5.png";
import project2_2 from "../Slideshow/images/image 2.6.png";
import project2_3 from "../Slideshow/images/image 2.7.png";
import project2_4 from "../Slideshow/images/image 2.8.png";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const modalStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backdropFilter: "blur(3px)",
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  animation: "modalFadeIn 0.4s cubic-bezier(.4,0,.2,1)",
};
const carouselStyles = {
  position: "relative",
  width: "100vw",
  maxWidth: "none",
  minWidth: "0",
  minHeight: "0",
  maxHeight: "none",
  background: "transparent",
  borderRadius: "0",
  border: "none",
  boxShadow: "none",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Montserrat, Josefin Sans, Poppins, sans-serif",
};
const imgContainerStyles = {
  position: "relative",
  width: "85vw",
  maxWidth: "1600px",
  minWidth: "320px",
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const imgStyles = {
  width: "85vw",
  maxWidth: "1600px",
  minWidth: "320px",
  maxHeight: "80vh",
  minHeight: "200px",
  borderRadius: "18px",
  objectFit: "contain",

  border: "none",
  transition: "box-shadow 0.18s",
  display: "block",
};
const counterStyles = {
  color: "#fff",
  marginTop: "1.5rem",
  fontSize: "1.1rem",
  fontWeight: 500,
  letterSpacing: "2px",
  textShadow: "0 1px 2px #222229",
  fontFamily: "Montserrat, Josefin Sans, Poppins, sans-serif",
};

const projectImages = [
  [project0_1, project0_2, project0_3, project0_4, project0_5],
  [
    project1_1,
    project1_2,
    project1_3,
    project1_4,
    project1_5,
    project1_6,
    project1_7,
    project1_8,
    project1_9,
  ],
  [project2_4, project2_3, project2_2, project2_1],
  [project0_1, project0_2, project0_3, project0_4, project0_5],
];

function Projects() {
  const [ref1, isVisible1] = useVisibilityObserver();
  const [ref2, isVisible2] = useVisibilityObserver();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalProjectIdx, setModalProjectIdx] = React.useState(0);
  const [carouselIdx, setCarouselIdx] = React.useState(0);

  const handleViewUIUX = (projectIdx) => {
    setModalProjectIdx(projectIdx);
    setCarouselIdx(0);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const prevImg = () =>
    setCarouselIdx((i) =>
      i === 0 ? projectImages[modalProjectIdx].length - 1 : i - 1
    );
  const nextImg = () =>
    setCarouselIdx((i) =>
      i === projectImages[modalProjectIdx].length - 1 ? 0 : i + 1
    );

  React.useEffect(() => {
    if (!modalOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  return (
    <div
      className="projects-main animate__animated animate__slideInUp shapedividers_com-8373"
      style={{ position: "relative" }}
    >
      <div className="projects-div1">
        <div>
          <h1
            ref={ref1}
            className={`projects-title ${
              isVisible1
                ? "animate__animated animate__fadeInLeft"
                : "hidden-on-load"
            }`}
          >
            Projects
          </h1>
        </div>
      </div>
      <div
        ref={ref2}
        className={`projects-div2 ${
          isVisible2
            ? "animate__animated animate__fadeInRight"
            : "hidden-on-load"
        }`}
      >
        <EmblaCarousel
          slides={SLIDES}
          options={OPTIONS}
          onViewUIUX={handleViewUIUX}
        />
      </div>
      {modalOpen && (
        <div style={modalStyles}>
          <div style={carouselStyles}>
            <div style={imgContainerStyles}>
              <IconButton
                className="carousel-close-btn"
                onClick={closeModal}
                aria-label="Close"
                style={{ position: "absolute", top: 0, right: "1%", zIndex: 10000 }}
              >
                <CloseIcon fontSize="medium" className="carousel-close-icon" />
              </IconButton>
              <IconButton
                onClick={prevImg}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "2%",
                  transform: "translateY(-50%)",
                  background: "none",
                  color: "#222229",
                  padding: "0.7rem",
                  borderRadius: "50%",
                  boxShadow: "none",
                  border: "none",
                  outline: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "32px",
                  height: "32px",
                  minWidth: "32px",
                  minHeight: "32px",
                  zIndex: 3,
                  transition: "color 0.2s, transform 0.2s",
                  "&:hover": {
                    color: "rgb(0,204,255)",
                    transform: "scale(1.13) translateY(-50%)",
                    background: "none",
                  },
                  "&:focus": {
                    color: "rgb(0,204,255)",
                    transform: "scale(1.13) translateY(-50%)",
                    background: "none",
                  },
                }}
                aria-label="Previous"
              >
                <ArrowBackIosNewIcon
                  fontSize="medium"
                  sx={{ color: "inherit", transition: "color 0.2s" }}
                />
              </IconButton>
              <img
                src={projectImages[modalProjectIdx][carouselIdx]}
                alt={`UI/UX ${carouselIdx + 1}`}
                style={imgStyles}
              />
              <IconButton
                onClick={nextImg}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "2%",
                  transform: "translateY(-50%)",
                  background: "none",
                  color: "#222229",
                  padding: "0.7rem",
                  borderRadius: "50%",
                  boxShadow: "none",
                  border: "none",
                  outline: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "32px",
                  height: "32px",
                  minWidth: "32px",
                  minHeight: "32px",
                  zIndex: 3,
                  transition: "color 0.2s, transform 0.2s",
                  "&:hover": {
                    color: "rgb(0,204,255)",
                    transform: "scale(1.13) translateY(-50%)",
                    background: "none",
                  },
                  "&:focus": {
                    color: "rgb(0,204,255)",
                    transform: "scale(1.13) translateY(-50%)",
                    background: "none",
                  },
                }}
                aria-label="Next"
              >
                <ArrowForwardIosIcon
                  fontSize="medium"
                  sx={{ color: "inherit", transition: "color 0.2s" }}
                />
              </IconButton>
            </div>
            <div style={counterStyles}>
              {carouselIdx + 1} / {projectImages[modalProjectIdx].length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
