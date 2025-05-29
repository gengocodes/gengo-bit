import React from "react";
import "./Header.css";

function Header({
  experienceSectionRef,
  skillsSectionRef,
  projectsSectionRef,
  contactSectionRef,
}) {
  const handleScrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="main-header ">
      <a href="#skills" onClick={() => handleScrollTo(skillsSectionRef)}>
        SKILLS
      </a>
      <a href="#projects" onClick={() => handleScrollTo(projectsSectionRef)}>
        PROJECTS
      </a>
      <a
        href="#experience"
        onClick={() => handleScrollTo(experienceSectionRef)}
      >
        EXPERIENCE
      </a>
      <a href="#contact" onClick={() => handleScrollTo(contactSectionRef)}>
        CONTACT
      </a>
    </div>
  );
}

export default Header;
