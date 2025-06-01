import React from "react";
import "./Contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Marquee from "react-fast-marquee";

function Contact() {
  const Instagram = () => {
    window.open("https://www.instagram.com/polcorsino/", "_blank");
  };
  const Facebook = () => {
    window.open("https://www.facebook.com/polcowsino/", "_blank");
  };
  const Github = () => {
    window.open("https://github.com/gengocodes", "_blank");
  };
  const Email = () => {
    window.open("mailto:paulcorsino.work@gmail.com", "_blank");
  };
  const LinkedIn = () => {
    window.open("https://www.linkedin.com/in/paulemmanuelcorsino/", "_blank");
  };
  return (
    <div className="contact ">
      <div className="contact-cont1"></div>
      <div className="contact-cont2">
        <FacebookIcon fontSize="large" className="logo" onClick={Facebook} />
        <GitHubIcon fontSize="large" className="logo" onClick={Github} />
        <EmailIcon fontSize="large" className="logo" onClick={Email} />
        <LinkedInIcon fontSize="large" className="logo" onClick={LinkedIn} />
        <InstagramIcon fontSize="large" className="logo" onClick={Instagram} />
      </div>
      <div className="contact-cont3">
        <Marquee className="marquee" speed={30} loop={0}>
          <p className="marqueeP">CONTACT ME</p>
          &#x2022;
          <p className="marqueeP">paulcorsino.work@gmail.com</p>
          &#x2022;
          <p className="marqueeP">CONTACT ME</p>
          &#x2022;
          <p className="marqueeP"> paulcorsino.work@gmail.com</p>
          &#x2022;
          <p className="marqueeP">CONTACT ME</p>
          &#x2022;
          <p className="marqueeP">paulcorsino.work@gmail.com</p>
          &#x2022;
          <p className="marqueeP">CONTACT ME</p>
          &#x2022;
          <p className="marqueeP">paulcorsino.work@gmail.com</p>
          &#x2022;
          <p className="marqueeP">CONTACT ME</p>
          &#x2022;
          <p className="marqueeP">paulcorsino.work@gmail.com</p>
          &#x2022;
          <p className="marqueeP">CONTACT ME</p>
          &#x2022;
          <p className="marqueeP">paulcorsino.work@gmail.com</p>
          &#x2022;
          <p className="marqueeP">CONTACT ME</p>
          &#x2022;
          <p className="marqueeP">paulcorsino.work@gmail.com</p>
          &#x2022;
          <p className="marqueeP">CONTACT ME</p>
          &#x2022;
          <p className="marqueeP">paulcorsino.work@gmail.com</p>
          &#x2022;
          <p className="marqueeP">CONTACT ME</p>
          &#x2022;
          <p className="marqueeP">paulcorsino.work@gmail.com</p>
          &#x2022;
        </Marquee>
      </div>
    </div>
  );
}

export default Contact;
