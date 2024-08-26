import "./Testing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import qa from "./images/qamain.jpg";
import qa1 from "./images/qa1.jpg";
import qasmall2 from "./images/qasmall2.jpeg";
import qasmall3 from "./images/qasmall3.jpeg";
import ContactUsPopup from './Popup';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";


function Testing() {


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

    const isSuccessMessage = submitMessage && !submitMessage.includes('Failed');
    console.log("Is success message:", isSuccessMessage); // Log the success message check
    return (
        <div>
            <div className="image-container">
                <img src={qa} className="img-fluid" alt="Technology" />
                <div className="overlay"></div>
                <div className="txt" style={{ textAlign: 'left' }}>
                    <h2 className='text-xl text-lg text-left'> Quality Assurance and Testing Services</h2>
                    <p className='Hp text-lg text-xl-left '> Your Quality, Our Commitment.  </p>

                    <div className="d-flex justify-content-center">
                        {!isPopupOpen && (
                            <div className='d-flex justify-content-left'>
                                <button className="btn btn-outline-light w-auto" onClick={openPopup}>Schedule a Free Consultation!</button>
                                {submitMessage && (
                                    <div className={`submit-message ${isSuccessMessage ? 'success' : 'error'}`}>
                                        {submitMessage}
                                    </div>
                                )}
                            </div>
                        )}
                        <ContactUsPopup isOpen={isPopupOpen} onClose={closePopup} />
                    </div> 

                </div>
            </div>
            {/* <div className="image-container">
        <img className="imgqa" src={qa} alt="Technology" />
        <div className="overlay"></div>
      </div>
      <div>
        <p className="text-xl text-xl-left text-left txtqa ">
          Quality Assurance and Testing Services
        </p>
      </div> */}
            <div className="fontqa" >
                <p >
                    At Enormous IT, we understand that delivering high-quality software is
                    crucial to maintaining competitive advantage and achieving business
                    success. To this end, we offer a comprehensive suite of Quality
                    Assurance (QA) and testing services designed to ensure your software
                    meets the highest standards of quality, performance, and reliability.
                    Our expert team employs a variety of advanced testing methodologies
                    and cutting-edge tools to deliver thorough, efficient, and effective
                    QA processes.
                </p>
            </div>
            <div>
                <p className="wtpqa dflexqa szqa" style={{marginTop:"-15px"}}>
                    Our QA and Testing Services Include
                </p>
            </div>
            <div className="flexqa">
                <div className="flex1qa">
                    <div>
                        <h3 className="szqa padiqa dflexqa" style={{ fontFamily: "Franklin Gothic Medium", fontWeight: "600"}}>Functional Testing</h3>
                        <p className="fontqa">
                            Functional Testing ensures that your software functions as
                            expected under all scenarios. This testing type validates each
                            feature against the specified requirements, guaranteeing that the
                            software performs according to its functional specifications.
                        </p>
                    </div>
                    <div className="card1qa dflexqa">
                        <h4 className="fwqa">Key Activities</h4>
                        <ul className="font1qa">
                            <li>
                                Creating detailed test cases based on functional requirements.
                            </li>
                            <li>Executing test cases and reporting any discrepancies.</li>
                            <li>
                                Performing both positive and negative testing to ensure
                                robustness.
                            </li>
                            <li>
                                Validating user interactions and workflows within the
                                application
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex1qa">
                    <div>
                        <h3 className="szqa dflexqa padiqa" style={{ fontFamily: "Franklin Gothic Medium", fontWeight: "600"}}>Performance Testing</h3>
                        <p className="fontqa">
                            Performance Testing assesses the responsiveness, stability, and
                            scalability of your application under various load conditions. By
                            identifying and addressing performance bottlenecks, we ensure your
                            software can handle expected and peak loads effectively.
                        </p>
                    </div>
                    <div className="card1qa dflexqa">
                        <h4 className="fwqa">Key Activities</h4>
                        <ul className="font1qa">
                            <li>
                                Load testing to evaluate performance under expected user load.
                            </li>
                            <li>
                                Stress testing to determine the application's breaking point.
                            </li>
                            <li>
                                Endurance testing to check the system's behavior under sustained
                                use.
                            </li>
                            <li>
                                Spike testing to assess performance under sudden load increases.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flexqa">
                <div className="flex1qa">
                    <div>
                        <h3 className="szqa padi1qa dflexqa"    style={{ fontFamily: 'Franklin Gothic Medium, Arial Narrow,Arial, sans-serif', fontWeight: 600}}>Automated Testing</h3>
                        <p className="fontqa">
                            Automated Testing implements automated test scripts to accelerate
                            the testing process and increase coverage. By utilizing
                            industry-leading automation tools, we ensure accuracy and
                            efficiency, reducing the time and effort required for repetitive
                            testing tasks.
                        </p>
                    </div>
                    <div className="card1qa dflexqa">
                        <h4 className="fwqa">Key Activities</h4>
                        <ul className="font1qa">
                            <li>Developing and maintaining automated test scripts.</li>
                            <li>Integrating automated tests into the CI/CD pipeline.</li>
                            <li>Executing automated tests and analyzing results.</li>
                            <li>Using tools like Selenium, QTP, and TestComplete.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex1qa">
                    <div>
                        <h3 className="szqa padi1qa dflexqa" style={{ fontFamily:  'Franklin Gothic Medium, Arial Narrow,Arial, sans-serif', fontWeight: 600}}>Regression Testing</h3>
                        <p className="fontqa">
                            Regression Testing conducts thorough tests to confirm that recent
                            changes have not adversely affected existing functionality. By
                            maintaining the integrity of your application through continuous
                            updates, we ensure that new code changes do not introduce new
                            bugs.
                        </p>
                    </div>
                    <div className="card1qa dflexqa">
                        <h4 className="fwqa">Key Activities</h4>
                        <ul className="font1qa">
                            <li>Identifying test cases for regression testing.</li>
                            <li>Running regression test suites after each code change.</li>
                            <li>Reporting and managing any detected defects.</li>
                            <li>Automating regression tests for efficiency.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="dflexqa">
                <img className="midimgqa" src={qa1} alt="Loading" />
            </div>

            <div className="flexqa">
                <div className="flex1qa">
                    <div>
                        <h3 className="szqa padi1qa dflexqa" style={{ fontFamily:  'Franklin Gothic Medium, Arial Narrow,Arial, sans-serif', fontWeight: 600}}>Security Testing</h3>
                        <p className="fontqa">
                            Security Testing identifies vulnerabilities and security flaws
                            within your application. We implement strategies to protect your
                            software from potential threats and breaches, ensuring data
                            integrity and confidentiality.
                        </p>
                    </div>
                    <div className="card1qa dflexqa">
                        <h4 className="fwqa">Key Activities</h4>
                        <ul className="font1qa">
                            <li>
                                Conducting vulnerability assessments and penetration testing.
                            </li>
                            <li>Performing security audits and code reviews.</li>
                            <li>
                                Testing for common security issues like SQL injection, XSS, and
                                CSRF.
                            </li>
                            <li>Using tools like OWASP ZAP and Burp Suite.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex1qa">
                    <div>
                        <h3 className="szqa padi1qa dflexqa" style={{ fontFamily:  'Franklin Gothic Medium, Arial Narrow,Arial, sans-serif', fontWeight: 600}}>Usability Testing</h3>
                        <p className="fontqa">
                            Usability Testing evaluates the user experience to ensure your
                            application is intuitive and user-friendly. By gathering feedback
                            from actual users, we make improvements to enhance user
                            satisfaction and overall usability.
                        </p>
                    </div>
                    <div className="card1qa dflexqa">
                        <h4 className="fwqa">Key Activities</h4>
                        <ul className="font1qa">
                            <li>Creating user personas and test scenarios.</li>
                            <li>Conducting usability testing sessions with real users.</li>
                            <li>Collecting and analyzing user feedback.</li>
                            <li>Making recommendations for UI/UX improvements.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flexqa">
                <div className="flex1qa">
                    <div>
                        <h3 className="szqa padi1qa dflexqa" style={{ fontFamily:  'Franklin Gothic Medium, Arial Narrow,Arial, sans-serif', fontWeight: 600}}>Compatibility Testing</h3>
                        <p className="fontqa">
                            Compatibility Testing verifies that your application performs
                            consistently across different devices, browsers, and operating
                            systems. This ensures a seamless experience for all users,
                            regardless of their platform.
                        </p>
                    </div>
                    <div className="card1qa dflexqa">
                        <h4 className="fwqa">Key Activities</h4>
                        <ul className="font1qa">
                            <li>Testing on various devices and browser combinations.</li>
                            <li>Ensuring compatibility with different operating systems.</li>
                            <li>Identifying and resolving compatibility issues.</li>
                            <li>Using tools like BrowserStack and Sauce Labs.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex1qa">
                    <div>
                        <h3 className="szqa padi1qa dflexqa" style={{ fontFamily:  'Franklin Gothic Medium, Arial Narrow,Arial, sans-serif', fontWeight: 600}}>Mobile Testing</h3>
                        <p className="fontqa">
                            Mobile Testing focuses on testing mobile applications on various
                            devices and operating systems. We ensure optimal performance,
                            usability, and security on mobile platforms, addressing the unique
                            challenges of mobile environments.
                        </p>
                    </div>
                    <div className="card1qa dflexqa">
                        <h4 className="fwqa">Key Activities</h4>
                        <ul className="font1qa">
                            <li>Testing on multiple mobile devices and OS versions.</li>
                            <li>Conducting performance, usability, and security tests.</li>
                            <li>Using mobile testing frameworks and emulators.</li>
                            <li>
                                Ensuring compatibility with different screen sizes and
                                resolutions.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="dflexqa">
                <img className="midimgqa" src={qasmall2} alt="Loading" />
            </div>

            <div className="flexqa">
                <div className="flex1qa">
                    <div>
                        <h3 className="szqa padi1qa dflexqa" style={{ fontFamily:  'Franklin Gothic Medium, Arial Narrow,Arial, sans-serif', fontWeight:600}}>Manual Testing</h3>
                        <p className="fontqa">
                            Manual Testing involves performing detailed manual testing to
                            uncover defects that automated tests might miss. Our experienced
                            QA professionals deliver thorough and meticulous testing to ensure
                            comprehensive coverage.
                        </p>
                    </div>
                    <div className="card1qa dflexqa">
                        <h4 className="fwqa">Key Activities</h4>
                        <ul className="font1qa">
                            <li>
                                Executing test cases manually and observing application
                                behavior.
                            </li>
                            <li>Identifying and reporting any issues or anomalies.</li>
                            <li>Performing exploratory testing to discover edge cases.</li>
                            <li>Validating complex user interactions and workflows.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex1qa">
                    <div>
                        <h3 className="szqa padi1qa dflexqa" style={{ fontFamily: "Franklin Gothic Medium", fontWeight:600}}>API Testing</h3>
                        <p className="fontqa">
                            API Testing validates the functionality, reliability, and
                            performance of your APIs. By ensuring seamless integration between
                            different software components, we help maintain the overall
                            stability and functionality of your application.
                        </p>
                    </div>
                    <div className="card1qa dflexqa">
                        <h4 className="fwqa">Key Activities</h4>
                        <ul className="font1qa">
                            <li>Testing API endpoints for correct functionality.</li>
                            <li>Validating request and response formats.</li>
                            <li>Performing load and security testing on APIs.</li>
                            <li>Using tools like Postman and SoapUI.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flexqa">
                <div className="flex1qa">
                    <div>
                        <h3 className="szqa padi1qa dflexqa" style={{ fontFamily: "Franklin Gothic Medium", fontWeight: 600}}>Load Testing</h3>
                        <p className="fontqa">
                            Load Testing simulates real-world usage to test the application's
                            behavior under peak load conditions. By identifying potential
                            issues that could affect performance during high traffic periods,
                            we help you prepare for peak demand.
                        </p>
                    </div>
                    <div className="card1qa dflexqa">
                        <h4 className="fwqa">Key Activities</h4>
                        <ul className="font1qa">
                            <li>Creating load test scenarios and scripts.</li>
                            <li>Simulating user load and monitoring system performance.</li>
                            <li>Analyzing results to identify performance bottlenecks.</li>
                            <li>Using tools like JMeter and LoadRunner.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex1qa">
                    <div>
                        <h3 className="szqa padi1qa dflexqa" style={{ fontFamily: "Franklin Gothic Medium", fontWeight: 600}}>Acceptance Testing</h3>
                        <p className="fontqa">
                            Acceptance Testing, including User Acceptance Testing (UAT),
                            ensures the application meets end-user expectations. By
                            facilitating a smooth transition from development to production,
                            we confirm that the software is ready for deployment.
                        </p>
                    </div>
                    <div className="card1qa dflexqa">
                        <h4 className="fwqa">Key Activities</h4>
                        <ul className="font1qa">
                            <li>
                                Collaborating with stakeholders to define acceptance criteria.
                            </li>
                            <li>Conducting UAT sessions with end users.</li>
                            <li>Collecting feedback and making necessary adjustments.</li>
                            <li>Ensuring the software meets business requirements.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="dflexqa">
                <img className="midimgqa" src={qasmall3} alt="Loading" />
            </div>
            <div className="flexqa">
                <div className="flex1qa">
                    <div>
                        <h3 className="szqa padi1qa dflexqa" style={{ fontFamily: "Franklin Gothic Medium", fontWeight: 600}}>Continuous Testing</h3>
                        <p className="fontqa">
                            Continuous Testing integrates testing into your CI/CD pipeline for
                            continuous feedback and improvement. By ensuring quality at every
                            stage of the software development lifecycle, we help you deliver
                            high-quality software faster.
                        </p>
                    </div>
                    <div className="card1qa dflexqa">
                        <h4 className="fwqa">Key Activities</h4>
                        <ul className="font1qa">
                            <li>Setting up continuous testing environments.</li>
                            <li>Automating tests to run with every code change.</li>
                            <li>Monitoring test results and addressing issues promptly.</li>
                            <li>Using CI/CD tools like Jenkins and GitLab.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex1qa">
                    <div>
                        <h3 className="szqa padi1qa dflexqa" style={{ fontFamily: "Franklin Gothic Medium", fontWeight: 600}}>Localization Testing</h3>
                        <p className="fontqa">
                            Localization Testing verifies that your application is accurately
                            localized for different regions and languages. By ensuring
                            cultural and linguistic appropriateness, we help you deliver a
                            globally acceptable product.
                        </p>
                    </div>
                    <div className="card1qa dflexqa">
                        <h4 className="fwqa">Key Activities</h4>
                        <ul className="font1qa">
                            <li>Testing localized versions of the application.</li>
                            <li>Ensuring correct translations and regional settings.</li>
                            <li>Validating UI elements for different languages.</li>
                            <li>Using tools like Lingotek and Transifex.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex1qa">
                <div >
                    <h3 className="szqa padi1qa dflexqa " style={{ fontFamily: "Franklin Gothic Medium", fontWeight: 600}}>Data Migration Testing</h3>
                    <p className="fontqa">
                        Data Migration Testing validates the integrity and accuracy of data during migration processes.
                        By ensuring a seamless transition with minimal disruption, we help maintain data consistency and reliability.
                    </p>
                </div>
                <div className="cardqa dflexqa d-flex justify-content-center">
                    <h4 className="fwqa">Key Activities</h4>
                    <ul className="font1qa">
                        <li>Planning and executing data migration tests.</li>
                        <li>Verifying data accuracy and completeness post-migration.</li>
                        <li>Identifying and resolving data migration issues.</li>
                        <li>Ensuring minimal downtime and disruption.</li>
                    </ul>
                </div>
            </div>
            <div className="font2qa" >
                <h3 className="szqa padi1qa  ">Why Choose Enormous IT?</h3>
            </div>
            <div className="padqa" >
                <ul className="font3qa padqa">
                    <li ><strong>Expertise:</strong> Our team of experienced QA professionals is skilled in the latest testing methodologies and tools,
                        ensuring high-quality outcomes for your software projects.</li>
                    <li ><strong>Comprehensive Coverage:</strong> We provide end-to-end testing services to cover all aspects of your application,
                        from functional and performance testing to security and usability testing.</li>
                    <li ><strong>Customized Solutions:</strong> We tailor our QA strategies to meet the specific needs and challenges of your project,
                        ensuring that our solutions align with your business goals and requirements.</li>
                    <li ><strong>Quality Assurance:</strong> We are committed to delivering high-quality software that meets user expectations and business goals,
                        ensuring a seamless and satisfying user experience.</li>
                    <li ><strong>Cost-Effective:</strong> Our efficient testing processes are designed to reduce costs without compromising on quality,
                        providing you with the best value for your investment.</li>
                    <li ><strong>Reliability:</strong> With a proven track record of delivering reliable and robust software solutions,
                        we help you achieve and maintain the highest standards of quality and performance.</li>
                </ul>
            </div>
            <div>
                <p className="fontqa"><Link className="mm" to="/Contactus" style={{textDecoration:'none'}}> {" "}Contact us {" "} </Link> today for comprehensive QA and testing services that ensure the success of your software! Let Enormous IT be your trusted partner
                    in delivering high-quality, reliable, and user-friendly software solutions.</p>
            </div>
        </div>
    );
}

export default Testing;