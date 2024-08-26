import React, { useEffect, useState } from 'react';
import './Mdfinfra.css';
import mds from './images/Mds.jpeg';
import ContactUsPopup from './Popup';
const Mdsinfra = () => {
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
                        <img src={mds} className="img-fluid" alt="Technology" />
                        <div className="overlay"></div>
                        <div className="txt">
                            <h2 className='text-xl text-lg-center text-xl-left text-center'>Managed Dedicated Server</h2>
                            <p className='Hp text-lg-center text-xl-left text-center'>Tailored Performance, Total Control.</p>
                            {/* <div className="d-flex justify-content-center">
                                <button type="button" className="btn btn-outline-light w-auto">Schedule a Free Consultation!</button>
                            </div> */}
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
                </div>
                <div className="pa20 p-4">
                    <p className='ptext pd40 wp'>Managed Dedicated Server Enormous IT’s managed dedicated server solutions eliminate the need for in-house server administration. We handle OS and software updates, database management, security scans, and backup services, allowing clients to focus on core business activities.</p>
                    <div className='d-flex justify-content-center'>
                    <div className='card3'>
                        <p className='ptext1'><strong>Benefits</strong></p>
                        <ul className='t18'>
                            <li className='ullikk'><strong>Freedom from Server Management: </strong> Allows businesses to focus on strategic initiatives rather than IT maintenance.</li>
                            <li className='ullikk'><strong>Cost Savings: </strong>Reduces operational costs associated with server management and administration.</li>
                        </ul>
                    </div>
</div>

                    <div className="why-choose mt-4 pd40">
                        <h2 className='why-choosehead'>Why Choose Enormous?</h2>
                        <ul>
                            <li className='ullikk'><strong>Expertise and Reliability: </strong>Enormous IT boasts extensive expertise in managing dedicated servers, ensuring optimal performance, security, and reliability for mission-critical applications.</li>
                            <li className='ullikk'><strong>Comprehensive Management:</strong>From OS updates to security scans and backups, our managed services cover all aspects of server administration, minimizing risks and ensuring compliance with industry standards.</li>
                            <li className='ullikk'><strong>Scalable Solutions:</strong>We offer scalable solutions that grow with your business, providing flexibility to adapt to changing demands and technological advancements.</li>
                            <li className='ullikk'><strong>24/7 Support:</strong>Dedicated support teams provide round-the-clock monitoring and immediate response to issues, ensuring maximum uptime and operational continuity.</li>
                        </ul>
                    </div>

                    <p className='ptext wp pd40'>Choosing Enormous IT for managed dedicated server solutions means entrusting your critical IT infrastructure to a reliable partner with a proven track record in server management and support. Our proactive approach, coupled with advanced technologies and dedicated support, ensures your servers operate at peak performance, allowing you to focus on driving business growth and innovation. Partner with Enormous IT to experience streamlined operations, cost savings, and enhanced productivity through our managed dedicated server solutions.</p>
                </div>
            </div>
        </div>
    );
}

export default Mdsinfra;
