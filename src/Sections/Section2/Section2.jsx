import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import "./Section2Styles.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Service from "./Service";
import { addAni2 } from "../../features/sections/sectionsSlice";
import { displaySer } from "../../features/sections/servicesSlice";

const Section2 = () => {
  const { first, second, third, mContai2Ani } = useSelector(
    (state) => state.sections.data.section2
  );
  const dispatch = useDispatch();
  // const [mContai2Ani, setMContai2Ani] = useState(false);

  //Add animation delay
  const serviceItems = document.querySelectorAll(".service-items");
  let delayAnimation = 0;
  serviceItems.forEach((item) => {
    // console.log(delayAnimation++ / 10);
    item.style.animationDelay = `${delayAnimation++ / 3.8}s`;
  });
  //end
  //Add animation

  window.addEventListener("scroll", () => {
    const section0 = document.querySelector(".section0");
    const section0Height = section0.getBoundingClientRect().height;
    const box1 = document.querySelector(".box-1");
    const box1Height = box1.getBoundingClientRect().height;
    const box2 = document.querySelector(".box-2");
    const box2Height = box2.getBoundingClientRect().height;
    //console.log(window.pageYOffset);
    if (window.pageYOffset > section0Height + box1Height + box2Height - 600) {
      dispatch(addAni2());
      //console.log(section0Height + box1Height + box2Height);
    }
  });

  //end
  return (
    <>
      <Container className='main-container-2'>
        {mContai2Ani ? (
          <div className='services-grid'>
            <div className='services-grid-intro'>
              <p>what we do</p>
              <h3>our services</h3>
            </div>
            <Row className='services-container'>
              {third.map((ser, idx) => {
                return (
                  <Col
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}
                    className='service-items fadeInUp1'
                  >
                    <Link
                      to='/services'
                      onClick={() => dispatch(displaySer(ser.id))}
                    >
                      <Service
                        key={ser.id}
                        id={idx}
                        jobName={ser.jobName}
                        description={ser.description}
                      />
                      <div className='hover-background'></div>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </div>
        ) : (
          <div className='imagion-box'></div>
        )}
      </Container>
    </>
  );
};

export default Section2;
