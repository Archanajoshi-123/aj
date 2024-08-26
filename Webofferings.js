import React, { useEffect, useState } from 'react';
import './Webofferings.css';
import webofferings from './images/webofferings.jpg';
import mobile from './images/mobile.jpeg';

import apps from './images/app.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUsPopup from './Popup';

const WebOfferings = () => {
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
        <div className='nbg' >
            <div ></div>
            <div >
                <div  >
                    <div  >
                        <div >
                            {/* <div >
                                <img src={webofferings} className="img-fluid" style={{ width: "100%" }} alt="Technology" />
                                <div className="noverlay" ></div>
                                <div className="secondOverlay"></div>
                                <div className="ntext">
                                    <p className='text-xl text-lg-center text-xl-left text-center' style={{ fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>Web Offerings and Mobile Applications</p>
                                    <h2 className='nHp text-lg-center text-xl-left text-center' style={{ fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>Simplifying Your Digital Journey.</h2>
                                    <div className="d-flex justify-content-center">
                                        <button type="button" className="btn btn-outline-light w-auto">Schedule a Free Consultation</button>
                                    </div>
                                </div>
                            </div> */}

                            <div className="image-container">
                                <img src={webofferings} className="img-fluid" alt="web offerings" />
                                <div className="overlay"></div>
                                <div className="txt">
                                    <h2 className='text-xl text-lg-center text-xl-left text-center' style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"}}>Web Offerings and Mobile Applications</h2>
                                    <p className='Hp text-lg-center text-xl-left text-center' >Simplifying Your Digital Journey.</p>
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


                        <div className='nT4 ntyy2'>
                            <p className=' text-center '>
                                Website Designing and Development Services
                            </p>
                        </div>

                        <div className="nT3 nT4 length"  >
                            At Enormous IT, we excel in creating dynamic and engaging websites that cater to the unique needs of our global clientele. With a strong track record of delivering successful projects to clients in the US, Australia, and Canada, we understand the importance of combining aesthetic appeal with technical excellence.
                        </div>
                        <div className="nT3 nT4 length">
                            Our team of skilled designers and developers utilizes cutting-edge technologies to build websites that are not only visually striking but also highly functional and user-friendly. Whether it's a corporate website, e-commerce platform, or content management system (CMS), we ensure that each project is tailored to enhance our clients' online presence and business objectives.
                        </div>

                        <div className='nT4  ntyy2'>
                            <p className=' text-center' >
                                Additonal Services
                            </p>
                        </div>

                        <div className=" mb-4 nflex4">
                            <div className='ncard4 ncb2 pad nT3'>
                                <h4 className=" text-center ntyy3 "><strong >Responsive design</strong></h4>
                                <p className=" text-center ">All our websites are designed to be fully responsive, ensuring a seamless experience across desktops, tablets, and mobile devices.</p>

                            </div>
                        </div>

                        <div className=" mb-4 nflex4">
                            <div className='ncard4 ncb2 pad nT3'>
                                <h4 className=" text-center  ntyy3"><strong >SEO Optimization</strong></h4>
                                <p className=" text-center ">We integrate best practices in search engine optimization (SEO) during the development process, helping your site rank higher in search results and attract more organic traffic.</p>

                            </div>
                        </div>

                        <div className=" mb-4 nflex4">
                            <div className='ncard4 ncb2 pad nT3'>
                                <h4 className=" text-center  ntyy3"><strong >Content Stratergy</strong></h4>
                                <p className=" text-center ">Our team works closely with clients to develop a comprehensive content strategy, ensuring that your website communicates effectively and engages your audience.</p>
                            </div>
                        </div>

                        <div className=" mb-4 nflex4">
                            <div className='ncard4 ncb2 pad nT3'>
                                <h4 className=" text-center  ntyy3"><strong >User Experience (UX) Design</strong></h4>
                                <p className=" text-center ">We prioritize user experience, employing research-driven design principles to create intuitive interfaces that enhance usability and customer satisfaction.</p>
                            </div>
                        </div>

                        <div className=" mb-4 nflex4">
                            <div className='ncard4 ncb2 pad nT3'>
                                <h4 className=" text-center  ntyy3"><strong  >Ongoing Support and Maintenance</strong></h4>
                                <p className=" text-center ">Post-launch, we offer continuous support and maintenance services to ensure your website remains up-to-date, secure, and optimized for performance.</p>
                            </div>
                        </div>



                        <div className='nT4 ntyy2'>
                            <p className=' text-center' >
                                Mobile Apps Development Services
                            </p>
                        </div>

                        <div className=" my-4 nimagestyle">
                            <img src={apps} className="" style={{ borderRadius: "10px" }} alt="Mobile Applications" />
                        </div>



                        <div className="nT3 nT4 length" >
                            In today's digital age, mobility is essential for business success.
                            Enormous IT offers comprehensive mobile app development services across various platforms, including iPhone, Android, BlackBerry, Windows Mobile, and others. Our experienced team specializes in creating intuitive and feature-rich mobile applications that empower businesses to connect with their customers and streamline operations.
                        </div>
                    </div>


                    <div className='nT4 ntyy2'>
                        <p className=' text-center'>
                            Technology Expertise
                        </p>
                    </div>

                    <div className="nT3 nT4 length" >
                        Our expertise spans both web and mobile platforms, allowing us to deliver seamless solutions that cater to diverse technological requirements. Key aspects of our development approach include:
                    </div>



                    <div className="row " style={{ margin: "15px" }}>
                        <div className="col ">
                            <div className=" mb-4 nflex4">
                                <div className='ncard4 ncb2 pad nT3'>
                                    <h4 className=" text-center ntyy3 "><strong >Cross Platform Compatibility</strong></h4>
                                    <p className=" text-center " >
                                        Developing applications and websites that function seamlessly across different operating systems and devices.
                                    </p>

                                </div>
                            </div>

                            <div className=" mb-4 nflex4">
                                <div className='ncard4 ncb2 pad nT3'>
                                    <h4 className=" text-center ntyy3"><strong >Responsive Design</strong></h4>
                                    <p className=" text-center ">Developing applications and websites that function seamlessly across different operating systems and devices. </p>

                                </div>
                            </div>


                            <div className=" mb-4 nflex4">
                                <div className='ncard4 ncb2 pad nT3'>
                                    <h4 className=" text-center ntyy3"><strong >User centric Approach</strong></h4>
                                    <p className=" text-center ">Prioritizing usability and accessibility to create interfaces that are intuitive and engaging for end users.</p>

                                </div>
                            </div>

                            <div className="nT3 nT4 slen">
                                At Enormous IT, we have expertise in developing both websites and mobile apps in a wide range of programming languages, ensuring flexibility and compatibility across different platforms. Some of the major languages we work with include:                                </div>


                            <div className=" my-4 nimagestyle">
                                <img src={mobile} className="" style={{ borderRadius: "10px" }} alt="Mobile Applications" />
                            </div>




                            <div className=" mb-4 nflex4" style={{ marginTop: "15px" }}>
                                <div className=' narsimha ncb2 pad nT3' >
                                    <h4 className=" text-center ntyy3"><strong >Frontend</strong></h4>
                                    <p className=" text-center ">HTML5, CSS3, JavaScript(Including frameworks like React, Angular, Vue.js)</p>

                                </div>
                            </div>

                            <div className=" mb-4 nflex4">
                                <div className=' narsimha ncb2 pad nT3'>
                                    <h4 className=" text-center ntyy3"><strong >Backend</strong></h4>
                                    <p className=" text-center ">PHP, Python, Ruby on Rails, Node.js</p>

                                </div>
                            </div>

                            <div className=" mb-4 nflex4">
                                <div className=' narsimha ncb2 pad nT3'>
                                    <h4 className=" text-center ntyy3"><strong >Mobile</strong></h4>
                                    <p className=" text-center ">Swift (iOS), Kotlin (Android), Xamarin (cross-platform), Flutter</p>

                                </div>
                            </div>
                            <div className="nT3 nT4 slen text-center" >
                                We also have proficiency in other languages and frameworks to accommodate specific client requirements and technological preferences.

                            </div>


                            <div className='nT4 ntyy2'>
                                <p className=' text-center' >
                                    Key Considerations
                                </p>
                            </div>

                            <div className=" mb-4 nflex4">
                                <div className='ncard4 ncb2 pad nT3'>
                                    <h4 className=" text-center ntyy3"><strong >Optimized Performance</strong></h4>
                                    <p className=" text-center ">Implementing strategies to enhance website and app performance, including efficient code structure and server optimization.
                                    </p>

                                </div>
                            </div>

                            <div className=" mb-4 nflex4">
                                <div className='ncard4 ncb2 pad nT3'>
                                    <h4 className=" text-center ntyy3"><strong >Security</strong></h4>
                                    <p className=" text-center ">Integrating robust security measures to protect user data and ensure compliance with industry standards and regulations.</p>

                                </div>
                            </div>

                            <div className=" mb-4 nflex4">
                                <div className='ncard4 ncb2 pad nT3'>
                                    <h4 className=" text-center ntyy3"><strong >Scalability</strong></h4>
                                    <p className=" text-center ">Designing scalable solutions that can grow with your business and accommodate future expansion and technological advancements.</p>

                                </div>
                            </div>

                            <div className='nT4 ntyy2'>
                                <p className=' text-center' >
                                    Our Approach
                                </p>
                            </div>

                            <div className=" mb-4 nflex4">
                                <div className='ncard4 ncb2 pad nT3'>
                                    <h4 className=" text-center ntyy3"><strong >Custom Solutions</strong></h4>
                                    <p className=" text-center ">We develop custom mobile applications tailored to your specific business needs, ensuring that functionality aligns with your objectives and user expectations.</p>

                                </div>
                            </div>

                            <div className=" mb-4 nflex4">
                                <div className='ncard4 ncb2 pad nT3'>
                                    <h4 className=" text-center ntyy3"><strong >Cross Platform Development</strong></h4>
                                    <p className=" text-center ">Utilizing frameworks like React Native and Flutter, we create cross-platform applications that provide a native-like experience on both iOS and Android, optimizing development time and cost.</p>

                                </div>
                            </div>

                            <div className=" mb-4 nflex4">
                                <div className='ncard4 ncb2 pad nT3'>
                                    <h4 className=" text-center ntyy3"><strong >User Centric Design</strong></h4>
                                    <p className=" text-center ">Our design philosophy emphasizes user experience, employing extensive user testing and feedback to create engaging, easy-to-navigate applications.</p>

                                </div>
                            </div>

                            <div className=" mb-4 nflex4">
                                <div className='ncard4 ncb2 pad nT3'>
                                    <h4 className=" text-center ntyy3"><strong >Integration with Backend Systems</strong></h4>
                                    <p className=" text-center ">We ensure seamless integration of mobile apps with existing backend systems, allowing for real-time data synchronization and enhanced functionality.</p>

                                </div>
                            </div>

                            <div className=" mb-4 nflex4">
                                <div className='ncard4 ncb2 pad nT3'>
                                    <h4 className=" text-center ntyy3"><strong >Quality Assurance</strong></h4>
                                    <p className=" text-center ">Rigorous testing processes are implemented to ensure the performance, security, and reliability of your mobile application before launch.</p>

                                </div>
                            </div>


                            <div className='nT4 ntyy2'>
                                <p className=' text-center' >
                                    Post-Launch Services
                                </p>
                            </div>



                            <div className=" mb-4 nflex4">
                                <div className='ncard4 ncb2 pad nT3'>
                                    <h4 className=" text-center ntyy3"><strong >App Store Optimization (ASO)</strong></h4>
                                    <p className=" text-center ">We provide strategies to enhance your app’s visibility in app stores, driving downloads and user engagement.</p>

                                </div>
                            </div>
                            <div className=" mb-4 nflex4">
                                <div className='ncard4 ncb2 pad nT3'>
                                    <h4 className=" text-center ntyy3"><strong >Analytics and Monitoring</strong></h4>
                                    <p className=" text-center ">Post-launch, we implement analytics to monitor user behavior and app performance, allowing for data-driven improvements and updates.</p>

                                </div>
                            </div>
                            <div className=" mb-4 nflex4">
                                <div className='ncard4 ncb2 pad nT3'>
                                    <h4 className=" text-center ntyy3"><strong > Ongoing Support</strong></h4>
                                    <p className=" text-center ">Our team offers ongoing support and maintenance to ensure your app remains current with updates, user feedback, and emerging technologies.</p>
                                </div>
                            </div>

                            <div className='nT4 ntyy2'>
                                <p className=' text-center' >
                                    Our Commitment
                                </p>
                            </div>
                            <div className="nT3 nT4 slen">
                                At Enormous IT, we are committed to delivering innovative and scalable solutions that drive business growth and exceed client expectations. Our personalized approach ensures that each project, whether it's a new website, a custom mobile app, or ongoing support and maintenance, is tailored to align with your unique goals. With a dedicated team of experts, we leverage the latest technologies and best practices to provide comprehensive services that not only address your immediate needs but also facilitate long-term success. By fostering strong client relationships built on trust and transparency, we empower your business to thrive in a dynamic digital landscape, ensuring you stay ahead of the competition and achieve your vision. Our commitment to continuous improvement means we stay agile, adapting our strategies to meet evolving market demands. Together, we can explore new opportunities for innovation, harnessing data-driven insights to refine your operations. At Enormous IT, your success is our mission, and we are here to support you every step of the way.
                            </div><br />


                            <div className='nT4 ntyy2'>
                                <p className=' text-center' >
                                    Why Enormous?
                                </p>
                            </div>
                            <div className="nT3 nT4" >
                                <ul className='naul'>
                                    <li>
                                        <p><b>Comprehensive Services:</b> From initial concept to final deployment and beyond, we offer end-to-end solutions that encompass design, development, testing, and support.</p>
                                    </li>
                                    <li><p><b>proven Track Record:</b> With a portfolio of successful projects and satisfied clients, we have established ourselves as a trusted partner in digital solutions.</p></li>


                                    <li><p><b>Continuos Innovation:</b> Embracing emerging technologies and industry best practices to deliver solutions that are at the forefront of innovation.</p></li><br />
                                </ul>
                            </div>

                            <div className="nT3 nT4 slen" >
                                At Enormous IT, we are committed to delivering innovative and scalable solutions that drive business growth and exceed client expectations. Whether you need a new website, a custom mobile application, or ongoing support and maintenance, our team is dedicated to providing personalized service and technical expertise to help you achieve your goals.</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default WebOfferings;