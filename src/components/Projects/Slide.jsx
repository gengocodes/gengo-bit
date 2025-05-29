import React from "react";
import "./Slide.css";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import NorthWestIcon from "@mui/icons-material/NorthWest";

const Slide = ({ index }) => {
  let slideContent;

  // Hardcoded content based on the slide index
  switch (index) {
    case 0:
      slideContent = (
        <div className="slide-cont">
          <div className="div1">
            {" "}
            <img
              src={project1}
              alt={`Slide ${index + 1}`}
              className="project-img"
            />
          </div>
          <div className="div2">
            <div className="div2-1">
              <p className="first html">HTML</p>
              <p className="css">CSS</p>
              <p className="javascript">JavaScript</p>
              <p className="nodejs">Node.js</p>
              <p className="firebase">Firebase</p>
            </div>
            <div className="div2-2">
              <p>
                &bull; A thesis project for a smart IoT-based septic tank
                monitoring system that utilizes an ultrasonic sensor
                (JSN-SR04T), Arduino, ESP32, LoRa SX1278, SIM800L EVB GSM
                module, Firebase, and a web application. This system provides
                real-time monitoring, predictive analytics, SMS alerts, and
                dynamic visualization for efficient septic tank management.
              </p>
            </div>
            <div className="div2-3">
              <div className="github-cont first ">
                <GitHubIcon />
                <p className="first">View Source Code</p>
              </div>
              <div className="website-cont first">
                <NorthWestIcon />
                <p className="first">View Website</p>
              </div>
            </div>
          </div>
        </div>
      );
      break;

    case 1:
      slideContent = (
        <div className="slide-cont">
          <div className="div1">
            {" "}
            <img
              src={project2}
              alt={`Slide ${index + 1}`}
              className="project-img"
            />
          </div>
          <div className="div2">
            <div className="div2-1">
              <p className="first react">React</p>
              <p className="typescript">TypeScript</p>
              <p className="nodejs">Node.js</p>
              <p className="mongodb">MongoDB</p>
            </div>
            <div className="div2-2">
              <p>
                &bull; This project is being developed using ReactJS for the
                frontend, Node.js for the backend, and MongoDB as the database.
                It includes an authentication system to enable user logins. The
                application allows users to create a to-do list, set priority
                levels, update task statuses, and mark tasks as complete.
                Additionally, it features a user-friendly interface, real-time
                updates, and intuitive task management to enhance productivity.
              </p>
            </div>
            <div className="div2-3">
              <div className="github-cont first ">
                <GitHubIcon />
                <p className="first">View Source Code</p>
              </div>
              <div className="website-cont first">
                <NorthWestIcon />
                <p className="first">View Website</p>
              </div>
            </div>
          </div>
        </div>
      );
      break;

    case 2:
      slideContent = (
        <div className="slide-cont">
          <img
            src="path/to/image3.jpg"
            alt={`Slide ${index + 1}`}
            className="project-img"
          />
          <div className="embla__slide__text">hahaha</div>
          <div className="embla__slide__buttons">
            <button className="embla__slide__prev">Previous</button>
            <button className="embla__slide__next">Next</button>
          </div>
        </div>
      );
      break;

    default:
      slideContent = (
        <div className="slide-cont">
          <img
            src="path/to/default.jpg"
            alt={`Slide ${index + 1}`}
            className="project-img"
          />
          <div className="embla__slide__text">Default Slide</div>
        </div>
      );
      break;
  }

  return (
    <div className="embla__slide">
      <div className="embla__slide__inner">{slideContent}</div>
    </div>
  );
};

export default Slide;
