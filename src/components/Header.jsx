import React, { useState, useEffect } from "react";
import '../styles/Header.css';

function Header({
  heroSectionRef,
  aboutSectionRef,
  skillsSectionRef,
  projectsSectionRef,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll event to modify header styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // Background changes when scroll position is more than 0
      } else {
        setIsScrolled(false); // Reset when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="logo">[Logo]</div>
      {/* Only show hamburger menu on mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      {/* Side Panel */}
      <div className={`side-panel ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>&times;</button>
        <ul className="side-panel-links">
          <li><a href="#hero" onClick={() => handleScrollTo(heroSectionRef)}>Home</a></li>
          <li><a href="#about" onClick={() => handleScrollTo(aboutSectionRef)}>About</a></li>
          <li><a href="#skills" onClick={() => handleScrollTo(skillsSectionRef)}>Skills</a></li>
          <li><a href="#projects" onClick={() => handleScrollTo(projectsSectionRef)}>Projects</a></li>
        </ul>
      </div>
      {/* Desktop Navigation (visible on wide screens) */}
      <nav className="desktop-nav">
        <ul>
          <li><a href="#hero" onClick={() => handleScrollTo(heroSectionRef)}>Home</a></li>
          <li><a href="#about" onClick={() => handleScrollTo(aboutSectionRef)}>About</a></li>
          <li><a href="#skills" onClick={() => handleScrollTo(skillsSectionRef)}>Skills</a></li>
          <li><a href="#projects" onClick={() => handleScrollTo(projectsSectionRef)}>Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
