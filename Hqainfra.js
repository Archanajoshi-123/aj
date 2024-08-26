import React, { useEffect, useState } from 'react';
import './Mdfinfra.css';
import has from './images/Highq.jpeg';
import ContactUsPopup from './Popup';
const Hqainfra = () => {
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
                        <img src={has} className="img-fluid" alt="Technology" />
                        <div className="overlay"></div>
                        <div className="txt">
                            <h2 className='text-xl text-lg-center text-xl-left text-center'>High Availability Solutions</h2>
                            <p className='Hp text-lg-center text-xl-left text-center'>Continuous Uptime, Uncompromised Performance</p>
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
                    <p className='ptext pd40 wp'>High Availability (HA) Enormous IT provides HA solutions to meet the increasing demands for system availability and ensure business continuity. Our HA solutions are designed to capture and replicate changes to data and applications in real time, enabling seamless failover and minimal disruption.</p>
                    <div className='d-flex justify-content-center'>
                    <div className='card3'>
                        <p className='ptext1'><strong>Benefits</strong></p>
                        <ul className='t18'>
                            <li className='ullikk'><strong>Real-Time Replication:  </strong> Continuous protection of data with minimal downtime.</li>
                            <li className='ullikk'><strong>Scalable and Application-Independent: </strong> Scalable and Application-Independent: Suitable for virtualized and clustered environments, ensuring flexibility.</li>
                            <li className='ullikk'><strong>Legacy Systems Compatibility: </strong> Works with both older and cutting-edge technologies, accommodating diverse IT environments.</li>
                        </ul>
                    </div>
</div>
                    <div className="why-choose mt-4 pd40">
                        <h2 className='why-choosehead'>Why Choose Enormous?</h2>
                        <ul>
                            <li className='ullikk'><strong>Proven Reliability:</strong>  Enormous IT has a track record of delivering highly reliable HA solutions that ensure business continuity, even in the face of unexpected disruptions.</li>
                            <li className='ullikk'><strong>Customized Solutions:</strong> We tailor HA solutions to meet the specific needs and scalability requirements of businesses across various industries, optimizing performance and efficiency.</li>
                            <li className='ullikk'><strong>Advanced Technology Integration:</strong>Leveraging advanced technologies, including real-time replication and automated failover mechanisms, we minimize downtime and maximize system uptime.</li>
                            <li className='ullikk'><strong>Comprehensive Support:</strong> Our dedicated support teams provide 24/7 monitoring and proactive maintenance, ensuring immediate response and resolution to mitigate potential risks.</li>
                        </ul>

                    </div>
                    <p className='ptext wp pd40'>Partnering with Enormous IT for High Availability solutions guarantees your business uninterrupted operations and resilience against system failures. Our expertise in delivering customized, scalable solutions, coupled with advanced technology integration and round-the-clock support, ensures your critical systems remain available and reliable at all times. Trust Enormous IT to safeguard your business continuity effectively and efficiently.</p>
                </div>
            </div>
        </div>
    );
}

export default Hqainfra;
