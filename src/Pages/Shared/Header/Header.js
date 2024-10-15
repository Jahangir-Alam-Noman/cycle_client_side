import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';


const Header = () => {
    const { } = useAuth();
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
          <Navbar.Brand href="#">
          <Link to="/home"> <img src={logo} alt="" /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/home">Explore</Link></Nav.Link>
            <Nav.Link><Link to="/login">About Us</Link></Nav.Link>
            <Nav.Link><Link to="/register">Contact</Link></Nav.Link>
         
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Link to="/login"><Button variant="outline-success">Login</Button></Link>
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;