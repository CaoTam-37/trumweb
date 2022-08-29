import React from "react";
import pic0 from "../../Img/14c.jpg";
import {Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { chooseNews } from "../../features/sections/newspaperSlice";

const News = ({id,date,admin,tittle}) => {
  const dispatch = useDispatch()
  return (
    <>
      <Col sm={12} md={6} lg={6} xl={6} className='highlight-box'>
        <img src={pic0} alt='highlight work' className="news-pic scaleIn1" />
      </Col>

      <Col sm={12} md={6} lg={6} xl={6} className='highlight-box'>
        <Link to='/news' onClick={()=>dispatch(chooseNews(id))}>
          <div className="headline fadeInUp1">
            <div className='headline0'>
              <div className=' dateofnews'>
                <p className='dayofnews'>{date.day}</p>
                <p className='monthofnews'>{date.month} ,{date.years}</p>
              </div>
            </div>
            <div className='headline1'>
              <p className='typeofnews'>
                {admin.posion} / <span>{admin.name}</span>
              </p>
              <p className='headlineofnews'>
                {tittle}
              </p>
            </div>
          </div>
        </Link>
      </Col>
    </>
  );
};

export default News;
