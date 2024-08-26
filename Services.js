import React from 'react';
import { Form } from 'react-bootstrap';

const ServicesDropdown = ({ name, selectedService, onChange }) => {
  const services = [
    "Oracle Services",
    "Microsoft Technologies Services",
    "SAP Technology Services",
    "Big Data",
    "Business Intelligence and Data Warehousing Solutions",
    "Web Offerings and Mobile Applications",
    "Talent As a Service",
    "Quality Assurance and Testing Services",
    "Cyber Security"
  ];

  return (
    <Form.Control
      as="select"
      name={name}
      value={selectedService}
      onChange={(e) => onChange(e.target.value)}
      required
    >
      <option value="">Select a service</option>
      {services.map((service, index) => (
        <option key={index} value={service}>{service}</option>
      ))}
    </Form.Control>
  );
};

export default ServicesDropdown;









// import React, { useState } from 'react';

// const ServicesDropdown = () => {
//   const [selectedService, setSelectedService] = useState('');

//   const handleChange = (event) => {
//     setSelectedService(event.target.value);
//   };

//   return (
//     <div>
//       {/* <label htmlFor="service">Select  Service:</label> */}
//       <select id="service" value={selectedService} onChange={handleChange}>
//         <option value="">Select a service</option>
//         <option value="Oracle Services">Oracle Services</option>
//         <option value="Microsoft Technologies Services">Microsoft Technologies Services</option>
//         <option value="SAP Technology Services">SAP Technology Services</option>
//         <option value="Big Data">Big Data</option>
//         <option value="Business Intelligence and Data Warehousing Solutions">Business Intelligence and Data Warehousing Solutions</option>
//         <option value="Web Offerings and Mobile Applications">Web Offerings and Mobile Applications</option>
//         <option value="Talent As a Service">Talent As a Service</option>
//         <option value="Quality Assurance and Testing Services">Quality Assurance and Testing Services</option>
//         <option value="Cyber Security">Cyber Security</option>
//       </select>
//       {/* <p>Selected Service: {selectedService}</p> */}
//     </div>
//   );
// };

// export default ServicesDropdown;