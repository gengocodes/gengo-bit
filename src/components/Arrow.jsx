import React, { useRef, useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import '../styles/Arrow.css';

function Arrow() {

    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 50) {
            setShowArrow(true);
        } else {
            setShowArrow(false);
        }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

  return (
    <div>
        {showArrow && (
          <button
            className="ArrowUp"
            onClick={scrollToTop}
          >
            <FaChevronUp size={15} />
          </button>
        )}
    </div>
  )
}

export default Arrow
