import React, { useEffect, useState } from "react";
import "./CyberSecurity.css";
import cyb2 from "./images/Cyber_img.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUsPopup from "./Popup";
import { Link } from "react-router-dom";

const CyberSecurity = () => {
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
    <div className="bgRRaj">
      <div>
        <div>
          <div>
            <div>
              <div className="image-container">
                <img src={cyb2} className="img-fluid" alt="Technology" />
                <div className="overlay"></div>
                <div className="txt" style={{ textAlign: "left" }}>
                  <h2 className="text-xl text-lg text-left">
                    Cyber Security Services
                  </h2>
                  <p className="Hp text-lg text-xl-left ">
                    Protecting Your Digital Space{" "}
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
              <p className="T81Raj text-center">
                Comprehensive Cyber Security Solutions
              </p>
              <p
                className="T8Raj"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                In today’s digital age, protecting your business from cyber
                threats is more critical than ever. At Enormous IT, we offer a
                full spectrum of cyber security services designed to safeguard
                your digital assets and ensure the integrity, confidentiality,
                and availability of your data. Our comprehensive solutions are
                tailored to meet the unique needs of your organization,
                providing you with peace of mind and allowing you to focus on
                your core business operations.
              </p>
              <div className="row ">
                <div className="col dcharm">
                  <div className="">
                    <div className="flex83Raj " style={{ paddingLeft: "20px" }}>
                      <div className=" mb-4">
                        <div className="card12Raj  cb2Raj  padRaj  T8Raj ccardwid">
                          <h4
                            className=" text-center "
                            style={{ fontFamily: "Franklin Gothic Medium" }}
                          >
                            <strong>
                              Threat Assessment and Risk Management
                            </strong>
                          </h4>
                          <p>
                            Our experts conduct thorough assessments to identify
                            potential vulnerabilities in your systems. We
                            provide detailed reports and actionable
                            recommendations to mitigate risks and enhance your
                            security posture.
                          </p>
                        </div>
                      </div>

                      <div className=" mb-4">
                        <div className="card12Raj  cb2Raj  padRaj  T8Raj ccardwid">
                          <h4
                            className=" text-center "
                            style={{ fontFamily: "Franklin Gothic Medium" }}
                          >
                            <strong>Network Security</strong>
                          </h4>
                          <p>
                            Protect your network infrastructure from
                            unauthorized access, data breaches, and other cyber
                            threats. Our services include firewalls, intrusion
                            detection systems (IDS), intrusion prevention
                            systems (IPS), and virtual private networks (VPN).
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex83Raj " style={{ paddingLeft: "15px" }}>
                      <div className=" mb-4">
                        <div className="card12Raj  cb2Raj  padRaj  T8Raj ccardwid">
                          <h4
                            className=" text-center "
                            style={{ fontFamily: "Franklin Gothic Medium" }}
                          >
                            <strong>Endpoint Security</strong>
                          </h4>
                          <p>
                            Ensure the protection of all endpoints, including
                            desktops, laptops, mobile devices, and servers. We
                            deploy advanced endpoint protection solutions to
                            detect, prevent, and respond to cyber threats.
                          </p>
                        </div>
                      </div>

                      <div className=" mb-4">
                        <div className="card12Raj  cb2Raj  padRaj  T8Raj ccardwid">
                          <h4
                            className=" text-center "
                            style={{ fontFamily: "Franklin Gothic Medium" }}
                          >
                            <strong> Data Protection and Encryption</strong>
                          </h4>
                          <p>
                            Safeguard your sensitive data with our encryption
                            services. We help you implement robust encryption
                            protocols to protect data at rest, in transit, and
                            in use, ensuring compliance with regulatory
                            requirements.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex83Raj " style={{ paddingLeft: "15px" }}>
                      <div className=" mb-4 ">
                        <div className="card12Raj  cb2Raj  padRaj  T8Raj ccardwid">
                          <h4
                            className=" text-center "
                            style={{ fontFamily: "Franklin Gothic Medium" }}
                          >
                            <strong>
                              Identity and Access Management (IAM)
                            </strong>
                          </h4>
                          <p>
                            Control and manage user access to critical
                            information within your organization. Our IAM
                            solutions include multi-factor authentication (MFA),
                            single sign-on (SSO), and role-based access control
                            (RBAC).
                          </p>
                        </div>
                      </div>

                      <div className=" mb-4">
                        <div className="card12Raj  cb2Raj  padRaj  T8Raj ccardwid">
                          <h4
                            className=" text-center "
                            style={{ fontFamily: "Franklin Gothic Medium" }}
                          >
                            <strong>
                              Security Information and Event Management (SIEM)
                            </strong>
                          </h4>
                          <p>
                            Gain comprehensive visibility into your security
                            landscape with our SIEM solutions. We provide
                            real-time monitoring, log management, and advanced
                            analytics to detect and respond to security
                            incidents promptly.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex83Raj " style={{ paddingLeft: "15px" }}>
                      <div className=" mb-4">
                        <div className="card12Raj  cb2Raj  padRaj  T8Raj">
                          <h4
                            className=" text-center "
                            style={{ fontFamily: "Franklin Gothic Medium" }}
                          >
                            <strong>Performance Optimization</strong>
                          </h4>
                          <p>
                            Continuously monitoring and optimizing the
                            performance of SAP cloud solutions using advanced
                            analytics and monitoring tools to ensure optimal
                            system performance and responsiveness.
                          </p>
                        </div>
                      </div>
                      <div className=" mb-4">
                        <div className="card12Raj  cb2Raj  padRaj  T8Raj">
                          <h4
                            className=" text-center "
                            style={{ fontFamily: "Franklin Gothic Medium" }}
                          >
                            <strong>Cost Management</strong>
                          </h4>
                          <p>
                            Implementing cost management strategies to optimize
                            cloud expenditure, ensuring payment only for the
                            resources used while leveraging the cost-efficiency
                            of the cloud.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="T81Raj text-center">Why Choose Enormous IT ?</p>

                  <div>
                    <ul className="T8Raj" style={{ marginLeft: "50px" }}>
                      <li className="ullikkRaj">
                        <strong>Expertise :</strong>Our team of seasoned cyber
                        security professionals brings extensive experience and
                        knowledge to protect your business from evolving cyber
                        threats.
                      </li>
                      <li className="ullikkRaj">
                        <strong>Tailored Solutions:</strong> We understand that
                        every organization is unique. Our solutions are
                        customized to address your specific security challenges
                        and requirements.
                      </li>
                      <li className="ullikkRaj">
                        <strong>Proactive Approach:</strong> We adopt a
                        proactive approach to cyber security, focusing on
                        prevention, detection, and rapid response to minimize
                        potential risks.
                      </li>
                      <li className="ullikkRaj">
                        <strong>Cutting-Edge Technology:</strong> We leverage
                        the latest technologies and best practices to provide
                        robust and effective security solutions.
                      </li>
                      <li className="ullikkRaj">
                        <strong>Customer-Centric</strong> Your security is our
                        priority. We work closely with you to ensure your
                        security needs are met, and we provide ongoing support
                        and guidance.
                      </li>
                      <li className="ullikkRaj">
                        <strong>Security First:</strong> Our robust security
                        measures protect our clients' data from threats and
                        breaches, ensuring their information remains safe and
                        secure.
                      </li>
                    </ul>
                  </div>

                  <p className="T81Raj text-center">Contact Us Today!</p>
                  <div className="style3Raj">
                    <div className=" T43Raj  ">
                      <p style={{ marginLeft: "25px" }}>
                        {" "}
                        Protect your business with Enormous IT’s comprehensive
                        cyber security services.{" "}
                        <Link
                          to="/contactus"
                          style={{ textDecoration: "none" }}
                        >
                          {" "}
                          Contact us{" "}
                        </Link>{" "}
                        today to learn more about how we can help you secure
                        your digital assets and ensure the safety of your
                        .organization! Let Enormous IT be your trusted partner
                        in delivering high-quality, reliable, and user-friendly
                        software solutions.
                      </p>
                    </div>
                  </div>

                  <p className=" text-center" style={{ fontWeight: 700 }}>
                    <i>
                      Secure your future with Enormous IT - your trusted partner
                      in cyber security.
                    </i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurity;
