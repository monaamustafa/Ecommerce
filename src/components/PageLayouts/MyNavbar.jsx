import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function MyNavbar() {
  const [showBlog, setShowBlog] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showAccessories, setShowAccessories] = useState(false);
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown
              title="Shop"
              id="basic-nav-dropdown"
              show={showShop}
              onMouseEnter={(e) => {
                setShowShop(!showShop);
              }}
              onMouseLeave={(e) => {
                setShowShop(false);
              }}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Accessories"
              id="basic-nav-dropdown"
              show={showAccessories}
              onMouseEnter={(e) => {
                setShowAccessories(!showAccessories);
              }}
              onMouseLeave={(e) => {
                setShowAccessories(false);
              }}
            >    
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
