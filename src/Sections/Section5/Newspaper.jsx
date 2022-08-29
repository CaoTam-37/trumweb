import React from 'react'
import pic0 from "../../Img/13.jpg";
import pic1 from "../../Img/12.jpg";

const Newspaper = ({headline, part0, part1, writerName}) => {
  const {bigHeadLine, intro, client, role, date} = headline
  const {headLine0, post0} = part0
  const {headLine1, post1} = part1
 
  return (
    <>
     <div className='news-section'>
          <div className='headline-box'>
            <div className='inner-headline-box'>
              <div className='center-box'>
                <div className='test-news'>
                  <h1 className="headline-news word-lineup">
                    {bigHeadLine}
                  </h1>
                </div>
                <p className="headline-intro lineup-1">
                  {intro}
                </p>
                <div className="info-of-news rightup">
                  <div className='client-name'>
                    <p>agency + client</p>
                    <p>{client}</p>
                  </div>
                  <div className='ourrole'>
                    <p>trum role</p>
                    <p>{role}</p>
                  </div>
                  <div className='news-date'>
                    <p>date</p>
                    <p>{date}</p>
                  </div>
                  <div className='launch'></div>
                </div>
              </div>
            </div>

            <div className='img-news-box-0'>
              <div className="img-effect-box scaleIn1">
                <img src={pic0} alt='' className='img-news' />
              </div>
            </div>
          </div>
          <div className='news-box news-part-0'>
            <h1 className='title'>{headLine0}</h1>
            <p>
              {post0[0]}
            </p>
            <div className='img-news-box-1'>
              <img src={pic0} alt='' className='img-news' />
              <img src={pic1} alt='' className='img-news' />
            </div>
          </div>
          <div className='news-box news-part-1'>
            <h1 className='title'>{headLine1}</h1>
            <p>
              {post1[0]}
            </p>
            <div className='img-news-box-2'>
              <img src={pic0} alt='' className='img-news' />
            </div>
            <p>
              {post1[1]}
            </p>
          </div>
          <div className='writer-info-box'>
            <div className='writer-info'>
              <p>
                writer : <span className='writer-name'>{writerName}</span>
              </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Newspaper