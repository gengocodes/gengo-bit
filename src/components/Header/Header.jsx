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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  const handleScrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
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

  // Header visibility and fixed position logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set fixed position after first scroll down
      if (currentScrollY > 10) {
        setIsFixed(true);
      }

      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else {
        // Hide header when scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Cleanup effect for body scroll
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div id="progressBarContainer">
        <div id="progressBar" style={{ transform: `scale(${scroll}, 1)` }} />
      </div>
      <header
        className={`${isFixed ? "fixed" : ""} animate__animated ${
          isVisible ? "animate__slideInDown" : "animate__slideOutUp"
        }`}
      >
        <div className="logo">
          <img src={Logo} alt="Gengo-bit Logo" />
        </div>

        {/* Hamburger menu - only visible on mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
        </div>

        {/* Mobile Side Panel */}
        <div className={`side-panel ${isMenuOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={toggleMenu}></button>
          <ul className="side-panel-links">
            <li>
              <a href="#hero" onClick={() => handleScrollTo(homeSectionRef)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => handleScrollTo(aboutSectionRef)}>
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => handleScrollTo(skillsSectionRef)}
              >
                Skills
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
            <li>
              <a
                href="#contact"
                onClick={() => handleScrollTo(contactSectionRef)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            <li>
              <a href="#hero" onClick={() => handleScrollTo(homeSectionRef)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => handleScrollTo(aboutSectionRef)}>
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => handleScrollTo(skillsSectionRef)}
              >
                Skills
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
            <li>
              <a
                href="#contact"
                onClick={() => handleScrollTo(contactSectionRef)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
