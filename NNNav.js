import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './EnavBar.css';
import Enormouslogo from './images/En.png';

export default function EnavBar() 
{
  const [showMenu, setShowMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState(null);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
    // setActiveDropdown(null);
    // setActiveNestedDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleNestedDropdown = (nestedDropdown) => {
    setActiveNestedDropdown(activeNestedDropdown === nestedDropdown ? null : nestedDropdown);
  };

 
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Adjust this value according to your navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      handleCloseMenu(); // Close the menu after scrolling
    }
  };
  return (
    <nav>
      <Link to="/" className="title" onClick={handleCloseMenu}>
        <img src={Enormouslogo} alt="Loading" className='Enlogo' />
      </Link>
      <div className="menu" onClick={handleToggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className={showMenu ? "open" : ""}>
        <li><NavLink to="/" onClick={handleCloseMenu}>Home</NavLink></li>
        
        <li className="dropdown">
          <NavLink to="/aboutus" onClick={() => toggleDropdown('aboutus')}>About</NavLink>
          {activeDropdown === 'aboutus' && (
            <div className="dropdown-content">          
              <Link to="/aboutus#vision" onClick={() => { scrollToSection('vision'); handleCloseMenu(); }}>Our Vision</Link>
              <Link to="/aboutus#mission" onClick={() => { scrollToSection('mission'); handleCloseMenu(); }}>Our Mission</Link>
              <Link to="/aboutus#Ourteam" onClick={() => { scrollToSection('Ourteam'); handleCloseMenu(); }}>Our Team</Link>
              <Link to="/aboutus#Globalpresence" onClick={() => { scrollToSection('Globalpresence'); handleCloseMenu(); }}>Global Presence</Link>
            </div>
          )}
        </li>

        <li className="dropdown">
          <NavLink to="#" onClick={() => toggleDropdown('services')}>Services</NavLink>
          {activeDropdown === 'services' && (
            <div className="dropdown-content s-wid">
              <div className="nested-dropdown">
                <Link to="#" onClick={() => toggleNestedDropdown('oracle')}>Oracle Services</Link>
                {activeNestedDropdown === 'oracle' && (
                  <div className="nested-dropdown-content raonested-dropdown-content">
                    <Link to="/oracle-cloud-applications" onClick={handleCloseMenu}>Oracle Cloud Applications</Link>
                    <Link to="/oracle-managed-services" onClick={handleCloseMenu}>Oracle Managed Services</Link>
                    <Link to="/additional-oracle-services" onClick={handleCloseMenu}>Additional Oracle Services</Link>
                  </div>
                )}
              </div>
              <div className="nested-dropdown">
                <Link to="/microsoft-technology-services" onClick={() => toggleNestedDropdown('microsoft')}>Microsoft Technology Services</Link>
                {activeNestedDropdown === 'microsoft' && (
                  <div className="nested-dropdown-content raonested-dropdown-content">
                    <Link to="/microsoft-custom-application-development" onClick={handleCloseMenu}>Microsoft Custom Application Development</Link>
                    <Link to="/microsoft-enterprise-architecture-services" onClick={handleCloseMenu}>Microsoft Enterprise Architecture Services</Link>
                    <Link to="/microsoft-business-intelligence" onClick={handleCloseMenu}>Microsoft Business Intelligence</Link>
                    <Link to="/microsoft-product-solutions" onClick={handleCloseMenu}>Microsoft Product Solutions</Link>
                  </div>
                )}
              </div>
              <div className="nested-dropdown">
                <Link to="/sap-technology-services" onClick={() => toggleNestedDropdown('sap')}>SAP Technology Services</Link>
                {activeNestedDropdown === 'sap' && (
                  <div className="nested-dropdown-content raonested-dropdown-content">
                    <Link to="/sap-erp-implementation-and-management" onClick={handleCloseMenu}>SAP ERP Implementation and Management</Link>
                    <Link to="/sap-s4hana-migration" onClick={handleCloseMenu}>SAP S/4HANA Migration</Link>
                    <Link to="/sap-cloud-solutions" onClick={handleCloseMenu}>SAP Cloud Solutions</Link>
                    <Link to="/sap-analytics-and-business-intelligence" onClick={handleCloseMenu}>SAP Analytics and Business Intelligence</Link>
                    <Link to="/sap-integration-services" onClick={handleCloseMenu}>SAP Integration Services</Link>
                    <Link to="/sap-training-support" onClick={handleCloseMenu}>SAP Training and Support</Link>
                  </div>
                )}
              </div>
              <Link to="/big-data" onClick={handleCloseMenu}>Big Data</Link>
              <Link to="/business-intelligence-and-data-warehousing-solutions" onClick={handleCloseMenu}>Business Intelligence and Data Warehousing Solutions</Link>
              <Link to="/web-offerings-and-mobile-applications" onClick={handleCloseMenu}>Web Offerings and Mobile Applications</Link>
              <Link to="/talent-as-a-service" onClick={handleCloseMenu}>Talent As A Service (TaaS)</Link>
              <Link to="/cyber-security" onClick={handleCloseMenu}>Cyber Security</Link>
              <Link to="/quality-assurance-and-testing-services" onClick={handleCloseMenu}>Quality Assurance and Testing Services</Link>
              {/* <Link to="/artifitial-intelligence" onClick={handleCloseMenu}>Artificial Intelligence</Link> */}
            </div>
          )}
        </li>
        
        <li className="dropdown">
          <NavLink to="/technologies" onClick={handleCloseMenu}>Technologies</NavLink>
        </li>
        
        <li className="dropdown">
          <NavLink to="/infrastructure" onClick={() => toggleDropdown('infrastructure')}>Infrastructure</NavLink>
          {activeDropdown === 'infrastructure' && (
            <div className="dropdown-content infa-wid">
              <Link to="/iaas-the-cloud-on-demand" onClick={handleCloseMenu}>IAAS-The Cloud on Demand</Link>
              <Link to="/disaster-recovery-on-demand" onClick={handleCloseMenu}>Disaster Recovery on Demand</Link>
              <Link to="/high-availability-solution" onClick={handleCloseMenu}>High Availability Solution</Link>
              <Link to="/zero-data-loss" onClick={handleCloseMenu}>Zero Data Loss</Link>
              <Link to="/data-backup" onClick={handleCloseMenu}>Data Backup</Link>
              <Link to="/remote-infrastucture-monitoring-services" onClick={handleCloseMenu}>RIMS-Remote Infrastructure Monitoring Services</Link>
              <Link to="/managed-dedicated-server" onClick={handleCloseMenu}>Managed Dedicated Server</Link>
              <Link to="/virtual-private-network" onClick={handleCloseMenu}>VPS</Link>
            </div>
          )}
        </li>
        <li>
        <li><NavLink to="/resources" onClick={handleCloseMenu}>Resources</NavLink></li>
        </li>
        <li>
        <li><NavLink to="/careers" onClick={handleCloseMenu}>Careers</NavLink></li>
        </li>
        <li><NavLink to="/contactus" onClick={handleCloseMenu}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

