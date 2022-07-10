import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Section3Styles.css";
import pic0 from "../../Img/8.jpg";
import pic1 from "../../Img/13.jpg";

const Section3 = () => {
  const [mContai3Ani, setMContai3Ani] = useState(false);

   //Add animation
   let portfolioClass = "portfolio-container";
   window.addEventListener("scroll", () => {
     const section0 = document.querySelector(".section0");
     const section0Height = section0.getBoundingClientRect().height;
     const mainContainer = document.querySelector(".main-container");
     const mainContainerHeight = mainContainer.getBoundingClientRect().height;
     const mainContainer1 = document.querySelector(".main-container-1");
     const mainContainerHeight1 = mainContainer1.getBoundingClientRect().height;
     //  console.log(box2Height);
     // console.log(box1Height);
     let minus 
     if(window.innerWidth < 768){
      minus = 2000
     }else{
      minus = 900
     }
     if (window.pageYOffset > (section0Height + mainContainerHeight + mainContainerHeight1 - minus)) {
       setMContai3Ani(true)
     }
   });
   if(mContai3Ani === true){
    portfolioClass = "portfolio-container fadeInUp1"
   }
   //end

  return (
    <>
      <Container className='main-container-1' >
        <div className='portfolio-grid'>
          <div className="portfolio-grid-intro">
            <p>portfolio</p>
            <h3>our works</h3>
          </div>
          <Row className={portfolioClass}>
            <Col sm={12} md={4} lg={4} xl={4} className='portfolio-items'>
              <div className='item'>
                <div className='item-pic'>
                  <img src={pic1} alt='work' />
                </div>
                <div className='hover-item'>
                  <div className='hover-content'>
                    <p>Lorem ipsum dolor sit.</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur, eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex esse non labore doloremque nam laboriosam?
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4} xl={4} className='portfolio-items'>
              <div className='item'>
                <div className='item-pic'>
                  <img src={pic1} alt='work' />
                </div>
              </div>
              <div className='hover-item'>
                <div className='hover-content'>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur, eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex esse non labore doloremque nam laboriosam?
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4} xl={4} className='portfolio-items'>
              <div className='item'>
                <div className='item-pic'>
                  <img src={pic1} alt='work' />
                </div>
              </div>
              <div className='hover-item'>
                <div className='hover-content'>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur, eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex esse non labore doloremque nam laboriosam?
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4} xl={4} className='portfolio-items'>
              <div className='item'>
                <div className='item-pic'>
                  <img src={pic1} alt='work' />
                </div>
              </div>
              <div className='hover-item'>
                <div className='hover-content'>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur, eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex esse non labore doloremque nam laboriosam?
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4} xl={4} className='portfolio-items'>
              <div className='item'>
                <div className='item-pic'>
                  <img src={pic1} alt='work' />
                </div>
              </div>
              <div className='hover-item'>
                <div className='hover-content'>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur, eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex esse non labore doloremque nam laboriosam?
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4} xl={4} className='portfolio-items'>
              <div className='item'>
                <div className='item-pic'>
                  <img src={pic1} alt='work' />
                </div>
              </div>
              <div className='hover-item'>
                <div className='hover-content'>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur, eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex esse non labore doloremque nam laboriosam?
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4} xl={4} className='portfolio-items'>
              <div className='item'>
                <div className='item-pic'>
                  <img src={pic1} alt='work' />
                </div>
              </div>
              <div className='hover-item'>
                <div className='hover-content'>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur, eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex esse non labore doloremque nam laboriosam?
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4} xl={4} className='portfolio-items'>
              <div className='item'>
                <div className='item-pic'>
                  <img src={pic1} alt='work' />
                </div>
              </div>
              <div className='hover-item'>
                <div className='hover-content'>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur, eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex esse non labore doloremque nam laboriosam?
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4} xl={4} className='portfolio-items'>
              <div className='item'>
                <div className='item-pic'>
                  <img src={pic1} alt='work' />
                </div>
              </div>
              <div className='hover-item'>
                <div className='hover-content'>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur, eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex esse non labore doloremque nam laboriosam?
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Section3;
