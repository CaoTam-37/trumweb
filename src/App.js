import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import MainSection from "./Sections/MainSection";
import Section3 from "./Sections/Section3/Section3";
import Footer from "./Footer/Footer";
import Section2Deep from "./Sections/Section2Deep/Section2Deep";
import Section4 from "./Sections/Section4/Section4";
import Section5 from "./Sections/Section5/Section5";
import Section0 from "./Sections/Section0/Section0";
import Section1 from "./Sections/Section1/Section1";
import SectionForm from './Sections/SectionForm/SectionForm';
import Arrow from "./Sections/SectionArrow/Arrow";
import ScrollToTop from "./Sections/ScrollToTop";
import Admin from "./Sections/Admin/Admin";

const App = () => {
  // const [arrow, setArrow] = useState(true)
  // const showArrow = ()=>{
  //   if(window.innerWidth < 1440){
  //     setArrow(false)
  //   }else{
  //     setArrow(true)
  //   }
  // }
  // window.addEventListener("resize", showArrow)
  return (
    <BrowserRouter>
      <div className='biggest-container'>
        <Navbar />
        {/* {arrow === true && (<Arrow />) } */}
        <Arrow />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<MainSection />} />
          <Route path='/about' element={<Section1 />} />
          <Route path='/services' element={<Section2Deep />} />
          <Route path='/news' element={<Section5 />} />
          <Route path='/admin' element={<Admin />} />
          <Route path="/hiring" element={<SectionForm />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
