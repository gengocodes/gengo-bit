import React, { useEffect } from 'react';
import "./Projects.css";
import project1 from "../../assets/projects/project1.jpg"
import project2 from "../../assets/projects/project2.jpg"
import project3 from "../../assets/projects/project3.jpg"
import project4 from "../../assets/projects/project4.jpg"
import project5 from "../../assets/projects/project5.png"


const Projects = () => {

    useEffect(() => {
        const nextDom = document.getElementById("next");
        const prevDom = document.getElementById("prev");
    
        if (!nextDom || !prevDom) {
          console.error("Buttons not found in the DOM");
          return;
        }
    
        const carouselDom = document.querySelector(".carousel");
        const sliderDom = carouselDom.querySelector(".carousel .list");
        const thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
        const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
    
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        let timeRunning = 3000;
        let timeAutoNext = 7000;
    
        const showSlider = (type) => {
          const sliderItemsDom = sliderDom.querySelectorAll(".carousel .list .item");
          const thumbnailItemsDom = document.querySelectorAll(
            ".carousel .thumbnail .item"
          );
    
          if (type === "next") {
            sliderDom.appendChild(sliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add("next");
          } else {
            sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom.classList.add("prev");
          }
    
          clearTimeout(runTimeOut);
          runTimeOut = setTimeout(() => {
            carouselDom.classList.remove("next");
            carouselDom.classList.remove("prev");
          }, timeRunning);
    
          clearTimeout(runNextAuto);
          runNextAuto = setTimeout(() => {
            nextDom.click();
          }, timeAutoNext);
        };
    
        nextDom.onclick = () => showSlider("next");
        prevDom.onclick = () => showSlider("prev");
    
        let runTimeOut;
        let runNextAuto = setTimeout(() => {
          nextDom.click();
        }, timeAutoNext);
    
        return () => {
          // Cleanup event listeners
          nextDom.onclick = null;
          prevDom.onclick = null;
          clearTimeout(runTimeOut);
          clearTimeout(runNextAuto);
        };
      }, []); // Run only once after the component mounts

      const Github1 = () => {
        window.open('https://github.com/Gengo-bit/Septic-Tank-Monitoring-System', '_blank');
      };
      const Github2 = () => {
        window.open('https://github.com/Gengo-bit/IR-Proximity-Sensor-Based-Inventory-Stock-Tracker-Using-PIC-Family-Microcontroller', '_blank');
      };
      const Github3 = () => {
        window.open('https://github.com/Gengo-bit/Image-Classification-of-Fish-Species-Using-the-CIFAR-100-Dataset', '_blank');
      };
      const Github4 = () => {
        window.open('https://github.com/Gengo-bit/Responsive-Web-Design-Projects', '_blank');
      };
      const Github5 = () => {
        window.open('https://github.com/Gengo-bit/Traffic-Flow-Simulation-using-the-Jacobi-Method', '_blank');
      };
      const SeeMore1 = () => {
        window.open('https://septictankmonitoringsystem.netlify.app/', '_blank');
      };

  return (
<div className="carousel">
        <div className="list">
            <div className="item">
                <img src={project1} alt=""/>
                <div className="content">
                    <div className="author">GENGO-BIT</div>
                    <div className="title">PROJECT 1</div>
                    <div className="topic neongreen">SEPTIC TANK MONITORING SYSTEM</div>
                    <div className="des">
                    This undergraduate thesis project develops a smart IoT-based septic tank monitoring 
                    system using ultrasonic sensors, Arduino, ESP32, LoRa, SIM800L GSM, 
                    Firebase, and a web app for real-time monitoring, predictive analytics, 
                    SMS alerts, and dynamic visualization.
                    </div>
                    <div className="buttons">
                        <button onClick={Github1}>GITHUB</button>
                        <button onClick={SeeMore1} className="secondButton">SEE MORE</button>
                    </div> 
                </div>
            </div>
            <div className="item">
            <img src={project2} alt=""/>
                <div className="content">
                    <div className="author">GENGO-BIT</div>
                    <div className="title">PROJECT 2</div>
                    <div className="topic longtopic kobicha">IR PROXIMITY SENSOR-BASED INVENTORY STOCK TRACKER</div>
                    <div className="des">

                    This Embedded Systems project is an inventory tracking system using a PIC16F877A microcontroller, 
                    IR sensors, a 3x4 keypad, and a 16x2 LCD for efficient, real-time stock management in small businesses.
                    </div>
                    <div className="buttons">
                        <button onClick={Github2}>GITHUB</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={project3} alt=""/>
                <div className="content">
                    <div className="author">GENGO-BIT</div>
                    <div className="title">PROJECT 3</div>
                    <div className="topic longtopic neonlightblue">IMAGE CLASSIFICATION OF FISH SPECIES USING THE CIFAR-100 DATASET</div>
                    <div className="des">
                    This CPE 3205 project classifies fish species from the CIFAR-100 dataset using transfer learning with 
                    the VGG16 model, achieving 68%-76% accuracy. It involves image preprocessing with OpenCV and result 
                    visualization with Matplotlib.
                    </div>
                    <div className="buttons">
                        <button onClick={Github3}>GITHUB</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={project4} alt=""/>
                <div className="content">
                    <div className="author">GENGO-BIT</div>
                    <div className="title">PROJECT 4</div>
                    <div className="topic neonlightblue">RESPONSIVE WEB DESIGN PROJECTS</div>
                    <div className="des">
                    A collection of projects created as part of the Responsive 
                    Web Design Certification from freeCodeCamp. These projects 
                    demonstrate fundamental web design skills, including HTML5, 
                    CSS, and accessibility best practices, with a focus on 
                    crafting responsive and user-friendly web pages.
                    </div>
                    <div className="buttons">
                        <button onClick={Github4}>GITHUB</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={project5} alt=""/>
                <div className="content">
                    <div className="author">GENGO-BIT</div>
                    <div className="title">PROJECT5</div>
                    <div className="topic longtopic">TRAFFIC FLOW SIMULATION USING THE JACOBI METHOD</div>
                    <div className="des">
                        A Java Swing application for modeling and simulating traffic flow through 
                        a network of junctions. This project employs the Jacobi Method to iteratively 
                        solve traffic flow equations, providing a user-friendly interface for educational 
                        and analytical purposes.
                    </div>
                    <div className="buttons">
                        <button onClick={Github5}>GITHUB</button>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="thumbnail">
            <div className="item">
                <img src={project1} alt=""/>
                <div className="content">
                    <div className="title">
                        Project 1
                    </div>
                    <div className="description">
                        Septic Tank Monitoring System
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={project2} alt=""/>
                <div className="content">
                    <div className="title">
                        Project 2
                    </div>
                    <div className="description">
                    IR Proximity Sensor-Based Inventory Stock Tracker
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={project3} alt=""/>
                <div className="content">
                    <div className="title">
                        Project 3
                    </div>
                    <div className="description">
                        Image Classification of Fish Species Using the CIFAR-100 Dataset
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={project4} alt=""/>
                <div className="content">
                    <div className="title">
                        Project 4
                    </div>
                    <div className="description">
                        Responsive Web Design Projects
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={project5} alt=""/>
                <div className="content">
                    <div className="title">
                        Project 5
                    </div>
                    <div className="description">
                        Traffic Flow Simulation using the Jacobi Method
                    </div>
                </div>
            </div>
        </div>

        <div className="arrows">
            <button id="prev">&lt;</button>
            <button id="next">&gt;</button>
        </div>
        <div className="time"></div>
</div>
  )
}

export default Projects;