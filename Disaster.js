import React, { useEffect, useState } from 'react';
import './Mdfinfra.css';
import Disasterimg from './images/Disasterr.jpeg';
import ContactUsPopup from './Popup';
const Disaster = () => {
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
        <div>
            <div className="Ai-card">
                <div className="div1card">
                    <div className="image-container">
                        <img src={Disasterimg} className="img-fluid" alt="Technology" />
                        <div className="overlay"></div>
                        <div className="txt" style={{ textAlign: 'left' }}>
                            <h2 className='text-xl text-lg text-left'>Disaster Recovery On Demand</h2>
                            <p className='Hp text-lg text-xl-left '>Your Safety Net in the Cloud</p>
                                                     
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
                <div className="pa20 p-4">
                    <p className='ptext pd40 wp'>Cloud-Based Disaster Recovery (DR) Enormous IT’s cloud-based DR services ensure business continuity by preventing costly disruptions from disasters. Utilizing virtualized cloud platforms, we synchronize state from the primary site to the cloud under normal conditions, provisioning full resources only when a disaster occurs.</p>
                    <div className='d-flex justify-content-center'>
                        <div className='card3'>
                            <p className='ptext1'><strong>Key Requirements for Effective DR Service</strong></p>
                            <ul className='t18'>
                                <li className='ullikk'><strong>Hot Backup Site:</strong>Mirrored stand-by servers provide minimal Recovery Time Objective (RTO) and Recovery Point Objective (RPO) with synchronous replication.</li>
                                <li className='ullikk'><strong>Warm Backup Site: </strong> State is kept up to date with synchronous or asynchronous replication. Standby servers are available for quick activation.</li>
                                <li className='ullikk'><strong>Cold Backup Site:</strong> Periodic data replication with delayed server availability results in higher RTO and RPO, suitable for low-cost applications.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className='card3'>
                            <p className='ptext1'><strong>Benefits</strong></p>
                            <ul className='t18'>
                                <li className='ullikk'><strong>Cost-Effective: </strong>Pay only for resources used during a disaster.</li>
                                <li className='ullikk'><strong>Rapid Recovery:</strong> Automated virtualization platforms enable quick resource provisioning, minimizing downtime.</li>
                                <li className='ullikk'><strong>Comprehensive Support: </strong>Ensures all critical apps and data are protected through detailed resource and recovery method planning.</li>

                            </ul>
                        </div>
                    </div>
                    <div className="why-choose mt-4 pd40">
                        <h2 className='why-choosehead'>Why Choose Enormous?</h2>
                        <ul>
                            <li className='ullikk'><strong>Proven Expertise in Critical Situations:</strong> Enormous IT excels in managing high-stakes disaster recovery scenarios, delivering solutions that ensure swift and reliable recovery of critical business operations.</li>
                            <li className='ullikk'><strong>Tailored Solutions for Every Scenario:</strong>  We customize disaster recovery plans to fit the unique needs and regulatory requirements of different industries, providing targeted solutions that maximize resilience.</li>
                            <li className='ullikk'><strong>Global Reach and Redundancy:</strong> With a global network of secure data centers and redundant infrastructure, we offer unparalleled reliability and continuity, crucial during regional or global disruptions.</li>
                            <li className='ullikk'><strong>Cutting-Edge Technologies:</strong> Leveraging advanced technologies such as AI-driven analytics and automated recovery processes, we optimize recovery times and minimize data loss.</li>
                            <li className='ullikk'><strong>24/7 Support and Monitoring:</strong> We offer competitive pricing models that provide exceptional value without compromising on quality or performance.</li>
                            <li className='ullikk'><strong>Security First:</strong>  Our dedicated support teams provide round-the-clock monitoring and immediate response capabilities, ensuring minimal downtime and maximum operational uptime.</li>
                        </ul>
                    </div>

                    <p className='ptext wp pd40'>Partnering with Enormous IT for cloud-based disaster recovery ensures your business is prepared for any disruption. Our expertise, global infrastructure, and commitment to leveraging cutting-edge technologies guarantee rapid recovery, data security, and uninterrupted operations. With tailored solutions that meet regulatory standards and industry-specific requirements, we safeguard your business continuity effectively and efficiently.</p>
                </div>

            </div>
        </div>
    );
}

export default Disaster;
