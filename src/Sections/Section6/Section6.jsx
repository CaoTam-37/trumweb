import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import logo from "../../Img/6-resize.jpg";
import "./Section6Styles.css";

const Section6 = () => {
  window.addEventListener("scroll", () => {
    const row0 = document.querySelector(".row-0");
    const row1 = document.querySelector(".row-1");
    const row2 = document.querySelector(".row-2");
    const logoContainer = document.querySelector(".logo-container");
    let logoContainerY = logoContainer.getBoundingClientRect().y;

    if (logoContainerY < 1200) {
      //console.log(logoContainerY);
      let x = logoContainerY / 120;
      row0.style.transform = `translateX(${0 - x - 10}% )`;
      row1.style.transform = `translateX(${x + (-1)}% )`;
      row2.style.transform = `translateX(${0 - x - 10}% )`;
    }
  });

  return (
    <>
      <Container className='logo-container'>
        <div className='inner-logo-box'>
          <div className='logo-row row-0'>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
          </div>
          <div className='logo-row row-1'>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
          </div>
          <div className='logo-row row-2'>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
            <div className='partner-logo'>
              <div className='logo-wrapper'>
                <img className='logo-pic' src={logo} alt='' />
              </div>
            </div>
          </div>
          <div className='overlay-logo-box'></div>
        </div>
      </Container>
    </>
  );
};

export default Section6;
