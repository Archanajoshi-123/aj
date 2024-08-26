import React, { useEffect, useState } from 'react';
import './Mdfinfra.css';
import Iaas from './images/Cloud.jpeg';
import ContactUsPopup from './Popup';
const Iaasinfra = () => {
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
        
            <div className="Ai-card">
                <div className="div1card">
                    <div className="image-container">
                        <img src={Iaas} className="img-fluid" alt="Technology" />
                        <div className="overlay"></div>
                        <div className="txt">
                            <h2 className='text-xl text-lg-center text-xl-left text-center'>IaaS - The Cloud</h2>
                            <p className='Hp text-lg-center text-xl-left text-center'>Simplified. Secured. Superior.</p>
                            
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

                <div className="pa20 p-4 pd40">
                    <p className='ptext pd40 wp'>Infrastructure as a Service (IaaS) Enormous IT offers comprehensive IaaS solutions designed to meet the needs of growing businesses. Our IaaS services provide the essential infrastructure equipment, including storage, hardware, servers, and networking components. We take on the responsibility of housing, running, and maintaining this equipment, allowing our clients to focus on their core business activities while paying on a per-use basis.</p>
                    <div className='d-flex justify-content-center'>
                    <div className='card3'>
                        <p className='ptext1'><strong>Key Benefits</strong></p>
                        <ul className='t18'>
                            <li className='ullikk'><strong>Scalability:</strong> Easily scale resources to meet demand without delays or wastage of capacity.</li>
                            <li className='ullikk'><strong>No Hardware Investment:</strong> Enormous IT handles the setup and maintenance of physical hardware, saving clients time and costs.</li>
                            <li className='ullikk'><strong>Utility-Style Costing:</strong> Clients only pay for the resources they use, ensuring cost-efficiency.</li>
                            <li className='ullikk'><strong>Location Independence:</strong> Access services from any location with an internet connection, subject to security protocols.</li>
                            <li className='ullikk'>Physical Security:<strong></strong>Benefit from the high security of data centers, whether using public or externally hosted private clouds.</li>
                            <li className='ullikk'><strong>No Single Point of Failure:</strong> Redundant configurations ensure service continuity even if one server or an entire data center fails.</li>
                        </ul>
                    </div>
                    </div>
                    <p className='ptext pd40 wp'>Cloud Hosting Our cloud hosting services utilize virtual servers based on pooled resources from physical servers, providing robust, scalable hosting solutions for websites and applications. Virtual Data Centers (VDC) We offer Virtual Data Centers (VDCs), a virtualized network of interconnected servers that enhance cloud hosting capabilities and enterprise IT infrastructure, supporting both private and public cloud implementations.</p>
                    <div className="why-choose mt-4 pd40">
                        <h2 className='why-choosehead'>Why Choose Enormous?</h2>
                        <ul>
                            <li className='ullikk'><strong>Proven Expertise:</strong> With years of experience in the IT industry, Enormous IT has a proven track record of delivering reliable and innovative IaaS solutions.</li>
                            <li className='ullikk'><strong>Customer-Centric Approach:</strong> We prioritize our clients' needs and work closely with them to tailor our services to their specific requirements, ensuring maximum satisfaction.</li>
                            <li className='ullikk'><strong>Advanced Technology:</strong> We leverage the latest advancements in cloud technology to provide our clients with state-of-the-art infrastructure and services.</li>
                            <li className='ullikk'><strong>Global Presence:</strong> Our extensive network of data centers around the world ensures that our clients have access to our services no matter where they are located.</li>
                            <li className='ullikk'><strong>Cost-Effective Solutions:</strong> We offer competitive pricing models that provide exceptional value without compromising on quality or performance.</li>
                            <li className='ullikk'><strong>Security First:</strong> Our robust security measures protect our clients' data from threats and breaches, ensuring their information remains safe and secure.</li>
                        </ul>
                    </div>
                    <p className='wp ptext'>Partnering with Enormous IT for IaaS ensures scalable, reliable, and cost-efficient cloud solutions. With proactive support, robust security, and high-performance resources, we empower your business to grow seamlessly. Trust Enormous IT to deliver flexible IaaS solutions tailored to your needs, optimizing efficiency and driving innovation.</p>
                </div>
            </div>       
    );
}

export default Iaasinfra;
