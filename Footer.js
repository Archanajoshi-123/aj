
import React from 'react';
import './Footer.css';
import EnormousLogo from './images/ENORMOUS-whitel.png';
import { Link } from 'react-router-dom';
import Linkedin from './Handles/linkedin-brands-solid (1).svg'
import Instagram from './Handles/square-instagram-brands-solid.svg';


const Footer = () => {
  return (
    <footer className="footer">
      <div >
        <div className="f1 f">
          <h2 className="h2">START GROWING WITH ENORMOUS</h2>
          <div className='bmkk'>
          <Link to="/contactus"><button className="b1">Get in Touch</button></Link>
          </div>
        </div>
        <div className="f2">
          <div className="f">
            <Link to="/"> <p><img src={EnormousLogo} className="logo" alt="Logo" /></p></Link>
            <p className="p">For quick enquiry,</p>
            {/* <p className="p">Call us on 0404855345</p> */}
            {/* <p className="h6 p" style={{ marginLeft: "60px" }}>(or)</p> */}
            <p className="p">Write to us on</p>
            {/* <p className="p">info@enormousit.com</p> */}
            <a className='p' target='blank' href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNqtQNJmpfVtlGmSmwdZwzBhFvMGFXjDdfHDRKQbdgLsmhKMdVBZlxttrbQpSBPCmDrSRL' style={{textDecoration:'none' , color:'white'}}>
            info@enormousit.com</a>
          </div>
         

          <div className="f">
            <p className="h5 ">Site Map</p>
            <Link to="/" className='Linkd'><p className="p">Home</p></Link>
            <Link to="/aboutus" className='Linkd'><p className="p">About us</p></Link>
            {/* <Link className='Linkd'><p className="p">Services</p></Link> */}
            <Link to="/technologies" className='Linkd'><p className="p">Technologies</p></Link>
            <Link to="/infrastructure" className='Linkd'> <p className='p'>Infrastructure</p> </Link>
            <Link to="/resources" className='Linkd'> <p className='p'>Resources</p> </Link>
            <Link to="/careers" className='Linkd'> <p className='p'>Careers</p> </Link>
            <Link to="/contactus" className='Linkd'> <p className="p">Contact Us</p></Link>
          </div>

          <div className="f">
            <p className="h5 " >Let's Connect!</p>
            <p className="p">
            <a target='blank' href='https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A19257494&keywords=enormous%20it&origin=RICH_QUERY_SUGGESTION&position=0&searchId=c0c367e9-0307-4dce-8e43-313ea84b8295&sid=NvT&spellCorrectionEnabled=false'>
              <img src={Linkedin} alt='Loading' width={'30px'} style={{marginRight:'20px',marginLeft:'25px'}} />
            </a>
            <a target='blank' href='https://www.instagram.com/enormous_it_services/'>
            <img src={Instagram} alt='Loading' width={'30px'} />
            </a>
              {/* <a href="/Terms & Conditions.pdf" target="_blank" rel="noopener noreferrer" className='Linkd'>
                Terms & Conditions
              </a> */}           
            </p>
          </div>
        </div>
        <hr />
        <p>&copy; {new Date().getFullYear()} Enormous IT Services Pvt. Ltd. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
