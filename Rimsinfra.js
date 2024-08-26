import React, { useEffect, useState } from 'react';
import './Mdfinfra.css';
import rims from './images/RIMSFf.jpeg';
import ContactUsPopup from './Popup';
const Rimsinfra = () => {

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
                        <img src={rims} className="img-fluid" alt="Technology" />
                        <div className="overlay"></div>
                        <div className="txt">
                            <h2 className='text-xl text-lg-center text-xl-left text-center'>Remote Infrastructure Monitoring Services</h2>
                            <p className='Hp text-lg-center text-xl-left text-center'>Monitoring Excellence, Anytime, Anywhere.</p>
                            {/* <div className="d-flex justify-content-center">
                                <button type="button" className="btn btn-outline-light w-auto">Reach Out Now!</button>
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
                <div className="pa20 p-4">
                    <p className='ptext wp pd40'>Remote Infrastructure Monitoring Services (RIMS) Enormous IT’s RIMS provides 24/7 monitoring and management of critical IT infrastructure. Our services enhance performance, optimize efficiency, and reduce operational costs by leveraging global resources and industry-standard processes.</p>
                    <div className='d-flex justify-content-center'>
                    <div className='card3 w-75 p-4'>
                        <p className='ptext1'><strong>Capabilities</strong></p>
                        <ul className='t18'>
                            <li className='ullikk'><strong>Operating Systems: </strong> Monitoring and managing OS resources to ensure optimal performance.</li>
                            <li className='ullikk'><strong>Storage and Database Systems: </strong> Ensuring availability and performance of storage and database systems.</li>
                            <li className='ullikk'><strong>End-User Applications and Devices: </strong> Supporting and managing business-critical applications and devices.</li>
                            <li className='ullikk'><strong>Collaboration and Messaging Systems:  </strong> Managing communication platforms for seamless business operations.</li>
                            <li className='ullikk'><strong>Network Infrastructure: </strong> Monitoring and managing OS resources to ensure optimal performance.</li>
                            <li className='ullikk'><strong>Storage and Database Systems: </strong> Ensuring robust and reliable network performance to support business continuity.</li>
                        </ul>
                    </div>
</div>

                    <div className="why-choose mt-4 pd40">
                        <h2 className='why-choosehead'>Why Choose Enormous?</h2>
                        <ul>
                            <li className='ullikk'><strong>Proactive Monitoring and Management: </strong>Enormous IT employs proactive monitoring tools and industry-standard processes to detect and resolve issues before they impact business operations, ensuring uninterrupted service delivery.</li>
                            <li className='ullikk'><strong>Global Resources:</strong>Leveraging global resources and expertise, we provide scalable solutions that adapt to diverse IT environments and support global business operations effectively.</li>
                            <li className='ullikk'><strong>Cost Efficiency:</strong>Our RIMS solutions optimize IT infrastructure management costs by preventing downtime and minimizing the need for reactive support interventions.</li>
                            <li className='ullikk'><strong>Comprehensive Support:</strong> Dedicated teams offer 24/7 monitoring and management, ensuring rapid response and resolution of issues to maintain high availability and performance.</li>
                        </ul>
                    </div>

                    <p className='ptext wp pd40'>Partnering with Enormous IT for Remote Infrastructure Monitoring Services (RIMS) guarantees proactive management of your critical IT assets. Our commitment to leveraging global resources, optimizing efficiency, and delivering cost-effective solutions ensures your infrastructure operates at peak performance. Trust Enormous IT to safeguard your IT investments and enhance business productivity with reliable RIMS solutions tailored to your specific needs.</p>
                </div>
            </div>
        </div>
    );
}

export default Rimsinfra;
