import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OracleManagedServices/OAppsDBA.css";
import './CyberSecurityKA.css'

import cyb2 from "./images/Cyber_img.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUsPopup from "./Popup";
import Protfolio from './images/PORTFOLIO.png';
import whyenr from './images/whyenor.png';
import soar from './images/Soare.png';

const CyberCK = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const openPopup = () => {
    setIsPopupOpen(true);
    setSubmitMessage(null);
  };

  const closePopup = (message) => {
    setIsPopupOpen(false);
    setSubmitMessage(message); // Set the submit message in Forp
    console.log("Submitted message:", message); // Log the submitted message
  };

  useEffect(() => {
    if (submitMessage) {
      const timer = setTimeout(() => {
        setSubmitMessage(null);
      }, 5000); // Remove message after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [submitMessage]);

  const isSuccessMessage = submitMessage && !submitMessage.includes("Failed");
  console.log("Is success message:", isSuccessMessage); // Log the success message check
  return (
    <>
      <div>
        <div className="div1card">
          <div className="image-container">
            <img src={cyb2} className="img-fluid" alt="Technology" />
            <div className="overlay"></div>
            <div className="txt" style={{ textAlign: "left" }}>
              <h2 className="text-xl text-lg text-left">
                {" "}
                Cyber Security Services
              </h2>
              <p className="Hp text-lg text-xl-left ">
                Protecting Your Digital Space
              </p>

              <div className="d-flex justify-content-center">
                {!isPopupOpen && (
                  <div className="d-flex justify-content-left">
                    <button
                      className="btn btn-outline-light w-auto"
                      onClick={openPopup}
                    >
                      Schedule a Free Consultation!
                    </button>
                    {submitMessage && (
                      <div
                        className={`submit-message ${
                          isSuccessMessage ? "success" : "error"
                        }`}
                      >
                        {submitMessage}
                      </div>
                    )}
                  </div>
                )}
                <ContactUsPopup isOpen={isPopupOpen} onClose={closePopup} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="fontm">
            <h3 className="sizem" style={{fontSize:'45px', marginTop:'20px'}} >
              Comprehensive Cyber Security Solutions
            </h3>
          </div>
          <div className="fontm" style={{ paddingTop: "20px" }}>
            <p>
              In today’s digital age, protecting your business from cyber
              threats is more critical than ever. At Enormous IT, we offer a
              full spectrum of cyber security services designed to safeguard
              your digital assets and ensure the integrity, confidentiality, and
              availability of your data. Our comprehensive solutions are
              tailored to meet the unique needs of your organization, providing
              you with peace of mind and allowing you to focus on your core
              business operations.
            </p>
          </div>

          <div className="d-flex justify-content-center" style={{marginTop:'20px'}}>
              <img src={soar} alt="loading" className="img_yelement"/>
            </div>
          <div className="flexm">
            <div className=" cardm  fsm tcm">
              <p className="font1m">Threat intel and Risk Management</p>
              <p>
                Our experts conduct thorough assessments to identify potential
                vulnerabilities in your systems. We provide detailed reports and
                actionable recommendations to mitigate risks and enhance your
                security posture.
              </p>
            </div>
            <div className=" card1m  fsm tcm">
              <p className="font1m ">Network Security</p>
              <p>
                Protect your network infrastructure from unauthorized access,
                data breaches, and other cyber threats. Our services include
                firewalls, intrusion detection systems (IDS), intrusion
                prevention systems (IPS), and virtual private networks (VPN).
              </p>
            </div>

            <div className=" card1m  fsm tcm">
              <p className="font1m ">Endpoint Security</p>
              <p>
                Ensure the protection of all endpoints, including desktops,
                laptops, mobile devices, and servers. We deploy advanced
                endpoint protection solutions to detect, prevent, and respond to
                cyber threats.
              </p>
            </div>

            <div className=" card1m  fsm tcm">
              <p className="font1m">
                Advanced Fraud Detection
              </p>
              <p>
              Advanced fraud detection in SOAR automates the identification 
              response to complex fraud activities, using AI-driven analytics
               to detect and mitigate threats in real time.
              </p>
            </div>
            <div className=" card1m  fsm tcm">
              <p className="font1m ">Mobile Integration</p>
              <p>
              Mobile integration enables real-time threat monitoring and response from anywhere,
               allowing for swift and flexible security management on the go. It also ensures that
                security teams remain connected and responsive, even while traveling.
              </p>
            </div>

            <div className=" card1m  fsm tcm">
              <p className="font1m ">Identity and Access Management (IAM)</p>
              <p>
                Control and manage user access to critical information within
                your organization. Our IAM solutions include multi-factor
                authentication (MFA), single sign-on (SSO), and role-based
                access control (RBAC).
              </p>
            </div>

            <div className=" card1m  fsm tcm">
              <p className="font1m ">Vulnerability Management</p>
              <p>
              Automated vulnerability management swiftly detects, prioritizes,
               and remediates security weaknesses, ensuring continuous and effective threat protection.
                Leveraging real-time data and intelligent workflows, it minimizes the risk of exploitation.
              </p>
            </div>
            <div className=" card1m  fsm tcm">
              <p className="font1m ">Data Protection and Encryption</p>
              <p>
                Safeguard your sensitive data with our encryption services. We
                help you implement robust encryption protocols to protect data
                at rest, in transit, and in use, ensuring compliance with
                regulatory requirements.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center" style={{marginTop:'20px'}}>
          <img src={Protfolio} alt="Protfolio" className="img_element"/>
        </div>
        <div>
          <div className="fontm" style={{marginTop:'20px'}}>
            <h3 className="sizem" style={{ textAlign:'left'}}>Why Choose Enormous IT ?</h3>
          </div>
          <div className="d-flex justify-content-center">
              <img src={whyenr} alt="loading" className="img_yelement"/>
            </div>
          <ul style={{ marginLeft: "50px", marginRight:'50px'}}>
          <li className="ullikk" style={{ color: "black" }}>
              <strong>Global Standards :</strong> 
              Our solutions adhere to international standards,
               ensuring the highest level of security and compliance for 
               your organization.
            </li>
            
            <li className="ullikk" style={{ color: "black" }}>
              <strong>Tailored Solutions:</strong> We understand that every
              organization is unique. Our solutions are customized to address
              your specific security challenges and requirements.
            </li>
            <li className="ullikk" style={{ color: "black" }}>
              <strong>Broad Expertise :</strong>Our team of seasoned cybersecurity experts brings
               extensive experience and knowledge
              to protect your business from evolving cyber threats.
            </li>
            <li className="ullikk" style={{ color: "black" }}>
              <strong>Proactive Approach:</strong> We adopt a proactive approach
              to cyber security, focusing on prevention, detection, and rapid
              response to minimize potential risks.
            </li>
            <li className="ullikk" style={{ color: "black" }}>
              <strong>Cutting-Edge Technology:</strong> We leverage the latest
              technologies and best practices to provide robust and effective
              security solutions.
            </li>
            <li className="ullikk" style={{ color: "black" }}>
              <strong>Customer-Centric</strong> Your security is our priority.
              We work closely with you to ensure your security needs are met,
              and we provide ongoing support and guidance.
            </li>
            <li className="ullikk" style={{ color: "black" }}>
              <strong>Security First:</strong> Our robust security measures
              protect our clients' data from threats and breaches, ensuring
              their information remains safe and secure.
            </li>
          </ul>
        </div>
        <div className="fontm">
          <h3 className="sizem">Contact Us Today!</h3>
        </div>
        <div className="fontm">
          Protect your business with Enormous IT’s comprehensive cyber security
          services.
          <Link
            className="mm"
            to="/Contactus"
            style={{ textDecoration: "none" }}
          >
            {" "}
            Contact us{" "}
          </Link>
          today to learn more about how we can help you secure your digital
          assets and ensure the safety of your. organization! Let Enormous IT be
          your trusted partner in delivering high-quality, reliable, and
          user-friendly software solutions.
        </div>
        <p className=" text-center" style={{ fontWeight: 700 }}>
          <i>
            Secure your future with Enormous IT - your trusted partner in cyber
            security.
          </i>
        </p>
      </div>
    </>
  );
};
export default CyberCK;
