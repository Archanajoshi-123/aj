import React from 'react';
import './Footer2.css'; // Your custom CSS file
// import Logo from './images/logo-removebg-preview.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import Logo from './logo.png'; // If you have a logo to import
// import Get from './Get'
const Footer2 = () => {
  return (
    <div>
      {/* <Get></Get> */}
      <footer className="footer bg ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p className="h2   n3 ">START GROWING WITH ENORMOUS</p>
              <button className=" bg1 mb-3">Get in Touch</button>
              <p className="mb-2">For quick enquiry, Call us on : 0404855345</p>
              <p className="mb-2">(or) Write to us on info@enormousit.com</p>
              {/* <img src={Logo} className="img" alt="Logo" /> */}

            </div>
            <div className="col-lg-3 ">
              <h5 className="mb-4 n4 ">Site Map</h5>
              <ul className="list-unstyled n5 ">
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Technologies</li>
                <li>Industry Verticals</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="col-lg-3">
              <h5 className="mb-4 n4">Links</h5>
              <ul className="list-unstyled">

                <li>Terms of Use</li>
              </ul>

            </div>

          </div>


        </div>

        <hr className="my-4" />
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Enormous IT Services Pvt. Ltd. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer2;