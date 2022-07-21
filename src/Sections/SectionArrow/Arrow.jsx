import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./ArrowStyles.css";
import pic0 from "../../Img/15.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Arrow = () => {
  // const [pageYStart, setPageYStart] = useState(0);
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
  //function up&down
  //main site
  const container0 = document.querySelector(".main-container");
  const container2 = document.querySelector(".main-container-2");
  const container1 = document.querySelector(".main-container-1");
  const highlightContainer = document.querySelector(".highlight-container");
  //news site
  const headlineBox = document.querySelector(".headline-box");
  const newsPart0 = document.querySelector(".news-part-0");
  const newsPart1 = document.querySelector(".news-part-1");

  const handleUp = () => {
    let x;
    if (location.pathname === "/") {
      if (window.pageYOffset > 2115 && window.pageYOffset < 3190) {
        x = container0.getBoundingClientRect().y;
      } else if (window.pageYOffset > 3190 && window.pageYOffset < 4710) {
        x = container2.getBoundingClientRect().y;
      } else if (window.pageYOffset > 4710) {
        x = container1.getBoundingClientRect().y;
      }
    } else if (location.pathname === "/news") {
      const headlineBox = document.querySelector(".headline-box");
      const newsPart0 = document.querySelector(".news-part-0");
      const newsPart1 = document.querySelector(".news-part-1");
      if (window.pageYOffset > 1685 && window.pageYOffset < 2950) {
        x = headlineBox.getBoundingClientRect().y;
      } else if (window.pageYOffset > 2950) {
        x = newsPart0.getBoundingClientRect().y;
      }
    }

    window.scrollTo({
      top: window.pageYOffset + x,
      left: 0,
      behavior: "smooth",
    });
    console.log(window.pageYOffset);

    // console.log(window.pageYOffset + x);
  };

  const handleDown = () => {
    let x;
    if (location.pathname === "/") {
      if (window.pageYOffset < 1400) {
        x = container2.getBoundingClientRect().y;
      } else if (window.pageYOffset > 1400 && window.pageYOffset < 2560) {
        x = container1.getBoundingClientRect().y;
      } else if (window.pageYOffset > 2560 && window.pageYOffset < 4090) {
        x = highlightContainer.getBoundingClientRect().y;
      }
    } else if (location.pathname === "/news") {
      const headlineBox = document.querySelector(".headline-box");
      const newsPart0 = document.querySelector(".news-part-0");
      const newsPart1 = document.querySelector(".news-part-1");
      if (window.pageYOffset < 840) {
        x = newsPart0.getBoundingClientRect().y;
      } else if (window.pageYOffset > 840 && window.pageYOffset < 2182) {
        x = newsPart1.getBoundingClientRect().y;
      }
    }
    window.scrollTo({
      top: window.pageYOffset + x,
      left: 0,
      behavior: "smooth",
    });
    // console.log(window.pageYOffset)
    // console.log(container2.getBoundingClientRect().y)
    //  console.log(window.pageYOffset + x)
  };
  //main site end
  //news site
  // const handleUp1 = () => {
  //   let x;
  //   if (window.pageYOffset > 1685 && window.pageYOffset < 2950) {
  //     x = headlineBox.getBoundingClientRect().y;
  //   } else if (window.pageYOffset > 2950) {
  //     x = newsPart0.getBoundingClientRect().y;
  //   }
  //   window.scrollTo({
  //     top: window.pageYOffset + x,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  //   console.log(location.pathname);
  // };

  // const handleDown1 = () => {
  //   let x;
  //   if (window.pageYOffset < 840) {
  //     x = newsPart0.getBoundingClientRect().y;
  //   } else if (window.pageYOffset > 840 && window.pageYOffset < 2182) {
  //     x = newsPart1.getBoundingClientRect().y;
  //   }

  //   window.scrollTo({
  //     top: window.pageYOffset + x,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  //   console.log(window.pageYOffset);
  //   // console.log(container2.getBoundingClientRect().y)
  //   //  console.log(window.pageYOffset + x)
  // };
  //news site end
  //end

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
          <button
            onClick={() => {
              handleUp();
            }}
            className={leftArrowClass}
          >
            <img src={pic0} alt='' className='arrow-up' />
          </button>
        )}
      </div>
      <div className='arrow-right-box'>
        {arrow === true && (
          <button
            onClick={() => {
              handleDown();
            }}
            className={rightArrowClass}
          >
            <img src={pic0} alt='' className='arrow-down' />
          </button>
        )}
      </div>
    </>
  );
};

export default Arrow;
