import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
} from "mdbreact";
function Navbar() {
  return (
    <MDBNavbar
      color="special-color-dark"
      dark
      expand="md"
      style={{ width: "100%" }}
    >
      <MDBNavbarBrand>
        <strong className="white-text">NOAH BORG</strong>
      </MDBNavbarBrand>
      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBNavLink to="/about">
            <MDBIcon icon="home" className="mr-1" />
            About Me
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/portfolio">
            <MDBIcon icon="code" className="mr-1" />
            Applications
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/resume">
            <MDBIcon icon="file" className="mr-1" />
            Resume
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/contact">
            <MDBIcon icon="envelope" className="mr-1" />
            Contact Me!
          </MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBNavbar>
  );
}

export default Navbar;