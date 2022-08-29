import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import pic0 from "../../Img/14c.jpg";
import pic1 from "../../Img/3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "./Section4Styles.css";
import { useSelector, useDispatch } from "react-redux";
import News from "./News";
import { addAni4 } from "../../features/sections/sectionsSlice";

const Section4 = () => {
  const { mContai4Ani, first, second, third } = useSelector(
    (state) => state.sections.data.section4
  );
  const dispatch = useDispatch();

  //Add animation

  window.addEventListener("scroll", () => {
    const section0 = document.querySelector(".section0");
    const section0Height = section0.getBoundingClientRect().height;
    const mainContainer = document.querySelector(".main-container");
    const mainContainerHeight = mainContainer.getBoundingClientRect().height;
    const mainContainer1 = document.querySelector(".main-container-1");
    const mainContainerHeight1 = mainContainer1.getBoundingClientRect().height;
    const mainContainer2 = document.querySelector(".main-container-2");
    const mainContainerHeight2 = mainContainer2.getBoundingClientRect().height;
    //console.log(window.pageYOffset)
    if (
      window.pageYOffset >
      section0Height +
        mainContainerHeight +
        mainContainerHeight1 +
        mainContainerHeight2
    ) {
      dispatch(addAni4());
   console.log("test")
    }
  });
  //end
  return (
    <>
      <Container className='highlight-container'>
        <div className='highlight-grid'>
          <div className=' highlight-intro'>
            <p>{first}</p>
            <h3>{second}</h3>
          </div>
          {mContai4Ani && (
            <Row className='highlight-boxes'>
              {third.map((news) => {
                return <News key={news.id} {...news} />;
              })}
            </Row>
          )}
        </div>
      </Container>
    </>
  );
};

export default Section4;
