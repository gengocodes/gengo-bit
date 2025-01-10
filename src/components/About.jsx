import { useEffect } from "react";
import "../styles/About.css";

const About = ({ videoRef, synchronizeVideos }) => {
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
    <section className="about-section">
      <video
        ref={videoRef}
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={require("../assets/about-background.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm passionate about technology, design, and crafting solutions that
          make a difference. Let me share my journey with you.
        </p>
      </div>
    </section>
  );
};

export default About;
