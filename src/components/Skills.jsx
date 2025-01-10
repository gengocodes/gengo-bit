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
        playsInline
      >
        <source src={require("../assets/skills-background.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="skills-content">
        <h2>Skills</h2>
        <div className="skills-lists">
          <ul className="line1">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Firebase</li>
            <li>Figma</li>
          </ul>
          <ul className="line2">
            <li>Canva</li>
            <li>Adobe Photoshop</li>
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
          <ul className="line3">
            <li>Embedded C</li>
            <li>8086 Assembly</li>
            <li>Altera Quartus</li>
            <li>ModelSim</li>
            <li>MATLAB</li>
            <li>Eagle</li>
          </ul>
          <ul className="line4">
            <li>AutoCAD</li>
            <li>SketchUp</li>
            <li>Fusion360</li>
            <li>VirtualBox</li>
            <li>Proteus</li>
            <li>Cisco Packet Tracer</li>
          </ul>
          <ul className="line5">
            <li>Microsoft Office</li>
            <li>Adobe Premiere Pro</li>
            <li>ShotCut</li>
            <li>Capcut</li>
            <li>Arduino</li>
            <li>PIC16F877A</li>
          </ul>
          <ul className="line6">
            <li>ESP32</li>
            <li>Raspberry Pi</li>
            <li>GSM Modules</li>
            <li>LoRa Modules</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
