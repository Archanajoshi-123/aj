
import React, { useEffect, useState } from 'react';
import './BIDW.css';

// images
import bii from './images/bii.jpeg';
import bidw from './images/bidw (1).jpeg';
import bii1 from './images/bii1.jpeg';

import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUsPopup from './Popup';

const Bidw = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [submitMessage, setSubmitMessage] = useState(null);

    const openPopup = () => {
        setIsPopupOpen(true);
        setSubmitMessage(null); // Reset submit message on popup open
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
        <div className='bgaj' >
            <div >
                <div>
                    <div>
                        <div>
                            {/* <div>
                                  <img src={sap} style={{ width: "100%" }} />
                              </div> */}

                            <div>
                             
                                <div className="image-container">
                        <img src={bii1} className="img-fluid" alt="Technology" />
                        <div className="overlay"></div>
                        <div className="txt" style={{ textAlign: 'left' }}>
                            <h2 className='text-xl text-lg text-left'>Business Intelligence and Data Warehousing Services</h2>
                            <p className='Hp text-lg text-xl-left '>Optimize Your Operations Effectively.</p>
                                                     
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

                            </div>
                            <div >
                                <p className='T2baj text-center'>
                                    Transform Data into Insights
                                </p>
                            </div>


                            <div>
                                <p className='T6baj T6b1aj'>
                                    In the digital age, businesses thrive on actionable insights derived from data. Effective Business Intelligence (BI) and Data Warehousing solutions are crucial for organizations looking to enhance decision-making, drive operational efficiencies, and gain a competitive edge. Enormous IT specializes in delivering comprehensive BI and Data Warehousing services tailored to meet diverse business needs.
                                </p>
                            </div>

                            <div >
                                <p className='T2baj text-center'>
                                    Our Expertise
                                </p>
                            </div>


                            <div>
                                <p className='T6baj T6b1aj'>
                                    Enormous IT brings together a team of seasoned BI consultants and engineers with extensive experience across industries. We leverage strategic partnerships with leading software vendors like Oracle and SAP to deliver robust BI solutions that align with your business objectives and drive tangible outcomes.
                                </p>
                            </div>

                            <div >
                                <p className='T2baj text-center'>
                                    Our Services
                                </p>
                            </div>

                            <div >
                                <div >
                                    <div className='flex4baj'>
                                        <div className=" mb-4 ">
                                            <div className='cardb2aj  cb2aj  T6baj'>
                                                <h4 className=" text-center "  style={{fontFamily:"Franklin Gothic Medium"}}><strong>Full Life-Cycle Implementation</strong></h4>
                                                <p >
                                                    Comprehensive project ownership from initial consultation and requirements gathering to deployment and post-implementation support.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 ">
                                            <div className='cardb2aj  cb2aj T6baj'>
                                                <h4 className=" text-center "  style={{fontFamily:"Franklin Gothic Medium"}}><strong>BI Performance Optimization</strong></h4>
                                                <p >
                                                    Enhancing the speed, scalability, and reliability of existing BI systems to maximize ROI and user adoption.
                                                </p>

                                            </div>
                                        </div>


                                        <div className=" mb-4 ">
                                            <div className='cardb2aj cb2aj T6baj'>
                                                <h4 className=" text-center "  style={{fontFamily:"Franklin Gothic Medium"}}><strong>Technology Deployment</strong></h4>
                                                <p >
                                                    Designing and deploying scalable infrastructure tailored to your BI needs, ensuring seamless integration with existing IT environments.
                                                </p>

                                            </div>
                                        </div>

                                    </div>



                                    <div className='flex4baj'>
                                        <div className=" mb-4 ">
                                            <div className='cardb2aj cb2aj T6baj'>
                                                <h4 className=" text-center "  style={{fontFamily:"Franklin Gothic Medium"}}><strong>	Mentored Implementation Projects</strong></h4>
                                                <p >
                                                    Transferring knowledge and expertise to client teams through hands-on mentorship and training programs.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 ">
                                            <div className='cardb2aj cb2aj T6baj'>
                                                <h4 className=" text-center "  style={{fontFamily:"Franklin Gothic Medium"}}><strong>Global Delivery Model</strong></h4>
                                                <p >
                                                    Leveraging a blend of onsite, offshore, and nearshore resources to optimize project timelines and cost-efficiency.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 ">
                                            <div className='cardb2aj cb2aj T6baj'>
                                                <h4 className=" text-center "  style={{fontFamily:"Franklin Gothic Medium"}}><strong>Quick Start and Proof-of-Concept Implementations </strong></h4>
                                                <p >
                                                    Rapid deployment of BI technologies to demonstrate feasibility and ROI before full-scale implementation.
                                                </p>

                                            </div>
                                        </div>

                                    </div>

                                    <div >
                                        <p className='T2baj text-center'>
                                            Why Choose Enormous IT?
                                        </p>
                                    </div>



                                    <div className='flex4b1aj'>
                                        <div className=" mb-4 ">
                                            <div className='cardbaj cb2aj T6baj'>
                                                <h4 className=" text-center "  style={{fontFamily:"Franklin Gothic Medium"}}><strong>	Long-Term Partnerships </strong></h4>
                                                <p >
                                                    We prioritize building enduring relationships with our clients, understanding that true success is achieved through collaboration. Our focus is on developing trust and transparency, allowing us to work together effectively and adapt to your evolving business needs.
                                                </p>
                                            </div>
                                        </div>



                                        <div className=" mb-4 ">
                                            <div className='cardbaj cb2aj T6baj'>
                                                <h4 className=" text-center "  style={{fontFamily:"Franklin Gothic Medium"}}><strong>Scalable and Adaptive Solutions</strong></h4>
                                                <p >
                                                    Our business intelligence (BI) solutions are designed to grow with your organization. Whether you're a startup or an established enterprise, our scalable approach ensures that our services can adjust as your requirements change, enabling you to stay competitive in a dynamic market.
                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='flex4b1aj'>
                                        <div className=" mb-4 ">
                                            <div className='cardbaj cb2aj T6baj'>
                                                <h4 className=" text-center "  style={{fontFamily:"Franklin Gothic Medium"}}><strong>Innovative Technology and Insights</strong></h4>
                                                <p >
                                                    At Enormous IT, we leverage the latest advancements in data analytics and technology to transform your raw data into actionable insights. Our solutions empower you to make informed decisions, optimize operations, and identify new opportunities for growth, driving overall business success.
                                                </p>
                                            </div>
                                        </div>


                                        <div className=" mb-4 ">
                                            <div className='cardbaj cb2aj T6baj'>
                                                <h4 className=" text-center "  style={{fontFamily:"Franklin Gothic Medium"}}><strong>	Dedicated Expertise and Support</strong></h4>
                                                <p >
                                                    Our experienced team is committed to understanding your unique challenges and objectives. We tailor our approach to ensure seamless integration with your existing processes, providing ongoing support and strategic guidance to help you navigate the complexities of today’s digital landscape.
                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                    <div >
                                        <p className='T2baj text-center'>
                                            Our Approach
                                        </p>
                                    </div>

                                    <div>
                                        <p className='T6baj T6b1aj text-center'>
                                            Enormous IT follows a structured BI project delivery methodology that encompasses
                                        </p>
                                    </div>



                                    <div className='flex4b1aj'>
                                        <div className=" mb-4 ">
                                            <div className='cardb1aj cb2aj T6baj'>
                                                <h4 className=" text-center "  style={{fontFamily:"Franklin Gothic Medium"}}><strong>	Requirements Analysis </strong></h4>
                                                <p >
                                                    Thorough assessment of business needs and objectives to define clear BI strategies.
                                                </p>
                                            </div>
                                        </div>



                                        <div className=" mb-4 ">
                                            <div className='cardb1aj cb2aj T6baj'>
                                                <h4 className=" text-center "  style={{fontFamily:"Franklin Gothic Medium"}}><strong>Implementation Strategy Planning</strong></h4>
                                                <p >
                                                    Detailed project planning and roadmap development to ensure alignment with organizational goals.
                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='flex4b1aj'>
                                        <div className=" mb-4 ">
                                            <div className='cardb1aj cb2aj T6baj'>
                                                <h4 className=" text-center "  style={{fontFamily:"Franklin Gothic Medium"}}><strong>Product Selection</strong></h4>
                                                <p >
                                                    Expert guidance in selecting the right BI tools and technologies based on your specific requirements.
                                                </p>
                                            </div>
                                        </div>


                                        <div className=" mb-4 ">
                                            <div className='cardb1aj cb2aj T6baj'>
                                                <h4 className=" text-center "  style={{fontFamily:"Franklin Gothic Medium"}}><strong>	Complete Implementation</strong></h4>
                                                <p >
                                                    End-to-end execution of BI solutions, including data integration, reporting, analytics, and performance management.
                                                </p>
                                            </div>
                                        </div>

                                    </div>



                                    <div className='d-flex justify-content-center'>
                                        <img src={bidw} className=" imabaj " alt='Loading' />
                                    </div>

                                    <div >
                                        <p className='T2baj text-center'>
                                            Value Beyond Cost Savings
                                        </p>
                                    </div>


                                    <div className='flex4baj'>
                                        <div className=" mb-4 ">
                                            <div className='cardb3aj  cb2aj T6baj'>
                                                <h4 className=" text-center "  style={{fontFamily:"Franklin Gothic Medium"}}><strong>Enhanced Decision-Making </strong></h4>
                                                <p >
                                                    Empower stakeholders with real-time insights and predictive analytics to make informed decisions swiftly and confidently.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 ">
                                            <div className='cardb3aj  cb2aj T6baj'>
                                                <h4 className=" text-center "  style={{fontFamily:"Franklin Gothic Medium"}}><strong>Adaptive Architecture</strong></h4>
                                                <p >
                                                    Design flexible and scalable BI architectures that adapt to evolving business needs and data volumes.
                                                </p>
                                            </div>
                                        </div>


                                        <div className=" mb-4 ">
                                            <div className='cardb3aj  cb2aj T6baj'>
                                                <h4 className=" text-center "  style={{fontFamily:"Franklin Gothic Medium"}}><strong>Business Model Innovation(BMI)</strong></h4>
                                                <p >
                                                    Establish a cohesive framework for managing and leveraging critical business information effectively to drive growth and innovation.
                                                </p>

                                            </div>
                                        </div>

                                    </div>



                                    <div >
                                        <p className='T2baj text-center'>
                                            Key Components
                                        </p>
                                    </div>

                                    <div className='flex4baj'>

                                        <div className=" mb-4 ">
                                            <div className='cardb3aj  cb2aj T6baj'>
                                                <h4 className=" text-center "  style={{fontFamily:"Franklin Gothic Medium"}}><strong>ETL for BI/DW Solutions</strong></h4>
                                                <p >
                                                    Efficient extraction, transformation, and loading of diverse data sources into unified BI platforms, ensuring data accuracy and reliability.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 ">
                                            <div className='cardb3aj  cb2aj T6baj'>
                                                <h4 className=" text-center "  style={{fontFamily:"Franklin Gothic Medium"}}><strong>Advanced Analytics</strong></h4>
                                                <p >
                                                    Implementing sophisticated data analytics techniques, including predictive modelling, machine learning, and AI-driven insights.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 ">
                                            <div className='cardb3aj  cb2aj T6baj'>
                                                <h4 className=" text-center "  style={{fontFamily:"Franklin Gothic Medium"}}><strong>Visualization and Reporting</strong></h4>
                                                <p >
                                                    Developing intuitive dashboards, interactive visualizations, and comprehensive reports to facilitate data-driven decision-making at all levels of the organization.
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex4baj'>

                                        <div className=" mb-4">
                                            <div className='cardb3aj  cb2aj T6baj'>
                                                <h4 className=" text-center "  style={{fontFamily:"Franklin Gothic Medium"}}><strong>Data Quality and Cleansing</strong></h4>
                                                <p >
                                                   Implementing robust data quaility practices,including automated cleansing and validation to ensure accurate consistent data for reliable analytics and informed decision making.
                                                </p>

                                            </div>
                                        </div>
                                        <div className=" mb-4 ">
                                            <div className='cardb3aj  cb2aj T6baj'>
                                                <h4 className=" text-center "  style={{fontFamily:"Franklin Gothic Medium"}}><strong>	Data Governance and Security</strong></h4>
                                                <p >
                                                    Implementing robust data governance frameworks and security protocols to protect sensitive information and ensure compliance with industry regulations.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 ">
                                            <div className='cardb3aj  cb2aj T6baj'>
                                                <h4 className=" text-center "  style={{fontFamily:"Franklin Gothic Medium"}}><strong>	Performance Management</strong></h4>
                                                <p >
                                                    Monitoring and optimizing BI system performance to enhance user experience, scalability, and operational efficiency.
                                                </p>

                                            </div>
                                        </div>
                                    </div>


                                    <div className='stylebaj' >
                                        <div>
                                            <img src={bii} className=" imagebaj " alt='Loading' />
                                        </div>
                                        <div className=' T4baj  '>

                                            <p>Enormous IT is dedicated to helping organizations unlock the full potential of their data through innovative BI and Data Warehousing solutions, driving continuous improvement and business success in a rapidly evolving digital landscape.</p>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Bidw;