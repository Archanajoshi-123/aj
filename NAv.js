import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import './NAv.css';
import Enormouslogo from './images/En.png';

export default function EnavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/home">
        <img src={Enormouslogo} alt="Loading" className='Enlogo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggleMenu} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/home" activeClassName="active">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/aboutus" activeClassName="active">About Us</Nav.Link>
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/oracle-services">Oracle Services</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/microsoft-technology-services">Microsoft Technology Services</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} to="/big-data">Big Data</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/bi-dw-solutions">Business Intelligence and Data Warehousing Solutions</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/web-offerings-and-mobile-applications">Web Offerings and Mobile Applications</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/talent-as-a-service">Talent As A Service (TaaS)</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/artifitial-intelligence">Artifitial Intelligence</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to='/sap-technology-services'>SAP Technology Services</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={NavLink} to="/technologies" activeClassName="active">Technologies</Nav.Link>
          <NavDropdown title="Infrastructure" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/iaas-the-cloud-on-demand">IAAS-The Cloud on Demand</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/disaster-recovery-on-demanad">Disaster Recovery on Demand</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/high-availability-solution">High Availability Solution</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/zero-data-loss">Zero Data Loss</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/data-backup">Data Backup</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/remote-infrastucture-monitoring-services">RIMS-Remote Infrastructure Monitoring Services</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/managed-dedicated-server">Managed Dedicated Server</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/virtual-private-network">VPS</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={NavLink} to="/contactus" activeClassName="active">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
