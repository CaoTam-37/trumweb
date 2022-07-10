import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import pic0 from "../../Img/14c.jpg";
import pic1 from "../../Img/3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "./Section4Styles.css";

const Section4 = () => {
  const [highLightAni, setHighLightAni] = useState(false);
  //Add animation
  let highlightBoxClassImg = "news-pic";
  let highlightBoxClassTitle = "headline";
  window.addEventListener("scroll", () => {
    const section0 = document.querySelector(".section0");
    const section0Height = section0.getBoundingClientRect().height;
    const mainContainer = document.querySelector(".main-container");
    const mainContainerHeight = mainContainer.getBoundingClientRect().height;
    const mainContainer1 = document.querySelector(".main-container-1");
    const mainContainerHeight1 = mainContainer1.getBoundingClientRect().height;
    const mainContainer2 = document.querySelector(".main-container-2");
    const mainContainerHeight2 = mainContainer2.getBoundingClientRect().height;

    if (
      window.pageYOffset >
      section0Height +
        mainContainerHeight +
        mainContainerHeight1 +
        mainContainerHeight2 - 450
    ) {
      setHighLightAni(true);
      // console.log(highLightAni);
    }
  });
  if (highLightAni === true) {
    highlightBoxClassImg = "news-pic scaleIn1";
    highlightBoxClassTitle = "headline fadeInUp1";
  }
  //end
  return (
    <>
      <Container className='highlight-container'>
        <div className='highlight-grid'>
          <div className=' highlight-intro'>
            <p>blogs</p>
            <h3>our highlight</h3>
          </div>
          <Row className='highlight-boxes'>
            <Col sm={12} md={6} lg={6} xl={6} className='highlight-box'>
              <img
                src={pic0}
                alt='highlight work'
                className={highlightBoxClassImg}
              />
            </Col>

            <Col sm={12} md={6} lg={6} xl={6} className='highlight-box'>
              <Link to='/news'>
                <div className={highlightBoxClassTitle}>
                  <div className='headline0'>
                    <div className=' dateofnews'>
                      <p className='dayofnews'>03</p>
                      <p className='monthofnews'>JUNE ,2012</p>
                    </div>
                  </div>
                  <div className='headline1'>
                    <p className='typeofnews'>
                      admin / <span>writer-name</span>
                    </p>
                    <p className='headlineofnews'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    
                  </div>
                </div>
              </Link>
            </Col>

            <Col sm={12} md={6} lg={6} xl={6} className='highlight-box'>
              <img
                src={pic0}
                alt='highlight work'
                className={highlightBoxClassImg}
              />
            </Col>

            <Col sm={12} md={6} lg={6} xl={6} className='highlight-box'>
              <Link to='/news'>
                <div className={highlightBoxClassTitle}>
                  <div className='headline0'>
                    <div className=' dateofnews'>
                      <p className='dayofnews'>03</p>
                      <p className='monthofnews'>JUNE ,2012</p>
                    </div>
                  </div>
                  <div className='headline1'>
                    <p className='typeofnews'>
                      admin / <span>writer-name</span>
                    </p>
                    <p className='headlineofnews'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Section4;
