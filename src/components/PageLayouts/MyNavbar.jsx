import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function MyNavbar() {
  const [showShop, setShowShop] = useState(false);
  const [showAccessories, setShowAccessories] = useState(false);
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <NavLink to={"/home"} className="navLink">
              Home
            </NavLink>
            <NavLink to={"/product"} className="navLink">
              Products
            </NavLink>
            <NavLink to="about" className="navLink">
              About Us
            </NavLink>
            <NavLink to={"/contactus"} className="navLink">
              Contact Us
            </NavLink>
            <NavLink to={"/blogs"} className="navLink">
              Blogs
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
