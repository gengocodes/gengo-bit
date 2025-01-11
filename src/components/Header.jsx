import React, { useState, useEffect } from "react";
import '../styles/Header.css'; // Ensure you import the styles

function Header({
  heroSectionRef,
  aboutSectionRef,
  skillsSectionRef,
  projectsSectionRef,
}) {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <nav>
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