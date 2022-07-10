import React from "react";
import { Container } from "react-bootstrap";
import logoVideo from "../../Img/videoGif.gif";
import logoVideo1 from "../../Img/video1.mp4";
import "./Section0Styles.css";

// let logoGif = require("../../Img/videoGif.gif")
const Section0 = () => {
  return (
    <>
      <Container fluid className='section0'>
        {/* option 1 */}
        {/* <div className='video-logan'> */}
          {/* <img src={logoVideo} className='video' /> */}
          {/* <video
            src={logoVideo1}
            className='video'
            controls='controls'
            autoPlay={true}
            muted
          /> */}
        {/* </div> */}
        {/* option1 end */}
        {/* option 2 */}
        <div className='logan'>
          <div className='logan-grid'>
            <div className='logan-grid-box-1'>
              <div className='effect-box'>
                <p>WE ARE EXPERT IN TURNING</p>
              </div>
              <div className='effect-box'>
                <p> YOUR BRAND INTO </p>
              </div>
              <div className='effect-box-1'>
                <p className='text-shadow'>THE CATCHY ICON</p>
              </div>
            </div>
            {/* <div className='logan-grid-box-2'>
              <div className='effect-box-1'>
                <p className='text-shadow'>THE CATCHY ICON</p>
              </div>
            </div> */}
          </div>
          {/* <img src={logoVideo} className='video' /> */}
        </div>
        {/* option 2 end */}
      </Container>
    </>
  );
};

export default Section0;

{
  /* <div className='logan'>
<p className='h3'>
  <span>"</span>WE ARE EXPERT IN 
</p>
<p className='h1'>TURNING</p>
<p className='h3'>YOUR BRAND INTO THE</p>
<p className='h1'>
  CATCHY ICON<span>"</span>
</p>
</div> */
}
