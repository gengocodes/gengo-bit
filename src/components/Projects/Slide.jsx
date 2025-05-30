import React from "react";
import "./Slide.css";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";
import project5 from "./assets/project5.png";
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
            <div className="shadow-overlay"></div>
            <div className="shadow-overlay"></div>
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
              <div className="website-cont first ">
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
            <div className="shadow-overlay"></div>
            <div className="shadow-overlay"></div>{" "}
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
              <p className="javascript">JavaScript</p>
              <p className="css">CSS</p>
              <p className="nodejs">Node.js</p>
              <p className="firebase">Firebase</p>
            </div>
            <div className="div2-2">
              <p>
                &bull; This project is being developed using ReactJS for the
                frontend, Node.js for the backend, and Firebase as the database.
                It leverages Firebase Authentication to enable user logins and
                provides features such as real-time public chat, thread posting,
                and local weather checking. Additionally, it integrates multiple
                APIs to enhance user experience and is built using TypeScript
                for improved maintainability and scalability.
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
          <div className="div1">
            <div className="shadow-overlay"></div>
            <div className="shadow-overlay"></div>{" "}
            <img
              src={project3}
              alt={`Slide ${index + 1}`}
              className="project-img"
            />
          </div>
          <div className="div2">
            <div className="div2-1">
              <p className="first react">React</p>
              <p className="typescript">TypeScript</p>
              <p className="javascript">JavaScript</p>
              <p className="css">CSS</p>
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
    case 3:
      slideContent = (
        <div className="slide-cont">
          <div className="div1">
            <div className="shadow-overlay"></div>
            <div className="shadow-overlay"></div>{" "}
            <img
              src={project4}
              alt={`Slide ${index + 1}`}
              className="project-img"
            />
          </div>
          <div className="div2">
            <div className="div2-1">
              <p className="first python">Python</p>
              <p className="tensorflow">TensorFlow</p>
            </div>
            <div className="div2-2">
              <p>
                &bull; Developed a deep learning project in Python using
                TensorFlow and Keras to classify fish species from the CIFAR100
                dataset, applying transfer learning with the VGG16 model.
                Integrated techniques like dropout regularization, learning rate
                scheduling, image preprocessing with OpenCV, and results
                visualization with Matplotlib, achieving an accuracy of 68%-76%
                across five fine-grained fish species classes.
              </p>
            </div>
            <div className="div2-3">
              <div className="github-cont first ">
                <GitHubIcon />
                <p className="first">View Source Code</p>
              </div>
            </div>
          </div>
        </div>
      );
      break;

    case 4:
      slideContent = (
        <div className="slide-cont">
          <div className="div1">
            <div className="shadow-overlay"></div>
            <div className="shadow-overlay"></div>{" "}
            <img
              src={project5}
              alt={`Slide ${index + 1}`}
              className="project-img"
            />
          </div>
          <div className="div2">
            <div className="div2-1">
              <p className="first json">JSON</p>
              <p className="a">REST API</p>
            </div>
            <div className="div2-2">
              <p>
                &bull; Developed a DeepSeek custom application in Make using
                DeepSeek's RESTful APIs
              </p>
            </div>
            <div className="div2-3">
              <div className="github-cont first ">
                <GitHubIcon />
                <p className="first">View Source Code</p>
              </div>
            </div>
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
