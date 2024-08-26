import React, { useEffect, useState } from 'react';

import './Ai.css';
import ContactUsPopup from './Popup';
import bii from './images/AIhands.jpeg';
import { Link } from 'react-router-dom';

// AI images
import NLP from './AIimages/NLP.png';
import ML from './AIimages/MLf.png';
import DE from './AIimages/DEf.png';
import CV from './AIimages/CVf.png';
import MA from './AIimages/Automation.png';
import CC from './AIimages/cognitivef.png';
import BA from './AIimages/Bigdata.png';
import RS from './AIimages/imagers.png';

const Ai = () => {

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 20, // Adjust this value to account for header height or padding
                behavior: 'smooth'
            });
        }
    };

    const cards = [
        { title: 'Natural Language Processing', imgSrc: NLP, sectionId: 'NLP' },
        { title: 'Machine Learning', imgSrc: ML, sectionId: 'MachineLearning' },
        { title: 'Data Engineering', imgSrc: DE, sectionId: 'DataEngineering' },
        { title: 'Computer Vision', imgSrc: CV, sectionId: 'ComputerVision' },
        { title: 'Marketing Automation', imgSrc: MA, sectionId: 'MarketingAutomation' },
        { title: 'Big Data Analytics', imgSrc: BA, sectionId: 'BigDataAnalytics' },
        { title: 'Recommendation Systems', imgSrc: RS, sectionId: 'RecommendationSystems' },
        { title: 'Cognitive Computing', imgSrc: CC, sectionId: 'CognitiveComputing' }
    ];


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
        <div style={{ backgroundColor: 'rgb(227 227 228)' }}>
            <div className="Ai-card">
                <div className="image-container">
                    <img src={bii} className="img-fluid" alt="Technology" />
                    <div className="overlay"></div>
                    <div className="txt" style={{ textAlign: 'left' }}>
                        <h2 className='text-xl text-xl-left text-left'>Artificial Intelligence</h2>
                        <p className='Hp text-xl-left text-left'>Pioneering Tomorrow's Solutions Today</p>
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
                <div className="text-center mt-4">
                    <p className="ap">Our team of seasoned AI consultants and highly-skilled engineers brings deep expertise, having been core developers in leading AI projects. Enormous IT excels in utilizing cutting-edge AI technologies to deliver customized solutions that meet your business needs.</p>
                </div>

                <div>
            <h1 className="section-title ta">AI Services</h1>
            <div className="ai-image-cards-container">
                {cards.map((card, index) => (
                    <div key={index} className="ai-image-card-container">
                        <h2 className="ai-image-card-title">{card.title}</h2>
                        <div className="ai-image-card" onClick={() => scrollToSection(card.sectionId)}>
                            <img src={card.imgSrc} alt={card.title} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="ai-container mt-4 pa20 row">
                <div className="col-md-12" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    {[
                        { name: 'Natural Language Processing (NLP)', id: 'NLP', details: [
                            'Text Analysis: Extracting insights from textual data.',
                            'Sentiment Analysis: Understanding customer sentiments and feedback.',
                            'Chatbots and Virtual Assistants: Developing AI-powered tools to improve customer interactions.'
                        ]},
                        { name: 'Machine Learning', id: 'MachineLearning', details: [
                            'Predictive Analytics: Leveraging machine learning for accurate forecasts and predictions.',
                            'Real-Time Data Processing: Advanced algorithms for real-time analytics and decision-making.',
                            'Anomaly Detection: Identifying unusual patterns and behaviors in data.'
                        ]},
                        { name: 'Data Engineering', id: 'DataEngineering', details: [
                            'Data Pipelines: Build efficient systems for data collection and processing.',
                            'Data Integration: Merge data from various sources into a unified system.',
                            'Data Quality: Ensure data accuracy through ongoing monitoring and cleansing.'
                        ]},
                        { name: 'Computer Vision', id: 'ComputerVision', details: [
                            'Image and Video Analysis: AI-driven solutions for processing and interpreting visual data.',
                            'Facial Recognition: Advanced algorithms for identifying and verifying individuals.',
                            'Object Detection: Identifying and classifying objects in images and videos.'
                        ]},
                        { name: 'Marketing Automation', id: 'MarketingAutomation', details: [
                            'Campaign Management: Automate and streamline marketing campaigns across multiple channels.',
                            'Lead Nurturing: Personalize engagement to guide leads through the sales process.',
                            'Performance Analytics: Monitor and optimize campaign performance for better results.'
                        ]},
                        { name: 'Big Data Analytics', id: 'BigDataAnalytics', details: [
                            'Data Mining: Extracting valuable information from large datasets.',
                            'Pattern Recognition: Detecting patterns and trends in data.',
                            'AI for Business Intelligence: Enhancing BI tools with AI capabilities for deeper insights.'
                        ]},
                        { name: 'Recommendation Systems', id: 'RecommendationSystems', details: [
                            'Personalized Recommendations: Tailored suggestions for users based on their behavior.',
                            'Content Filtering: AI-driven filtering of relevant content for users.'
                        ]},
                        { name: 'Cognitive Computing', id: 'CognitiveComputing', details: [
                            'Natural Language Processing: Enable systems to understand and process human language.',
                            'Machine Learning: Use algorithms to detect patterns and predict outcomes.',
                            'Intelligent Systems: Implement technologies that replicate human thinking and decision-making.'
                        ]}
                    ].map((service, index) => (
                        <div id={service.id} className='d-flex justify-content-center' key={index}>
                            <div className="ai-services mb-4 cb2">
                                <h3 className='cc k3cardhead'>{service.name}</h3>
                                <ul>
                                    {service.details.map((detail, i) => (
                                        <li className='ullikk' key={i} style={{ textAlign: 'left' }}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
                <div className="mt-4 pa20">
                    <h3 className="hh3">Advanced AI Algorithms</h3>
                    <div className="row synkp">
                        <div className="col-md-4 mb-3">
                            <div className="card3 ai-card p-3 cb1">
                                <strong>Deep Learning</strong>
                                <p>Utilizing neural networks for complex problem-solving.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card3 ai-card p-3 cb1">
                                <strong>Reinforcement Learning</strong>
                                <p>Implementing algorithms that learn through interactions.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card3 ai-card p-3 cb1">
                                <strong>AI for IoT</strong>
                                <p>Integrating AI with IoT devices for smarter solutions.</p>
                            </div>
                        </div>
                    </div>

                    <h3 className="hh3 at">AI Consulting Services</h3>
                    <div className="row">
                        <div className="col-md-4 mb-3 ">
                            <div className="card3 ai-card p-3 cb">
                                <strong>Strategic AI Planning</strong>
                                <p>Developing AI strategies aligned with business goals.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 ">
                            <div className="card3 ai-card p-3 cb">
                                <strong>AI Implementation Roadmaps</strong>
                                <p>Guiding businesses through AI adoption and deployment.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 ">
                            <div className="card3 ai-card p-3 cb">
                                <strong>AI Training and Support</strong>
                                <p>Educating teams on AI technologies and best practices.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="why-choose mt-4 pd40">
                    <h2 className='h2f pd40'>Why Choose Enormous?</h2>
                    <div className='pd40 '>
                        <ul>
                            <li className='ullikk'><strong>Proven Expertise:</strong> Extensive experience in AI and machine learning.</li>
                            <li class='ullikk'><strong>Customized Solutions:</strong> Tailored AI applications to fit unique business requirements.</li>
                            <li className='ullikk'><strong>Scalability:</strong> AI solutions designed to scale with your business growth.</li>
                            <li className='ullikk'><strong>End-to-End Support:</strong> Comprehensive services from consulting to implementation and support.</li>
                            <li className='ullikk'><strong>Commitment to Innovation:</strong> Dedicated to exploring and utilizing the latest AI advancements.</li>
                        </ul>
                    </div>

                    <p className=' ap  wpp' >By leveraging these comprehensive AI services, Enormous IT empowers businesses to harness the full potential of artificial intelligence, driving innovation and achieving strategic objectives.</p>
                    <p className=' ap  wpp' >Partner with Enormous IT to elevate your business with AI.
                        <Link to='/contactus' className='tdn'> Contact us</Link> today for more information!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Ai;
