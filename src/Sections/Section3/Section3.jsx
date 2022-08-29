import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import "./Section3Styles.css";
import pic0 from "../../Img/8.jpg";
import pic1 from "../../Img/13.jpg";
import Work from "./Work";
import { addAni3 } from "../../features/sections/sectionsSlice";
const Section3 = () => {
  const { first, second, third, mContai3Ani } = useSelector(
    (state) => state.sections.data.section3
  );
  const {data} = useSelector((state) => state.newspaper)
  const dispatch = useDispatch();

  //Add animation

  window.addEventListener("scroll", () => {
    const section0 = document.querySelector(".section0");
    const section0Height = section0.getBoundingClientRect().height;
    const mainContainer = document.querySelector(".main-container");
    const mainContainerHeight = mainContainer.getBoundingClientRect().height;
    const mainContainer2 = document.querySelector(".main-container-2");
    const mainContainerHeight2 = mainContainer2.getBoundingClientRect().height;
    //  console.log(box2Height);
    // console.log(box1Height);
    //console.log(window.pageYOffset)
    let minus;
    if (window.innerWidth < 768) {
      minus = 2000;
    } else {
      minus = 500;
    }
    
    if (
      window.pageYOffset >
      section0Height + mainContainerHeight + mainContainerHeight2 - minus
    ) {
      dispatch(addAni3());
       //console.log(section0Height + mainContainerHeight + mainContainerHeight2)
       //console.log(data)
    }
  });

  //end

  return (
    <>
      <Container className='main-container-1'>
        <div className='portfolio-grid'>
          <div className='portfolio-grid-intro'>
            <p>{first}</p>
            <h3>{second}</h3>
          </div>
          {mContai3Ani ? (
            <Row className='portfolio-container fadeInUp1'>
              {/* {third.map((work) => {
                return (
                  <Col sm={12} md={4} lg={4} xl={4} className='portfolio-items'>
                    <Work key={work.id} {...work} />
                  </Col>
                );
              })} */}
              {data.map((work)=>{
                return (
                  <Col sm={12} md={4} lg={4} xl={4} className='portfolio-items'>
                    <Work key={work.id} {...work} />
                  </Col>
                )
              })}
            </Row>
          ) : <div className="imagion-box"></div>}
        </div>
      </Container>
    </>
  );
};

export default Section3;
