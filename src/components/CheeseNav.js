import React from "react";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

const CheeseNav = () => (
  <NavBar>
    <Nav>
      <LinkContainer exact to="/">
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer exact to="/menus">
        <Nav.Link>Menus</Nav.Link>
      </LinkContainer>
      <LinkContainer exact to="/cheeses">
        <Nav.Link>Cheeses</Nav.Link>
      </LinkContainer>
      <LinkContainer exact to="/categories">
        <Nav.Link>Categories</Nav.Link>
      </LinkContainer>
      {/* TODO: implement the links */}
    </Nav>
  </NavBar>
);

export default CheeseNav;