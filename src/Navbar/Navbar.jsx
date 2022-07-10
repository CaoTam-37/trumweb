import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Img/logo.png"
import "./NavbarStyles.css";

const Navbar1 = () => {
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".nav");
    const navHeight = navbar.getBoundingClientRect().height;
    // console.log(navHeight);
    if (window.pageYOffset > navHeight) {
      navbar.classList.add("fixed-nav");
    } else {
      navbar.classList.remove("fixed-nav");
    }
  });

  return (
    <>
      <Navbar className='nav'>
        <Container fluid className='nav-bar'>
          <Link to='/'>
            <Navbar.Brand className='nav-brand'><img className="logo-brand" src={logo} alt="" /></Navbar.Brand>
          </Link>
          {/* <Navbar.Toggle /> */}
          <Navbar.Collapse className='basic-navbar' id='basic-navbar'>
            <Nav className='nav-info'>
              <Link to='/about'>
                <p className='info'>ABOUT US</p>
              </Link>
              <Link to='/services'>
                <p className='info'>OUR SERVICE</p>
              </Link>
              <Link to='/hiring'>
                <p className='info'>HIRING</p>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar1;
