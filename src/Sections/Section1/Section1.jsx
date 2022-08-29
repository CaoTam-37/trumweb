import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import pic0 from "../../Img/13.jpg";
import pic1 from "../../Img/14c.jpg";
import "./Section1Styles.css";
import { useDispatch, useSelector } from "react-redux";
import { addAni, addAni1 } from "../../features/sections/sectionsSlice";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
// import { useInsertionEffect } from "react";

let isDown = false;
let startX = 0;
let walk = 0;
let check0 = 0;
let check1 = 0;
let count = 0;
let widthOfCart;

const Section1 = () => {
  const { box1Ani,box2Ani, first, second,third,forth, img } = useSelector((state) => state.sections.data.section1);
  const dispatch = useDispatch();
  const isMounted = useRef(false);
  //Add slider function
  //MouseEvent

  const containerSlider = document.querySelector(".team-info");
  const slider = document.querySelector(".team-info-slider");
  let x;
  const checkClientWidth = () => {
    if (window.innerWidth < 768 || window.innerWidth >= 1440) {
      widthOfCart = 380;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      widthOfCart = 360;
    } else if (window.innerWidth >= 1024 && window.innerWidth < 1440) {
      widthOfCart = 320;
    }
  };
  const mouseDown = (e) => {
    checkClientWidth();
    const containerSlider = document.querySelector(".team-info");
    const slider = document.querySelector(".team-info-slider");
    containerSlider.style.cursor = "grabbing";
    isDown = true;
    startX = e.clientX - slider.offsetLeft;
    check0 = e.clientX;
  };
  const mouseLeave = (e) => {
    isDown = false;
  };
  const mouseUp = (e) => {
    const containerSlider = document.querySelector(".team-info");
    const slider = document.querySelector(".team-info-slider");
    containerSlider.style.cursor = "grab";
    isDown = false;
    if (walk < -50 && check1 < -250) {
      count = count - 2;
    } else if (walk < -50 && check1 < -80) {
      count = count - 1;
    }
    if (check1 > 550) {
      count = count + 2;
    } else if (check1 > 50) {
      count = count + 1;
    }

    if (window.innerWidth < 768) {
      if (count > 0) {
        count = 0;
      } else if (count < -5) {
        count = -5;
      }
    } else if (768 <= window.innerWidth && window.innerWidth < 1024) {
      if (count > 0) {
        count = 0;
      } else if (count < -4) {
        count = -4;
      }
    } else if (window.innerWidth >= 1024) {
      if (count > 0) {
        count = 0;
      } else if (count < -3) {
        count = -3;
      }
    }
    slider.style.left = `${count * widthOfCart}px`;
    slider.style.transition = "all 0.5s ease-in-out";
  };
  const mouseMove = (e) => {
    const slider = document.querySelector(".team-info-slider");
    if (!isDown) return;
    e.preventDefault();
    x = e.clientX;

    walk = x - startX;

    slider.style.transition = "";
    if (walk < 0 && walk > -1240) {
      slider.style.left = `${x - startX}px`;
    }

    check1 = x - check0;
  };
  //touchEvent
  const touchStart = (e) => {
    const slider = document.querySelector(".team-info-slider");
    checkClientWidth();
    isDown = true;
    startX = e.touches[0].clientX - slider.offsetLeft;
    check0 = e.touches[0].clientX;
  };
  const touchEnd = () => {
    const slider = document.querySelector(".team-info-slider");
    isDown = false;
    if (walk < -50 && check1 < -250) {
      count = count - 2;
    } else if (walk < -50 && check1 < -80) {
      count = count - 1;
    }
    if (check1 > 550) {
      count = count + 2;
    } else if (check1 > 50) {
      count = count + 1;
    }
    if (window.innerWidth < 768) {
      if (count > 0) {
        count = 0;
      } else if (count < -5) {
        count = -5;
      }
    } else if (768 <= window.innerWidth && window.innerWidth < 1024) {
      if (count > 0) {
        count = 0;
      } else if (count < -4) {
        count = -4;
      }
    } else if (window.innerWidth >= 1024) {
      if (count > 0) {
        count = 0;
      } else if (count < -3) {
        count = -3;
      }
    }

    slider.style.left = `${count * widthOfCart}px`;
    slider.style.transition = "all 0.5s ease-in-out";
  };
  const touchMove = (e) => {
    const slider = document.querySelector(".team-info-slider");
    if (!isDown) return;
    // e.preventDefault();
    x = e.touches[0].clientX;

    walk = x - startX;

    slider.style.transition = "";
    if (walk < 0 && walk > -1240) {
      slider.style.left = `${x - startX}px`;
    }

    //check left or right

    check1 = x - check0;
  };

  //end

  //Add animation
  const location = useLocation();
  const test = ()=>{

  }
  if (location.pathname === "/") {
    window.addEventListener("scroll", () => {
      const section0 = document.querySelector(".section0");
      const section0Height = section0.getBoundingClientRect().height;
      const box1 = document.querySelector(".box-1");
      const box1Height = box1.getBoundingClientRect().height;
      if (window.pageYOffset > section0Height + box1Height / 7) {
        dispatch(addAni1());
      }
      if (window.pageYOffset > section0Height / 3.5) {
        dispatch(addAni());
      }
    });
  } else if (location.pathname === "/about") {
    dispatch(addAni());
    window.addEventListener("scroll", () => {
      const box1 = document.querySelector(".box-1");
      const box1Height = box1.getBoundingClientRect().height;
      // console.log(box1Height);
      // console.log(window.pageYOffset);
      if (window.pageYOffset > box1Height / 10) {
        dispatch(addAni1());
      }
    });
  }
  //end

  return (
    <>
      <Container className='main-container'>
        {/* <div className='my-5 box-0'>
          <div className='content-0'>
            <div>
              <p>ABOUT</p>
              <p className='h3'>ABOUT TRUM AGENCY</p>
              <p className='h5 text-secodary'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                perferendis.
              </p>
            </div>
          </div>
          <div className='shadow-0'></div>
        </div> */}

        <div className='box-1'>
          {box1Ani === true ? (
            <div className='test-box'>
              <div className='content-1'>
                <div className='test slideInDown'>
                  <p className='content-1-top'>{first[0]}</p>
                  <p className='h3'>{second[0]}</p>
                  <div className='flaming-text'>
                    <p className='h3'>{third[0]}</p>
                  </div>
                  <p>
                   {forth[0]}
                  </p>
                  <p>
                  {forth[1]}
                  </p>
                </div>
              </div>
              <div className='img-1'>
                <img src={pic0} alt='about pic' className='scaleIn' />
              </div>
            </div>
          ) : <div className="imagion-box"></div>}
        </div>

        <div className='box-2'>
          {box2Ani ? (
            <div className='box-2-inner'>
              <div className='intro-team-info slideInDown'>
                <p>{first[1]}</p>
                <p className='h2'>{second[1]}</p>
                <p>
                 {forth[1]}
                </p>
              </div>

              <div
                className='team-info'
                onMouseDown={mouseDown}
                onMouseLeave={mouseLeave}
                onMouseUp={mouseUp}
                onMouseMove={mouseMove}
                onTouchEnd={touchEnd}
                onTouchMove={touchMove}
                onTouchStart={touchStart}
              >
                <div className='inner-team-info'>
                  <div className='team-info-slider'>
                    <div className='employee-cart fadeInUp'>
                      <Card>
                        <Card.Img variant='top' src={pic1} />
                        <Card.Body className='employee-info'>
                          <Card.Title>YOURNAME</Card.Title>
                          <Card.Text>POSITION</Card.Text>
                        </Card.Body>
                        <Card.Body className='employee-info-hidden'>
                          <Card.Title>expert in...</Card.Title>
                          <Card.Text>social logo</Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className='employee-cart fadeInUp'>
                      <Card>
                        <Card.Img variant='top' src={pic0} />
                        <Card.Body className='employee-info'>
                          <Card.Title>YOURNAME</Card.Title>
                          <Card.Text>POSITION</Card.Text>
                        </Card.Body>
                        <Card.Body className='employee-info-hidden'>
                          <Card.Title>expert in...</Card.Title>
                          <Card.Text>social logo</Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className='employee-cart fadeInUp'>
                      <Card>
                        <Card.Img variant='top' src={pic1} />
                        <Card.Body className='employee-info'>
                          <Card.Title>YOURNAME</Card.Title>
                          <Card.Text>POSITION</Card.Text>
                        </Card.Body>
                        <Card.Body className='employee-info-hidden'>
                          <Card.Title>expert in...</Card.Title>
                          <Card.Text>social logo</Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className='employee-cart fadeInUp'>
                      <Card>
                        <Card.Img variant='top' src={pic0} />
                        <Card.Body className='employee-info'>
                          <Card.Title>YOURNAME</Card.Title>
                          <Card.Text>POSITION</Card.Text>
                        </Card.Body>
                        <Card.Body className='employee-info-hidden'>
                          <Card.Title>expert in...</Card.Title>
                          <Card.Text>social logo</Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className='employee-cart fadeInUp'>
                      <Card>
                        <Card.Img variant='top' src={pic1} />
                        <Card.Body className='employee-info'>
                          <Card.Title>YOURNAME</Card.Title>
                          <Card.Text>POSITION</Card.Text>
                        </Card.Body>
                        <Card.Body className='employee-info-hidden'>
                          <Card.Title>expert in...</Card.Title>
                          <Card.Text>social logo</Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className='employee-cart fadeInUp'>
                      <Card>
                        <Card.Img variant='top' src={pic0} />
                        <Card.Body className='employee-info'>
                          <Card.Title>YOURNAME</Card.Title>
                          <Card.Text>POSITION</Card.Text>
                        </Card.Body>
                        <Card.Body className='employee-info-hidden'>
                          <Card.Title>expert in...</Card.Title>
                          <Card.Text>social logo</Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : <div className='imagion-box'></div>}
        </div>

        {/* <div className='box-3'>
          <div className='content-3'>
            <Row>
              <Col md={6} className='promote-video'>
                <div className='video-btn'>
                  <FontAwesomeIcon className='play-btn' icon={faPlayCircle} />
                </div>
                <p>our office</p>
              </Col>
              <Col md={5} className='review-section'>
                <div className='review-boxs'>
                  <div className='review-box'>
                    <p>what client's say</p>
                    <div className='review-words'>
                      <div className='items-review'>
                        <div className='review-slider'>
                          <div className='item-slide'>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Aut sed corporis sapiente atque obcaecati
                              fuga architecto enim fugit minima consequatur.
                            </p>
                            <div className='who'>
                              <div className='info-who'>
                                <img src='' alt='' />
                                <p>Teo</p>
                                <p>position</p>
                              </div>
                            </div>
                          </div>
                          <div className='item-slide'>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Aut sed corporis sapiente atque obcaecati
                              fuga architecto enim fugit minima consequatur.
                            </p>
                            <div className='who'>
                              <div className='info-who'>
                                <img src='' alt='' />
                                <p>Hoang</p>
                                <p>position</p>
                              </div>
                            </div>
                          </div>
                          <div className='item-slide'>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Aut sed corporis sapiente atque obcaecati
                              fuga architecto enim fugit minima consequatur.
                            </p>
                            <div className='who'>
                              <div className='info-who'>
                                <img src='' alt='' />
                                <p>YYY</p>
                                <p>position</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className='partner-section'>
            <div className='partner-container'>
              <div className='partner-boxes'>
                <div className='partner-slider'>
                  <div className='partner-item'>
                    <img src={pic1} alt='hinh anh' />
                  </div>
                  <div className='partner-item'>
                    <img src={pic1} alt='hinh anh' />
                  </div>
                  <div className='partner-item'>
                    <img src={pic1} alt='hinh anh' />
                  </div>
                  <div className='partner-item'>
                    <img src={pic1} alt='hinh anh' />
                  </div>
                  <div className='partner-item'>
                    <img src={pic1} alt='hinh anh' />
                  </div>
                  <div className='partner-item'>
                    <img src={pic1} alt='hinh anh' />
                  </div>
                  <div className='partner-item'>
                    <img src={pic1} alt='hinh anh' />
                  </div>
                  <div className='partner-item'>
                    <img src={pic1} alt='hinh anh' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </Container>
    </>
  );
};

export default Section1;
