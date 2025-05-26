import React, { useState, useEffect, useRef } from "react";
import './Welcome.css';
import paul_pic2 from "../../assets/paul_mob_pic.png";
import paul_pic from "../../assets/paul-huge-pic.png"
import GithubButton from "./GithubButton/GithubButton"
import ResumeButton from "./ResumeButton/ResumeButton";

function Welcome() {
    const [displayedText, setDisplayedText] = useState(""); // Text being displayed
    const [isTyping, setIsTyping] = useState(true); // Whether typing or deleting
    const [currentTextIndex, setCurrentTextIndex] = useState(0); // Index of current text
    const fullTexts = useRef(["HEY", "IT IS", "PAUL"]); // List of texts to alternate
    const typingSpeed = 300; // Speed of typing in ms
    const deletingSpeed = 150; // Speed of deleting in ms
    const pauseTime = 2000; // Pause before switching text

    const [isMobile, setIsMobile] = useState(window.innerWidth >= 768);
  
    useEffect(() => {
      const handleResize = () =>{
        setIsMobile(window.innerWidth >= 768)
      };

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize); // Clean-up
    }, []);

    useEffect(() => {
  
      let timeout;
  
      const typeAndDelete = () => {
        const currentFullText = fullTexts.current[currentTextIndex];
  
        if (isTyping) {
          // Typing effect
          if (displayedText.length < currentFullText.length) {
            setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
            timeout = setTimeout(typeAndDelete, typingSpeed);
          } else {
            setIsTyping(false); // Switch to deleting after typing finishes
            timeout = setTimeout(typeAndDelete, pauseTime);
          }
        } else {
          // Deleting effect
          if (displayedText.length > 0) {
            setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
            timeout = setTimeout(typeAndDelete, deletingSpeed);
          } else {
            setIsTyping(true); // Switch to typing the next text
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % fullTexts.current.length);
            timeout = setTimeout(typeAndDelete, typingSpeed);
          }
        }
      };
  
      timeout = setTimeout(typeAndDelete, typingSpeed);
  
      return () => clearTimeout(timeout); // Cleanup timeout on unmount
    }, [displayedText, isTyping, currentTextIndex]); // Dependencies to trigger effect

  return (
    <div className="main shapedividers_com-8755">
        <div className="container">
          <img  src={isMobile ? paul_pic : paul_pic2} className="paul_pic" alt="paul pic"/> 

          <div className="bg"></div>
          <span className="typing-effect"> {displayedText}</span> 
          <div className="welcome-texts">
              
              <span className="welcome-greetings">HELLO, I'M <span className="welcome-name">PAUL CORSINO</span></span>
              <span className="welcome-desc1">I am a <span className="welcome-job">Full-Stack Developer</span> from the <span className="ph">Philippines</span></span>
              <span className="welcome-catch">I don't just write code or wire circuits — I craft systems that interact with the world and improve it.</span>
                <div className="welcome-buttons">
                  <ResumeButton />
                  <GithubButton />
                </div>
              
          </div>
            
          
        </div>
    </div>
  )
}

export default Welcome;
