import React from 'react';
import './Subdrop.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './App.css';

const App1 = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Services" id="services-dropdown" className="custom-dropdown">
              <NavDropdown.Item href="#oracle-services">Oracle Services</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#microsoft-services">Microsoft Services</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#other-services">Other Services</NavDropdown.Item>
              <NavDropdown title="Oracle Services" id="oracle-services-dropdown" className="custom-dropdown">
                <NavDropdown.Item href="#oracle-cloud-services">Oracle Cloud Services</NavDropdown.Item>
                <NavDropdown.Item href="#oracle-managed-services">Oracle Managed Services</NavDropdown.Item>
                <NavDropdown.Item href="#additional-oracle-services">Additional Oracle Services</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Microsoft Services" id="microsoft-services-dropdown" className="custom-dropdown">
                <NavDropdown.Item href="#microsoft-enterprise-architecture">Microsoft Enterprise Architecture Services</NavDropdown.Item>
                <NavDropdown.Item href="#ms-custom-app-dev">MS Custom Application Development</NavDropdown.Item>
                <NavDropdown.Item href="#microsoft-product-solutions">Microsoft Product Solutions</NavDropdown.Item>
                <NavDropdown.Item href="#microsoft-business-intelligence">Microsoft Business Intelligence</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default App1;
