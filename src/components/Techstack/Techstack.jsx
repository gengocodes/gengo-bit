import React from "react";
import "./Techstack.css";
import { useVisibilityObserver } from "../useVisibilityObserver";
import html from "./logos/html-5.svg";
import css from "./logos/css-3.svg";
import javascript from "./logos/javascript.svg";
import typescript from "./logos/typescript-icon.svg";
import php from "./logos/php.svg";
import react from "./logos/react.svg";
import tailwind from "./logos/tailwindcss-icon.svg";
import nextjs from "./logos/nextjs-icon.svg";

import nodejs from "./logos/nodejs-icon-alt.svg";
import python from "./logos/python.svg";

import firebase from "./logos/firebase.svg";
import mongodb from "./logos/mongodb-icon.svg";
import mysql from "./logos/mysql.svg";

import java from "./logos/java.svg";
import c from "./logos/c.svg";
import cplusplus from "./logos/c-plusplus.svg";

import figma from "./logos/figma.svg";
import photoshop from "./logos/adobe-photoshop.svg";
import wordpress from "./logos/wordpress-icon-alt.svg";

function Techstack() {
  const [ref1, isVisible1] = useVisibilityObserver();
  const [ref2, isVisible2] = useVisibilityObserver();
  const [ref3, isVisible3] = useVisibilityObserver();
  const [ref4, isVisible4] = useVisibilityObserver();
  const [ref5, isVisible5] = useVisibilityObserver();
  const [ref6, isVisible6] = useVisibilityObserver();

  return (
    <div className="techstack-main shapedividers_com-8355">
      <div className="tech-cont">
        <div className="tech-header"></div>
        <div className="tech-body">
          <div
            ref={ref1}
            className={`tech-stack-title ${
              isVisible1
                ? "animate__animated animate__slideInLeft"
                : "hidden-on-load"
            }`}
          >
            <span className="tech-stack-txt">Web Development</span>
          </div>
          <div
            ref={ref2}
            className={`logos-cont ${
              isVisible2
                ? "animate__animated animate__fadeInBottomRight"
                : "hidden-on-load"
            }`}
          >
            <span className="txt-labels">Frontend</span>
            <div className="tech-logos">
              <a
                href="https://www.w3schools.com/html/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={html} className="tech-logo" alt="" />
              </a>
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={css} className="tech-logo" alt="" />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                <img src={javascript} className="tech-logo" alt="" />
              </a>
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={typescript} className="tech-logo" alt="" />
              </a>

              <a href="https://www.php.net/" target="_blank" rel="noreferrer">
                <img src={php} className="tech-logo" alt="" />
              </a>
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                <img src={react} className="tech-logo" alt="" />
              </a>

              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={tailwind} className="tech-logo" alt="" />
              </a>
              <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                <img src={nextjs} className="tech-logo" alt="" />
              </a>
            </div>
          </div>
          <div
            ref={ref3}
            className={`logos-cont ${
              isVisible3
                ? "animate__animated animate__fadeInBottomRight"
                : "hidden-on-load"
            }`}
          >
            <span className="txt-labels">Backend</span>
            <div className="tech-logos">
              <a href="https://nodejs.org/en" target="_blank" rel="noreferrer">
                <img src={nodejs} className="tech-logo" alt="" />
              </a>
              <a
                href="https://www.python.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={python} className="tech-logo" alt="" />
              </a>
              <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                <img src={nextjs} className="tech-logo" alt="" />
              </a>
            </div>
          </div>
          <div
            ref={ref4}
            className={`tech-stack-title ${
              isVisible4
                ? "animate__animated animate__slideInLeft"
                : "hidden-on-load"
            }`}
          >
            <span className="tech-stack-txt">Database and Storage</span>
          </div>
          <div
            ref={ref5}
            className={`logos-cont ${
              isVisible5
                ? "animate__animated animate__fadeInBottomRight"
                : "hidden-on-load"
            }`}
          >
            {" "}
            <span className="txt-labels">Database & Storage</span>
            <div className="tech-logos">
              {" "}
              <a
                href="https://firebase.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={firebase} className="tech-logo" alt="" />
              </a>
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={mongodb} className="tech-logo" alt="" />
              </a>
              <a
                href="https://www.w3schools.com/sql/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={mysql} className="tech-logo" alt="" />
              </a>
            </div>
          </div>
          <div
            ref={ref4}
            className={`tech-stack-title ${
              isVisible4
                ? "animate__animated animate__slideInLeft"
                : "hidden-on-load"
            }`}
          >
            <span className="tech-stack-txt">Other Technologies</span>
          </div>
          <div
            ref={ref5}
            className={`logos-cont ${
              isVisible5
                ? "animate__animated animate__fadeInBottomRight"
                : "hidden-on-load"
            }`}
          >
            {" "}
            <span className="txt-labels">Languages</span>
            <div className="tech-logos">
              {" "}
              <a
                href="https://www.java.com/en/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={java} className="tech-logo" alt="" />
              </a>
              <a
                href="https://www.w3schools.com/c/c_intro.php"
                target="_blank"
                rel="noreferrer"
              >
                <img src={c} className="tech-logo" alt="" />
              </a>
              <a
                href="https://www.w3schools.com/cpp/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={cplusplus} className="tech-logo" alt="" />
              </a>
              <a
                href="https://www.python.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={python} className="tech-logo" alt="" />
              </a>
            </div>
            <div
              ref={ref6}
              className={`logos-cont ${
                isVisible6
                  ? "animate__animated animate__fadeInBottomRight"
                  : "hidden-on-load"
              }`}
            >
              <span className="txt-labels">UI/UX</span>
              <div className="tech-logos">
                {" "}
                <a
                  href="https://www.figma.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={figma} className="tech-logo" alt="" />
                </a>
                <a
                  href="https://www.adobe.com/products/photoshop/landpa.html?sdid=NC5FRF5H&mv=search&mv2=paidsearch&ef_id=CjwKCAjw6NrBBhB6EiwAvnT_roMvQd3I2RL5CFqpjS_SWdaoQ0frxyFt5tYUFMGVg7YJjoPTbVS31xoCLw4QAvD_BwE:G:s&s_kwcid=AL!3085!3!714745362176!e!!g!!photoshop!1712238394!67643541820&mv=search&gad_source=1&gad_campaignid=1712238394&gbraid=0AAAAAD5r4AwdJ4j-m4UuleTqtvVBJzWcm&gclid=CjwKCAjw6NrBBhB6EiwAvnT_roMvQd3I2RL5CFqpjS_SWdaoQ0frxyFt5tYUFMGVg7YJjoPTbVS31xoCLw4QAvD_BwE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={photoshop} className="tech-logo" alt="" />
                </a>
                <a
                  href="https://wordpress.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={wordpress} className="tech-logo" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Techstack;
