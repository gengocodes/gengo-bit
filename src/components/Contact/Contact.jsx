import React from "react";
import "./Contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  return (
    <div className="contact ">
      <div className="contact-cont1">
        <FacebookIcon fontSize="large" className="logo" />
        <GitHubIcon fontSize="large" className="logo" />
        <EmailIcon fontSize="large" className="logo" />
        <LinkedInIcon fontSize="large" className="logo" />
        <InstagramIcon fontSize="large" className="logo" />
      </div>
    </div>
  );
}

export default Contact;
