import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../images/main-logo.png";
import NavDropdown from "react-bootstrap/NavDropdown"

function NavbarComponent() {  
  return (
    <React.Fragment>      
      <Navbar expand="lg" className="nav-background py-0" sticky="top" collapseOnSelect={true} variant="dark">
        <Navbar.Brand href="/" className="mx-0">
          <img src={Logo} alt="Vinayak Travels" className="img-fluid py-0 my-0"/>
          <span className="text-white font-bold">Outstation Taxi Service</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink exact to="/" activeClassName="activeNav">
              <Nav.Link
                href="/"
                className="font-medium font-17 px-3 navbar-item
                  text-white text-center"
              >
                Home
              </Nav.Link>
            </NavLink>
            <NavDropdown title="Blogs" id="collasible-nav-dropdown" className="font-medium font-17 px-3 navbar-item text-white text-center active">
              <div style={{background: '#FFECD3', border: 'none', borderRadius: '5px', color: '#663D14'}}>
                <Link to="/blogs/kashiVishwanath" className="font-15 text-brown font-regular dropdown-item">                  
                  KashiVishwanath                  
                </Link>
                <Link to="/blogs/places" className="font-15 text-brown font-regular dropdown-item">
                  Top 10 places in Varanasi
                </Link>
                <Link to="/blogs/sarnath" className="font-15 text-brown font-regular dropdown-item">
                  Sarnath Darshan                  
                </Link>
                <Link to="/blogs/durgaMandir" className="font-15 text-brown font-regular dropdown-item">
                  Durga Mandir Darshan                  
                </Link>
              </div>
            </NavDropdown>
            <NavLink to="/blogs/carRental" activeClassName="activeNav">
              <Nav.Link
                href="/blogs/carRental"
                className="font-medium font-17 px-3 navbar-item
                  text-white text-center"
              >
                Rental cars
              </Nav.Link>
            </NavLink>            
            <NavLink to="/contact" activeClassName="activeNav">
              <Nav.Link
                href="/contact"
                className="font-medium font-17
                  px-3 navbar-item text-white text-center"
              >
                Contact Us
              </Nav.Link>
            </NavLink>
            <Nav.Link                
              className="font-medium font-17 px-3 navbar-last-item
                mx-auto text-white text-center bg-brown d-none d-lg-block"
            >            
              <a href="tel:+91-9935474730" className="font-medium text-white text-center">
                Get in Touch
              </a>
            </Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarComponent;
