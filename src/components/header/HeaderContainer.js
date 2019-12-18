import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

class HeaderContainer extends Component {
  render() {
    return (
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>Natuba</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <NavLink to={"/"}>Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to={"/conocenos"}>Conocenos</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to={"/productos"}>Productos</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to={"/ordenar"}>Ordenar</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to={"/contacto"}>Contacto</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to={"/encuentranos"}>Encuentranos</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderContainer;
