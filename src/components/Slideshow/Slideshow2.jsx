import React from "react";
import "./Slideshow.css";
import image2_0 from "./images/image 2.0.png";
import image2_1 from "./images/image 2.1.png";
import image2_2 from "./images/image 2.2.png";
import image2_3 from "./images/image 2.3.png";
import image2_4 from "./images/image 2.4.png";
import image2_5 from "./images/image 2.5.png";
import image2_6 from "./images/image 2.6.png";
import image2_7 from "./images/image 2.7.png";
import image2_8 from "./images/image 2.8.png";

function Slideshow2() {
  return (
    <div className="ss-slideshow2">
      <div className="ss-slider">
        <div className="ss-slide-track2">
          {/* 9 ss-slides */}
          <div className="ss-slide">
            <img src={image2_0} alt="img1" />
          </div>
          <div className="ss-slide">
            <img src={image2_1} alt="img2" />
            <div className="ss-slide">
              <img src={image2_2} alt="img3" />
            </div>
          </div>
          <div className="ss-slide">
            <img src={image2_3} alt="img4" />
          </div>
          <div className="ss-slide">
            <img src={image2_4} alt="img5" />
          </div>
          <div className="ss-slide">
            <img src={image2_5} alt="img6" />
          </div>
          <div className="ss-slide">
            <img src={image2_6} alt="img7" />
          </div>
          <div className="ss-slide">
            <img src={image2_7} alt="img8" />
          </div>
          <div className="ss-slide">
            <img src={image2_8} alt="img9" />
          </div>
          {/* REPEAT-9 ss-slides */}
          <div className="ss-slide">
            <img src={image2_0} alt="img1" />
          </div>
          <div className="ss-slide">
            <img src={image2_1} alt="img2" />
            <div className="ss-slide">
              <img src={image2_2} alt="img3" />
            </div>
          </div>
          <div className="ss-slide">
            <img src={image2_3} alt="img4" />
          </div>
          <div className="ss-slide">
            <img src={image2_4} alt="img5" />
          </div>
          <div className="ss-slide">
            <img src={image2_5} alt="img6" />
          </div>
          <div className="ss-slide">
            <img src={image2_6} alt="img7" />
          </div>
          <div className="ss-slide">
            <img src={image2_7} alt="img8" />
          </div>
          <div className="ss-slide">
            <img src={image2_8} alt="img9" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Slideshow2;
