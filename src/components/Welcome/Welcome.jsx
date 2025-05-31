import React, { useState, useEffect, useMemo, useRef } from "react";
import "./Welcome.css";
import paul_pic2 from "../../assets/paul_mob_pic.png";
import paul_pic from "../../assets/paul-huge-pic.png";

import Cursor from "./Cursor/Cursor";
import Header from "../Header/Header";

function Welcome() {
  const experienceSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const [displayedText, setDisplayedText] = useState(""); // Text being displayed
  const [isTyping, setIsTyping] = useState(true); // Whether typing or deleting
  const [currentTextIndex, setCurrentTextIndex] = useState(0); // Index of current text
  const typingSpeed = 300; // Speed of typing in ms
  const deletingSpeed = 150; // Speed of deleting in ms
  const pauseTime = 2000; // Pause before switching text

  const [isMobile, setIsMobile] = useState(window.innerWidth >= 768);
  const fullTexts = useMemo(() => {
    return isMobile
      ? ["HEY", "OLA", "やあ", "ハイ", "SUP", "你好", "안녕", "नम"]
      : ["HI", "YO", "哈", "OI", "い", "お"];
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Clean-up
  }, []);

  useEffect(() => {
    let timeout;

    const typeAndDelete = () => {
      const currentFullText = fullTexts[currentTextIndex];

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
          setCurrentTextIndex(
            (prevIndex) => (prevIndex + 1) % fullTexts.length
          );
          timeout = setTimeout(typeAndDelete, typingSpeed);
        }
      }
    };

    timeout = setTimeout(typeAndDelete, typingSpeed);

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [displayedText, isTyping, currentTextIndex, fullTexts]); // Dependencies to trigger effect

  return (
    <div className="main">
      <div className="container animate__animated animate__slideInUp ">
        <Header
          experienceSectionRef={experienceSectionRef}
          skillsSectionRef={skillsSectionRef}
          projectsSectionRef={projectsSectionRef}
          contactSectionRef={contactSectionRef}
        />
        <Cursor />
        <img
          src={isMobile ? paul_pic : paul_pic2}
          className="paul_pic"
          alt="paul pic"
        />
        <div className="bg"></div>
        <span className="typing-effect"> {displayedText}</span>
        <div className="cont1"></div>
        <div className="cont2">
          <div className="cont2-1"></div>
          <div className="cont2-2">
            <div className="txt-cont1">
              {" "}
              <span className="welcome-greetings">
                Hey, I'm <span className="welcome-name">Paul</span>.
              </span>
            </div>
            <div className="txt-cont2">
              <span className="welcome-desc1">
                I am a <span className="welcome-job">Full-Stack Developer</span>
                <br />
                from the <span className="ph">Philippines</span>
                <br />
              </span>
              <span className="welcome-catch">
                I don't just write code or wire circuits — I craft systems that
                interact with the world and improve it.
              </span>
            </div>
            <div className="txt-cont3"> </div>
          </div>
          <div className="cont2-3"></div>{" "}
        </div>
        <div className="cont3"></div>
      </div>
    </div>
  );
}

export default Welcome;
