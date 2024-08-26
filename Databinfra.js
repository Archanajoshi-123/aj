import React, { useEffect, useState } from 'react';
import './Mdfinfra.css';
import Databackupimg from './images/Databackup.jpeg';
import ContactUsPopup from './Popup';
const Databackup = () => {
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
                        <img src={Databackupimg} className="img-fluid" alt="Technology" />
                        <div className="overlay"></div>
                        <div className="txt">
                            <h2 className='text-xl text-lg-center text-xl-left text-center'>Data Backup </h2>
                            <p className='Hp text-lg-center text-xl-left text-center'>Your Data's Best Defense</p>
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
                    <p className='ptext wp pd40'>Online Data Backup Solution Enormous IT’s online data backup solution is designed for simplicity and reliability. With a user-friendly interface, it allows for easy self-service backups and restores, protecting against file corruption, accidental deletion, hardware failure, and lost devices.</p>
                    <div className='d-flex justify-content-center'>
                    <div className='card3'>
                        <p className='ptext1'><strong>Benefits</strong></p>
                        <ul className='t18'>
                            <li className='ullikk'><strong>User-Friendly:  </strong>Intuitive interface encourages users to manage their own backups.</li>
                            <li className='ullikk'><strong>Comprehensive Protection:  </strong> Supports various data types and applications, ensuring comprehensive data security.</li>
                        </ul>
                    </div>
</div>
                    <div className="why-choose mt-4 pd40">
                        <h2 className='why-choosehead'>Why Choose Enormous?</h2>
                        <ul>
                            <li className='ullikk'><strong>Simplicity and Reliability: </strong>Enormous IT prioritizes simplicity and reliability in its online data backup solutions, providing businesses with easy-to-use tools that deliver dependable data protection.</li>
                            <li className='ullikk'><strong>Scalability:</strong> Our solutions scale seamlessly to accommodate growing data volumes and evolving business needs, ensuring long-term data resilience and accessibility.</li>
                            <li className='ullikk'><strong>Secure Infrastructure:</strong> Utilizes advanced encryption standards and secure data handling practices to protect sensitive information against unauthorized access or breaches.</li>
                            <li className='ullikk'><strong>Expert Support:</strong> Dedicated support teams offer proactive monitoring, rapid response, and ongoing assistance to optimize backup strategies and mitigate potential risks.</li>
                        </ul>
                    </div>
                    <p className='ptext wp pd40'>By choosing Enormous IT for your online data backup needs, you gain access to a trusted partner committed to safeguarding your critical information. Our user-centric approach, coupled with robust infrastructure and expert support, ensures your data remains protected and accessible, empowering your business with confidence and continuity. Trust Enormous IT to provide reliable online data backup solutions that meet your unique requirements and exceed your expectations.</p>
                </div>
            </div>
        </div>
    );
}

export default Databackup;
