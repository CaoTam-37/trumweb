import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import pic0 from "../../Img/13.jpg";
import pic1 from "../../Img/14c.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "./Section1Styles.css";
import { useInsertionEffect } from "react";

let widthOfCart;
const Section1 = () => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [walk, setWalk] = useState(0);
  const [check0, setCheck0] = useState(0);
  const [check1, setCheck1] = useState(0);
  const [count, setCount] = useState(0);
  const isMounted = useRef(false);

  const [box1Ani, setBox1Ani] = useState(false);
  const [box2Ani, setBox2Ani] = useState(false);

  //Add slider function
  //MouseEvent
  const containerSlider = document.querySelector(".team-info");
  const slider = document.querySelector(".team-info-slider");
  let x;
  // const widthOfCart = document.querySelector('.employee-cart').getBoundingClientRect().width
  const mouseDown = (e) => {
    setIsDown(true);
    // setStartX(e.nativeEvent.offsetX - slider.offsetLeft);
    // setCheck0(e.nativeEvent.offsetX);
    setStartX(e.clientX - slider.offsetLeft);
    setCheck0(e.clientX);
    containerSlider.style.cursor = "grabbing";
    console.log(e.clientX);
  };
  const mouseLeave = (e) => {
    setIsDown(false);
  };
  const mouseUp = (e) => {
    containerSlider.style.cursor = "grab";
    setIsDown(false);
    if (walk < -50 && check1 < -250) {
      setCount(count - 2);
    } else if (walk < -50 && check1 < -80) {
      setCount(count - 1);
    }
    if (check1 > 550) {
      setCount(count + 2);
    } else if (check1 > 50) {
      setCount(count + 1);
    }

    if (count > 0) {
      setCount(0);
    } else if (count < -3) {
      setCount(-3);
    }
    slider.style.left = `${count * 380}px`; //smooth effect(delete to see)
    slider.style.transition = "all 0.5s ease-in-out";
    // console.log(count)
  };
  const mouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    x = e.clientX;
    setWalk(x - startX);
    //  console.log(walk)
    //  console.log(startX)
    // console.log(e.offsetParent);
    slider.style.transition = "";
    if (walk < 0 && walk > -1140) {
      slider.style.left = `${x - startX}px`;
    }

    //check left or right
    setCheck1(x - check0);
    //  console.log(check1)
  };
  //touchEvent
  const touchStart = (e) => {
    setIsDown(true);
    setStartX(e.touches[0].clientX - slider.offsetLeft);
    setCheck0(e.touches[0].clientX);
    console.log(e.touches[0].clientX);
  };

  const touchEnd = () => {
    setIsDown(false);
    if (walk < -50 && check1 < -250) {
      setCount(count - 2);
    } else if (walk < -50 && check1 < -80) {
      setCount(count - 1);
    }
    if (check1 > 550) {
      setCount(count + 2);
    } else if (check1 > 50) {
      setCount(count + 1);
    }

    // if (count > 0) {
    //   setCount(0);
    // } else if (count < -3) {
    //   setCount(-3);
    // }
    slider.style.left = `${count * 380}px`; //smooth effect(delete to see)
    slider.style.transition = "all 0.5s ease-in-out";
    console.log(count);
  };
  const touchMove = (e) => {
    if (!isDown) return;
    // e.preventDefault();
    x = e.touches[0].clientX;
    setWalk(x - startX);

    slider.style.transition = "";
    if (walk < 0 && walk > -1140) {
      slider.style.left = `${x - startX}px`;
    }

    //check left or right
    setCheck1(x - check0);
    //  console.log(check1)
  };
  const checkClientWidth = () => {
    if (window.innerWidth < 768 || window.innerWidth >= 1440) {
      widthOfCart = 380;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      widthOfCart = 360;
    } else if (window.innerWidth >= 1024 && window.innerWidth < 1440) {
      widthOfCart = 320;
    }
  };
  useEffect(() => {
    checkClientWidth();
    if (isMounted.current) {
      slider.style.left = `${count * widthOfCart}px`;
      if (window.innerWidth < 768) {
        if (count > 0) {
          setCount(0);
        } else if (count < -5) {
          setCount(-5);
        }
      } else if (768 <= window.innerWidth && window.innerWidth < 1024) {
        if (count > 0) {
          setCount(0);
        } else if (count < -4) {
          setCount(-4);
        }
      } else if (window.innerWidth >= 1024) {
        if (count > 0) {
          setCount(0);
        } else if (count < -3) {
          setCount(-3);
        }
      }
    } else {
      isMounted.current = true;
    }
  }, [count]);
  //end

  //Add animation
  const location = useLocation();
  let testClass = "test";
  let imgClasss = "";
  let introTeamInfoClass = "intro-team-info";
  let employeeCartClass = "employee-cart";
  let flameClass = "";
  if (location.pathname === "/") {
    window.addEventListener("scroll", () => {
      const section0 = document.querySelector(".section0");
      const section0Height = section0.getBoundingClientRect().height;
      const box1 = document.querySelector(".box-1");
      const box1Height = box1.getBoundingClientRect().height;
      // console.log(box1);
      // console.log(box1Height);
      if (window.pageYOffset > section0Height + box1Height / 5) {
        setBox2Ani(true);
        // console.log(box2Ani)
      } else if (window.pageYOffset > section0Height / 3.5) {
        setBox1Ani(true);
        // console.log(box1Ani);
      }
    });
    if (box2Ani === true || location.pathname === "/about") {
      introTeamInfoClass = "intro-team-info slideInDown";
      employeeCartClass = "employee-cart fadeInUp";
    }
    if (box1Ani === true || location.pathname === "/about") {
      testClass = "test slideInDown";
      imgClasss = "scaleIn";
      flameClass = "flaming-text";
    }
  } else if (location.pathname === "/about") {
    testClass = "test slideInDown";
    imgClasss = "scaleIn";
    flameClass = "flaming-text";
    window.addEventListener("scroll", () => {
      const box1 = document.querySelector(".box-1");
      const box1Height = box1.getBoundingClientRect().height;
      // console.log(box1Height);
      // console.log(window.pageYOffset);
      if (window.pageYOffset > box1Height / 4) {
        setBox2Ani(true);
        // console.log(box2Ani)
      }
    });
    if (box2Ani === true) {
      introTeamInfoClass = "intro-team-info slideInDown";
      employeeCartClass = "employee-cart fadeInUp";
    }
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
          <div className='test-box'>
            <div className='content-1'>
              <div className={testClass}>
                <p className='content-1-top'>WELCOME</p>
                <p className='h3'>ABOUT TRUMP</p>
                <div className={flameClass}>
                  <p className='h3'>DIGITAL AGENCY</p>
                </div>
                <p>
                  When you're looking to embrace digital growth strategies and
                  build a fresh, relevant brand, following the latest marketing
                  trends won't do. Instead, you need a team that brings diverse
                  creative and digital skill sets together, to deliver key ideas
                  and innovative strategies.
                </p>
                <p>
                  As TRUM, we do exactly that! With our rule-breaking,
                  passionate approach to marketing, we help you build a brand
                  that audiences find refreshingly relatable.
                </p>
              </div>
            </div>
            <div className='img-1'>
              <img src={pic0} alt='about pic' className={imgClasss} />
            </div>
          </div>
        </div>

        <div className='box-2'>
          <div className='box-2-inner'>
            <div className={introTeamInfoClass}>
              <p>thinkers</p>
              <p className='h2'>CREATIVE TEAM</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem impedit fuga recusandae distinctio, exercitationem est
                aperiam iure rem alias ab, mollitia numquam. Ut, quam dolorem!
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
                  <div className={employeeCartClass}>
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
                  <div className={employeeCartClass}>
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
                  <div className={employeeCartClass}>
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
                  <div className={employeeCartClass}>
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
                  <div className={employeeCartClass}>
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
                  <div className={employeeCartClass}>
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
