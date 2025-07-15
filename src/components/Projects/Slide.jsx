import React from "react";
import "./Slide.css";
import project0 from "./assets/project0.png";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";
import project5 from "./assets/project5.png";
import project6 from "./assets/project6.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import NorthWestIcon from "@mui/icons-material/NorthWest";

const Slide = ({ index }) => {
  let slideContent;
  const Project1Github = () => {
    window.open(
      "https://github.com/gengocodes/Septic-Tank-Monitoring-System",
      "_blank"
    );
  };
  const Project0Website = () => {
    window.open("https://gendo-woad.vercel.app/", "_blank");
  };
  const Project1Website = () => {
    window.open("https://septictankmonitoringsystem.netlify.app/", "_blank");
  };
  const Project2Github = () => {
    window.open("https://github.com/gengocodes/GenChat", "_blank");
  };
  const Project2Website = () => {
    window.open("https://ognegchat.netlify.app/", "_blank");
  };
  const Project3Github = () => {
    window.open("https://github.com/gengocodes/GenDo", "_blank");
  };
  const Project4Github = () => {
    window.open(
      "https://github.com/gengocodes/Image-Classification-of-Fish-Species-Using-the-CIFAR-100-Dataset",
      "_blank"
    );
  };
  const Project5Github = () => {
    window.open("https://github.com/gengocodes/Custom-App-in-Make", "_blank");
  };
  const Project6Github = () => {
    window.open("https://github.com/gengocodes/api-excel-generator", "_blank");
  };
  switch (index) {
    case 0:
      slideContent = (
        <div className="slide-cont">
          <div className="div1">
            <div className="shadow-overlay"></div>
            <div className="shadow-overlay"></div>
            <img
              src={project0}
              alt={`Slide ${index + 1}`}
              className="project-img"
            />
          </div>
          <div className="div2">
            <div className="div2-1">
              <p className="first nextjs">Next.js</p>
              <p className="typescript">CSS</p>
              <p className="typescript">TypeScript</p>
              <p className="mongodb">MongoDB</p>
            </div>
            <div className="div2-2">
              <p>
                &bull; Rebuilt a full-stack task management application using
                Next.js and MongoDB. Utilized Next.js with TypeScript for a
                performant, SEO-friendly frontend and API routes for backend
                logic. Integrated MongoDB for data persistence and implemented
                secure user authentication with session handling. Enabled users
                to create to-do lists, set priorities, update task statuses, and
                mark tasks as complete. Enhanced user experience with real-time
                UI updates, clean design, and responsive layout to optimize
                productivity across devices.
              </p>
            </div>
            <div className="div2-3">
              <div className="github-cont first " onClick={Project1Github}>
                <GitHubIcon />
                <p className="first">View Source Code</p>
              </div>
              <div className="website-cont first " onClick={Project0Website}>
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
              <div className="github-cont first " onClick={Project1Github}>
                <GitHubIcon />
                <p className="first">View Source Code</p>
              </div>
              <div className="website-cont first " onClick={Project1Website}>
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
                &bull; Developed a full-stack web application using ReactJS and
                TypeScript for the frontend, Node.js for the backend, and
                Firebase for authentication and data storage. The application
                features secure user login via Firebase Authentication, a
                real-time public chat system, and customizable user profiles.
                The homepage integrates multiple APIs—including a weather API
                that displays local weather based on the user's location—to
                enhance user engagement.
              </p>
            </div>
            <div className="div2-3">
              <div className="github-cont first " onClick={Project2Github}>
                <GitHubIcon />
                <p className="first">View Source Code</p>
              </div>
              <div className="website-cont first" onClick={Project2Website}>
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
                &bull; Developed a full-stack task management web application
                using ReactJS and TypeScript for the frontend, Node.js and
                TypeScript for the backend, and MongoDB as the database.
                Implemented a secure authentication system to enable user
                logins. The application allows users to create to-do lists,
                assign priority levels, update task statuses, and mark tasks as
                complete. It features a user-friendly interface with real-time
                updates and intuitive task management tools designed to enhance
                productivity.
              </p>
            </div>
            <div className="div2-3">
              <div className="github-cont first " onClick={Project3Github}>
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
              <div className="github-cont first " onClick={Project4Github}>
                <GitHubIcon />
                <p className="first">View Source Code</p>
              </div>
            </div>
          </div>
        </div>
      );
      break;
    case 5:
      slideContent = (
        <div className="slide-cont">
          <div className="div1">
            <div className="shadow-overlay"></div>
            <div className="shadow-overlay"></div>{" "}
            <img
              src={project6}
              alt={`Slide ${index + 1}`}
              className="project-img"
            />
          </div>
          <div className="div2">
            <div className="div2-1">
              <p className="first python">Python</p>
              <p className="api">REST API</p>
              <p className="json">JSON</p>
            </div>
            <div className="div2-2">
              <p>
                &bull; Developed a Python-based API deployed on Render.com to
                generate Excel files via API requests, with integration support
                for platforms like Make (Integromat) to enable automated
                workflows and file delivery.
              </p>
            </div>
            <div className="div2-3">
              <div className="github-cont first " onClick={Project6Github}>
                <GitHubIcon />
                <p className="first">View Source Code</p>
              </div>
            </div>
          </div>
        </div>
      );
      break;
    case 6:
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
              <div className="github-cont first " onClick={Project5Github}>
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
