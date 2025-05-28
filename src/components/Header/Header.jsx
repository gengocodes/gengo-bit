import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/Logo.png";

function Header({
  homeSectionRef,
  aboutSectionRef,
  skillsSectionRef,
  projectsSectionRef,
  contactSectionRef,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });

  return (
    <header className="animate__animated animate__slideInUp">
      <div id="progressBarContainer">
        <div
          id="progressBar"
          style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }}
        />
      </div>
      <div className="logo">
        <img src={Logo} alt="Gengo-bit Logo" /> {/* Display the Logo image */}
      </div>
      {/* Only show hamburger menu on mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      {/* Side Panel */}
      <div className={`side-panel ${isMenuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>
          &times;
        </button>
        <ul className="side-panel-links">
          <li>
            <a href="#hero" onClick={() => handleScrollTo(homeSectionRef)}>
              Home
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => handleScrollTo(skillsSectionRef)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => handleScrollTo(skillsSectionRef)}>
              Contact
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => handleScrollTo(aboutSectionRef)}>
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={() => handleScrollTo(projectsSectionRef)}
            >
              Projects
            </a>
          </li>
        </ul>
      </div>
      {/* Desktop Navigation (visible on wide screens) */}
      <nav className="desktop-nav">
        <ul>
          <li>
            <a href="#hero" onClick={() => handleScrollTo(homeSectionRef)}>
              Home
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => handleScrollTo(skillsSectionRef)}>
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handleScrollTo(contactSectionRef)}
            >
              Contact
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => handleScrollTo(aboutSectionRef)}>
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={() => handleScrollTo(projectsSectionRef)}
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
