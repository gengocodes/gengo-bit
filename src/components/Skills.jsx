import { useEffect } from "react";
import "../styles/Skills.css";

const Skills = ({ videoRef, synchronizeVideos }) => {
  useEffect(() => {
    const videoElement = videoRef.current; // store current ref in a local variable
    const onPlay = () => {
      if (videoElement) synchronizeVideos(videoElement.currentTime);
    };

    if (videoElement) {
      videoElement.addEventListener("play", onPlay);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("play", onPlay);
      }
    };
  }, [videoRef, synchronizeVideos]);

  return (
    <section id="skills" className="skills-section">
      <video
        ref={videoRef}
        className="background-video"
        autoPlay
        loop
        muted
      >
        <source src={require("../assets/skills-background.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="skills-content">
        <h2>Skills</h2>
        <ul className="line1">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <ul className="line2">
          <li>React</li>
          <li>Firebase</li>
          <li>Figma</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
