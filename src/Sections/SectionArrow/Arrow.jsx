import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./ArrowStyles.css";
import pic0 from "../../Img/15.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
const Arrow = () => {
  const [pageYStart, setPageYStart] = useState(0);
  const [arrowAni, setArrowAni] = useState(false);
  //  add animation
  const location = useLocation();
  let leftArrowClass = "btn-up";
  let rightArrowClass = "btn-down";

  if (location.pathname === "/") {
    window.addEventListener("scroll", () => {
      const section0 = document.querySelector(".section0");
      const section0Height = section0.getBoundingClientRect().height;
      const box1 = document.querySelector(".box-1");
      const box1Height = box1.getBoundingClientRect().height;
      // console.log(box1);
      //  console.log(box1Height);
      if (window.pageYOffset > section0Height / 1.2) {
        setArrowAni(true);
        // console.log(arrowAni);
      } else {
        setArrowAni(false);
      }
    });
    if (arrowAni === true) {
      leftArrowClass = "btn-up slideInUp";
      rightArrowClass = "btn-down slideInDown1";
    }
  } else if (location.pathname !== "/") {
    leftArrowClass = "btn-up slideInUp";
    rightArrowClass = "btn-down slideInDown1";
  }
  // end
  const handleUp = () => {
    setPageYStart(window.pageYOffset);
    window.scrollTo({
      top: window.pageYOffset - 500,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleDown = () => {
    window.scrollTo({
      top: window.pageYOffset + 500,
      left: 0,
      behavior: "smooth",
    });
  };

  const [arrow, setArrow] = useState(true);
  const showArrow = () => {
    if (window.innerWidth < 1440) {
      setArrow(false);
      console.log(arrow);
    } else {
      setArrow(true);
    }
  };
  useEffect(() => {
    showArrow();
  });
  
  return (
    <>
      <div class='arrow-left-box'>
        {arrow === true && (
          <button onClick={() => handleUp()} className={leftArrowClass}>
            <img src={pic0} alt='' className='arrow-up' />
          </button>
        )}
      </div>
      <div className='arrow-right-box'>
        {arrow === true && (
          <button onClick={() => handleDown()} className={rightArrowClass}>
            <img src={pic0} alt='' className='arrow-down' />
          </button>
        )}
      </div>
    </>
  );
};

export default Arrow;
