import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/App.css";

const applyParallaxEffect = () => {
  const parallaxSections = document.querySelectorAll(".parallax-section");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    parallaxSections.forEach((section) => {
      const offsetTop = section.getBoundingClientRect().top + scrollY;
      const speed = parseFloat(section.dataset.speed || 0.5);
      const parallaxOffset = (scrollY - offsetTop) * speed;

      const video = section.querySelector(".background-video");
      if (video) {
        video.style.transform = `translateY(${parallaxOffset}px)`;
      }
    });
  });
};

const MainApp = () => {
  useEffect(() => {
    applyParallaxEffect();
  }, []);

  return <App />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainApp />);
