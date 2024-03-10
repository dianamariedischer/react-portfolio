import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
  const currentPage = useLocation().pathname;

  const handleNavLinkClick = () => {
    // Close the navbar when a nav link is clicked
    const navbar = document.getElementById('responsive-navbar-nav');
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary sticky-top">
      <Container fluid className="mx-1">
        <Navbar.Brand href="/">Diana Discher</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav>
            <Link
              to="/"
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
              onClick={handleNavLinkClick}
            >
              About
            </Link>
            <Link
              to="/Portfolio"
              className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
              onClick={handleNavLinkClick}
            >
              Portfolio
            </Link>
            <Link
              to="/Contact"
              className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
              onClick={handleNavLinkClick}
            >
              Contact
            </Link>
            <Link
              to="/Resume"
              className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
              onClick={handleNavLinkClick}
            >
              Resume
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
