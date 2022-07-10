import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import pic0 from "../../Img/2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
      <Container fluid className='outer-footer'>
        <Container className='footer-container'>
          <Row className='footer-contents'>
            <Col sm={12} md={6} className='footer-content'>
              <div className='social-icons'>
                <FontAwesomeIcon className='social-icon' icon={faFacebookF} />
                <FontAwesomeIcon className='social-icon' icon={faTwitter} />
                <FontAwesomeIcon className='social-icon' icon={faInstagram} />
                <FontAwesomeIcon className='social-icon' icon={faLinkedin} />
              </div>
            </Col>

            <Col sm={12} md={6} className='footer-content'>
              <div className='footer-words'>
                <div className='footer-inner-word'>
                  <p>privacy policy</p>
                  <p>term & conditions</p>
                  <p>&copy; trump</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
