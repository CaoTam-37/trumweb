import React from "react";
import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import pic0 from "../../Img/13.jpg";
import pic1 from "../../Img/12.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "./Section5Styles.css";

const Section5 = () => {
  const [picAni, setPicAni] = useState(false);
  const location = useLocation();
  let headLineNewsClass = "headline-news word-lineup";
  let headLineIntroClass = "headline-intro lineup-1";
  let infoOfNewsClass = "info-of-news rightup";
  let effectBoxClass = "img-effect-box"
  const isMounted = useRef(false);
  useEffect(()=>{
    window.addEventListener("scroll", () => {
      const headlineBox = document.querySelector(".inner-headline-box");
      const headlineBoxHeight = headlineBox.getBoundingClientRect().height;
    
      // console.log(box1);
      //  console.log(box1Height);
      if (window.pageYOffset > headlineBoxHeight /2) {
        setPicAni(true);
        // console.log(arrowAni);
      }else{
        setPicAni(false);
      }
    });
  })
  if (picAni === true) {
    effectBoxClass = "img-effect-box scaleIn1";
  }else{
    effectBoxClass = "img-effect-box";
  }

  return (
    <>
      <Container className='news-container'>
        <div className='news-section'>
          <div className='headline-box'>
            <div className='inner-headline-box'>
              <div className='center-box'>
                <div className='test-news'>
                  <h1 className={headLineNewsClass}>
                    Lorem ipsum dolor sit amet.
                  </h1>
                </div>
                <p className={headLineIntroClass}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero dicta nobis vitae accusamus vero eaque quas, corrupti
                  quis ea repudiandae minus sapiente dolorum magnam porro
                  molestiae voluptatum labore et iste provident possimus
                  quibusdam quisquam repellat eius.
                </p>
                <div className={infoOfNewsClass}>
                  <div className='client-name'>
                    <p>agency + client</p>
                    <p>YouTube,Google</p>
                  </div>
                  <div className='ourrole'>
                    <p>trum role</p>
                    <p>content writer, digital marketing, photography</p>
                  </div>
                  <div className='news-date'>
                    <p>date</p>
                    <p>June 2022</p>
                  </div>
                  <div className='launch'></div>
                </div>
              </div>
            </div>

            <div className='img-news-box-0'>
              <div className={effectBoxClass}>
                <img src={pic0} alt='' className='img-news' />
              </div>
            </div>
          </div>
          <div className='news-box news-part-0'>
            <h1 className='title'>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              saepe qui itaque praesentium nisi assumenda molestiae? Illo,
              perspiciatis voluptate numquam enim, quis soluta a, dicta facere
              cumque nobis repellendus eaque. Corporis repudiandae pariatur quos
              cupiditate atque harum recusandae consectetur expedita molestias
              saepe omnis numquam nostrum aliquid fuga tenetur quis vel autem
              exercitationem consequuntur, est veniam. Ab repellat ea quam
              assumenda?
            </p>
            <div className='img-news-box-1'>
              <img src={pic0} alt='' className='img-news' />
              <img src={pic1} alt='' className='img-news' />
            </div>
          </div>
          <div className='news-box news-part-1'>
            <h1 className='title'>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              laboriosam culpa officia omnis, ipsum quidem eligendi modi illum
              natus aliquid optio corporis accusantium delectus? Assumenda
              excepturi iure rerum. Ea asperiores totam repellendus
              necessitatibus, labore odit assumenda impedit dolorem cupiditate
              dolores aut ipsam fugiat, magni expedita non maiores maxime
              architecto laudantium! Omnis corporis excepturi, sapiente, sed
              porro dignissimos saepe minus laudantium quo voluptatum dolor amet
              impedit!
            </p>
            <div className='img-news-box-2'>
              <img src={pic0} alt='' className='img-news' />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              atque fugiat, dolorem, perferendis tenetur nobis amet ipsa odit
              sunt eveniet harum nemo ipsum in molestiae aut at libero eos quo
              consectetur dicta est? Suscipit consectetur impedit ratione, eius
              vero at laborum blanditiis tempore aliquid quam corporis, expedita
              reprehenderit voluptate deserunt! Libero, quaerat! Enim eaque,
              quod inventore maiores hic sunt voluptates!
            </p>
          </div>
          <div className='writer-info-box'>
            <div className='writer-info'>
              <p>
                writer : <span className='writer-name'>Trieu Quan Su</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Section5;
