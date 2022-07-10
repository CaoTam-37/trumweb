import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import "./Section2Styles.css";
import { useState } from "react";
const Section2 = () => {
  const [mContai2Ani, setMContai2Ani] = useState(false);

  //Add animation delay
  const serviceItems = document.querySelectorAll(".service-items");
  let delayAnimation = 0;
  serviceItems.forEach((item) => {
    // console.log(delayAnimation++ / 10);
    item.style.animationDelay = `${delayAnimation++ / 3.8}s`;
  });
  //end
  //Add animation
  let serviceItemsClass = "service-items";
  window.addEventListener("scroll", () => {
    const section0 = document.querySelector(".section0");
    const section0Height = section0.getBoundingClientRect().height;
    const box1 = document.querySelector(".box-1");
    const box1Height = box1.getBoundingClientRect().height;
    const box2 = document.querySelector(".box-2");
    const box2Height = box2.getBoundingClientRect().height;
    //  console.log(box2Height);
    // console.log(box1Height);
    if (window.pageYOffset > (section0Height + box1Height + box2Height -500)) {
      setMContai2Ani(true)
    }
  });
  if(mContai2Ani === true){
    serviceItemsClass = "service-items fadeInUp1"
  }
  //end
  return (
    <>
      <Container className='main-container-2'>
        <div className='services-grid'>
          <div className='services-grid-intro'>
            <p>what we do</p>
            <h3>our services</h3>
          </div>
          <Row className='services-container'>
            <Col sm={12} md={4} lg={4} xl={4} className={serviceItemsClass}>
              <Link to='/services'>
                <div className='service-item'>
                  <div className='service-item-icon'>
                    <FontAwesomeIcon className='item-icon' icon={faCalendar} />
                  </div>
                  <div className='services-words'>
                    <p>Digital Marketing</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam qui hic blanditiis magni optio pariatur inventore
                      neque. Ea, minima quas!
                    </p>
                    <p>01</p>
                  </div>
                </div>
                <div className='hover-background'></div>
              </Link>
            </Col>

            <Col sm={12} md={4} lg={4} xl={4} className={serviceItemsClass}>
              <Link to='/services'>
                <div className='service-item'>
                  <div className='service-item-icon'>
                    <FontAwesomeIcon className='item-icon' icon={faCalendar} />
                  </div>
                  <div className='services-words'>
                    <p>Influencers Booking</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam qui hic blanditiis magni optio pariatur inventore
                      neque. Ea, minima quas!
                    </p>
                    <p>02</p>
                  </div>
                </div>
                <div className='hover-background'></div>
              </Link>
            </Col>

            <Col sm={12} md={4} lg={4} xl={4} className={serviceItemsClass}>
              <Link to='/services'>
                <div className='service-item'>
                  <div className='service-item-icon'>
                    <FontAwesomeIcon className='item-icon' icon={faCalendar} />
                  </div>
                  <div className='services-words'>
                    <p>Live Event Activation</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam qui hic blanditiis magni optio pariatur inventore
                      neque. Ea, minima quas!
                    </p>
                    <p>03</p>
                  </div>
                </div>
                <div className='hover-background'></div>
              </Link>
            </Col>

            <Col sm={12} md={4} lg={4} xl={4} className={serviceItemsClass}>
              <Link to='/services'>
                <div className='service-item'>
                  <div className='service-item-icon'>
                    <FontAwesomeIcon className='item-icon' icon={faCalendar} />
                  </div>
                  <div className='services-words'>
                    <p>Video Production</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam qui hic blanditiis magni optio pariatur inventore
                      neque. Ea, minima quas!
                    </p>
                    <p>04</p>
                  </div>
                </div>
                <div className='hover-background'></div>
              </Link>
            </Col>

            <Col sm={12} md={4} lg={4} xl={4} className={serviceItemsClass}>
              <Link to='/services'>
                <div className='service-item'>
                  <div className='service-item-icon'>
                    <FontAwesomeIcon className='item-icon' icon={faCalendar} />
                  </div>
                  <div className='services-words'>
                    <p>Creative IMC. IMC</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam qui hic blanditiis magni optio pariatur inventore
                      neque. Ea, minima quas!
                    </p>
                    <p>05</p>
                  </div>
                </div>
                <div className='hover-background'></div>
              </Link>
            </Col>

            <Col sm={12} md={4} lg={4} xl={4} className={serviceItemsClass}>
              <Link to='/services'>
                <div className='service-item'>
                  <div className='service-item-icon'>
                    <FontAwesomeIcon className='item-icon' icon={faCalendar} />
                  </div>
                  <div className='services-words'>
                    <p>Artist managament</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam qui hic blanditiis magni optio pariatur inventore
                      neque. Ea, minima quas!
                    </p>
                    <p>06</p>
                  </div>
                </div>
                <div className='hover-background'></div>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Section2;
