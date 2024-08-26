import React, { useEffect, useState } from 'react';
import './Mdfinfra.css';
import Zero from './images/Zero.jpeg';
import ContactUsPopup from './Popup';
import './Forp.css';
import ScrollTracker from './Scrolltracker';
const Zerodata = () => {
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
                <div className="image-container">
                    <img src={Zero} className="img-fluid" alt="Technology" />
                    <div className="overlay"></div>
                    <div className="txt">
                        <h2 className='text-xl text-lg-center text-xl-left text-center'>Zero Data Loss</h2>
                        <p className='Hp text-lg-center text-xl-left text-center'>Guarding Data, Ensuring Continuity</p>
                        <div className="d-flex justify-content-center">
                            {!isPopupOpen && (
                                <div>
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
                <div className="pa20 p-4">
                    <p className='ptext pd40 wp'>Zero Data Loss (ZDL) Enormous IT’s ZDL solutions offer the highest level of data protection available. Using redundant Disaster Recovery (DR) on Demand, data center backups, global load balancing, and low-latency connections, we ensure virtually no data loss.</p>
                    <div className='d-flex justify-content-center'>
                        <div className='card3'>
                            <p className='ptext1'><strong>Benefits</strong></p>
                            <ul className='t18'>
                                <li className='ullikk'><strong>Advanced Protection:  </strong> Implements 2-way or 3-way redundant DR for data integrity.</li>
                                <li className='ullikk'><strong>Cost-Effective: </strong> Democratized ZDL makes robust data protection accessible to a wider range of companies.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="why-choose mt-4 pd40">
                        <p className='why-choosehead'>Why Choose Enormous?</p>
                        <ul>
                            <li className='ullikk'><strong>Leading-edge Technology:</strong>Enormous IT leverages cutting-edge technologies and best practices to deliver ZDL solutions that exceed industry standards, ensuring maximum data security and reliability.</li>
                            <li className='ullikk'><strong>Scalability and Flexibility:</strong> Our ZDL solutions are scalable to meet the evolving needs of businesses, accommodating growth and technological advancements seamlessly.</li>
                            <li className='ullikk'><strong>Expert Support:</strong> Dedicated teams provide proactive monitoring, rapid response, and ongoing support to maintain data integrity and operational continuity.</li>
                            <li className='ullikk'><strong>Industry Leadership:</strong>With a proven track record in data protection and disaster recovery, Enormous IT stands out as a trusted partner for businesses seeking robust ZDL solutions.</li>
                        </ul>
                    </div>

                    <p className='ptext wp pd40'>Choosing Enormous IT for Zero Data Loss solutions means entrusting your critical data to a provider with a demonstrated commitment to security, reliability, and innovation. Our tailored ZDL strategies, backed by advanced technologies and expert support, ensure your business maintains uninterrupted operations and data integrity, even in the face of unforeseen challenges. Partner with Enormous IT to safeguard your data with confidence and focus on driving your business forward.</p>
                </div>
            </div>
            <ScrollTracker />
        </div>
    );
}
export default Zerodata;
