import React from "react";
import "./Slideshow.css";
import image1_0 from "./images/image 1.0.png";
import image1_1 from "./images/image 1.1.png";
import image1_2 from "./images/image 1.2.png";
import image1_3 from "./images/image 1.3.png";
import image1_4 from "./images/image 1.4.png";
import image1_5 from "./images/image 1.5.png";
import image1_6 from "./images/image 1.6.png";
import image1_7 from "./images/image 1.7.png";
import image1_8 from "./images/image 1.8.png";

function Slideshow() {
  return (
    <div className="ss-slideshow">
      <div className="ss-slider">
        <div className="ss-slide-track">
          {/* 9 ss-slides */}
          <div className="ss-slide">
            <img src={image1_0} alt="img1" />
          </div>
          <div className="ss-slide">
            <img src={image1_1} alt="img2" />
            <div className="ss-slide">
              <img src={image1_2} alt="img3" />
            </div>
          </div>
          <div className="ss-slide">
            <img src={image1_3} alt="img4" />
          </div>
          <div className="ss-slide">
            <img src={image1_4} alt="img5" />
          </div>
          <div className="ss-slide">
            <img src={image1_5} alt="img6" />
          </div>
          <div className="ss-slide">
            <img src={image1_6} alt="img7" />
          </div>
          <div className="ss-slide">
            <img src={image1_7} alt="img8" />
          </div>
          <div className="ss-slide">
            <img src={image1_8} alt="img9" />
          </div>
          {/* REPEAT-9 ss-slides */}
          <div className="ss-slide">
            <img src={image1_0} alt="img1" />
          </div>
          <div className="ss-slide">
            <img src={image1_1} alt="img2" />
            <div className="ss-slide">
              <img src={image1_2} alt="img3" />
            </div>
          </div>
          <div className="ss-slide">
            <img src={image1_3} alt="img4" />
          </div>
          <div className="ss-slide">
            <img src={image1_4} alt="img5" />
          </div>
          <div className="ss-slide">
            <img src={image1_5} alt="img6" />
          </div>
          <div className="ss-slide">
            <img src={image1_6} alt="img7" />
          </div>
          <div className="ss-slide">
            <img src={image1_7} alt="img8" />
          </div>
          <div className="ss-slide">
            <img src={image1_8} alt="img9" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Slideshow;
