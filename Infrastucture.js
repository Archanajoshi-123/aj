import React, { useEffect, useState } from 'react';
import './Infrastucture.css';
import vps from './images/VPSff.jpg';
import ContactUsPopup from './Popup';

const Infrastructure = () => {
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
                        <img src={vps} className="img-fluid" alt="Technology" />
                        <div className="overlay"></div>
                        <div className="txt" style={{ textAlign: 'left' }}>
                            <h2 className='text-xl text-lg-left text-xl-left'>Virtual Private Server</h2>
                            <p className='Hp text-lg-left text-xl-left'> Power and Privacy in Perfect Balance</p>
                            {/* <div className="d-flex justify-content-left">
                                <button type="button" className="btn btn-outline-light w-auto">Schedule a Free Consultation!</button>
                            </div> */}
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
                    <p className='ptext pd40 wp'>Virtual Private Server (VPS) Hosting Enormous IT offers VPS hosting solutions that provide cost savings and robust infrastructure. Leveraging Tier-4 data centers, our VPS hosting ensures high security, redundant power, and near 100% SLA guaranteed uptime.</p>
                    <div className='d-flex justify-content-center'>
                        <div className='card3'>
                            <p className='ptext1'><strong>Benefits</strong></p>
                            <ul className='t18'>
                                <li className='ullikk'><strong>Cost-Effective: </strong>Lower IT spend compared to traditional dedicated servers.</li>
                                <li className='ullikk'><strong>High Performance:</strong> Access to top-tier infrastructure resources for reliable and scalable operations.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="why-choose mt-4 pd40">
                        <h2 className='why-choosehead'>Why Choose Enormous IT?</h2>
                        <ul>
                            <li className='ullikk'><strong>Top-Tier Security: </strong>Enormous IT employs advanced security measures, ensuring data integrity and protection against cyber threats.</li>
                            <li className='ullikk'><strong>Reliability and Uptime Guarantee:</strong>Our VPS hosting guarantees near 100% SLA uptime, supported by redundant power and infrastructure, minimizing downtime and ensuring continuous operations.</li>
                            <li className='ullikk'><strong>Scalability:</strong>Scalable resources allow businesses to adjust server capacities according to their evolving needs, ensuring optimal performance without overprovisioning.</li>
                            <li className='ullikk'><strong>Expert Support:</strong> Dedicated support teams provide 24/7 monitoring and immediate response to ensure smooth operations and resolve issues promptly.</li>
                        </ul>
                    </div>

                    <p className='ptext wp pd40'>Choosing Enormous IT for VPS hosting means partnering with a provider committed to delivering cost-effective, high-performance solutions tailored to your business needs. Our robust security protocols, and reliable infrastructure ensure your critical applications and data remain secure and accessible at all times. Trust Enormous IT to optimize your IT infrastructure with scalable, dependable VPS hosting solutions that support your business growth and operational efficiency.</p>
                </div>
            </div>
        </div>
    );
}

export default Infrastructure;
