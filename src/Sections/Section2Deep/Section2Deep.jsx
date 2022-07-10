import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Section2DeepStyles.css";
import pic0 from "../../Img/3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Section2Deep = () => {
  const [mContaiSerAni, setMContaiSerAni] = useState(false);

  //Add animation delay
  const services = document.querySelectorAll(".service");
  //end
  //Add animation
  let serviceClass = "service";
  window.addEventListener("scroll", () => {
    const galaryServices = document.querySelector(".galary-services");
    const galaryServicesHeight = galaryServices.getBoundingClientRect().height;
    //  console.log(box2Height);
     console.log(galaryServicesHeight);
     console.log(window.pageYOffset)
    if (window.pageYOffset > galaryServicesHeight/5) {
      setMContaiSerAni(true)
    }
  });
  if(mContaiSerAni === true){
    serviceClass = "service fadeInUp2";
  }
  //end

  return (
    <>
      <Container className='container-service-item'>
        <Row className='container-services'>
          <div className='intro-services-job'>
            <h2 className=''>our services</h2>
          </div>
          <Col md={8} className='services-job'>
            <div className='services-job-text'>
              <h4 className='service-job-name'>Website Development</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus minus sit harum dolores! Modi tempora nobis commodi
                quibusdam maiores maxime dicta nesciunt soluta quam, itaque
                consequuntur a aliquid dolorum fugit quas alias tempore,
                delectus voluptas? Pariatur ullam in consequatur velit?
              </p>
            </div>

            <div className='box-services-job'>
              <Row className='galary-services'>
                <Col md={6} className="service fadeInUp2">
                  <img src={pic0} alt='' className='service-pic' />
                </Col>
                <Col md={6} className="service fadeInUp2">
                  <img src={pic0} alt='' className='service-pic' />
                </Col>
                <Col md={12} className={serviceClass}>
                  <img src={pic0} alt='' className='service-pic1' />
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={4} className='services-nav'>
            <div className='outer-box-nav'>
              <p className='h5'>all services</p>
              <div className='box-nav'>
                <p>
                  website development
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='font-arrow'
                  />
                </p>
                <p>
                  website development
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='font-arrow'
                  />
                </p>
                <p>
                  website development
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='font-arrow'
                  />
                </p>
                <p>
                  website development
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='font-arrow'
                  />
                </p>
                <p>
                  website development
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='font-arrow'
                  />
                </p>
                <p>
                  website development
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='font-arrow'
                  />
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Section2Deep;
