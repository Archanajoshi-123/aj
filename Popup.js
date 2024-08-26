import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "emailjs-com";
import "./Popup.css";
import ServicesDropdown from "./Services.js"; // Update the import path if needed
import Filter from "bad-words";

// Create a new instance of the filter
const filter = new Filter();

// Define lists of disallowed names
const disallowedWords = [
  // Fruits
  'apple', 'banana', 'orange', 'strawberry', 'grape', 'pineapple', 'mango', 'blueberry', 'raspberry', 'blackberry',
  'pear', 'peach', 'plum', 'kiwi', 'papaya', 'watermelon', 'melon', 'cantaloupe', 'nectarine', 'apricot', 'cherry',
  'grapefruit', 'lime', 'lemon', 'pomegranate', 'coconut', 'fig', 'date', 'tangerine', 'mandarin', 'jackfruit',

  // Vegetables
  'carrot', 'potato', 'onion', 'garlic', 'spinach', 'broccoli', 'cauliflower', 'pepper', 'cucumber', 'tomato', 'lettuce',
  'zucchini', 'eggplant', 'corn', 'peas', 'green bean', 'radish', 'celery', 'beet', 'turnip', 'asparagus', 'pumpkin',
  'sweet potato', 'squash', 'kale', 'brussels sprout', 'artichoke', 'chard', 'parsnip', 'leek', 'okra', 'rutabaga',

  // Animals
  'dog', 'cat', 'mouse', 'rat', 'rabbit', 'hamster', 'guinea pig', 'ferret', 'squirrel', 'horse', 'cow', 'sheep',
  'goat', 'pig', 'chicken', 'duck', 'turkey', 'goose', 'camel', 'lion', 'tiger', 'bear', 'elephant', 'giraffe',
  'zebra', 'hippopotamus', 'rhinoceros', 'panda', 'koala', 'kangaroo', 'monkey', 'gorilla', 'chimpanzee', 'sloth',
  'penguin', 'seal', 'otter', 'whale', 'dolphin', 'shark', 'octopus', 'jellyfish', 'crab', 'lobster', 'shrimp', 'hibye', 'bad', 'waste', 'stupid', 'dirty', 'dirt', 'rascal', 'idiot'
];


const validateInput = (input) => {
  const maxMessageLength = 250;
  const specialCharRegex = /[^a-zA-Z0-9 ]/;

  if (specialCharRegex.test(input)) {
    return 'Special characters are not allowed.';
  }

  if (filter.isProfane(input)) {
    return 'Profane language is not allowed.';
  }

  const lowerCaseInput = input.toLowerCase();
  if (disallowedWords.some(word => lowerCaseInput.includes(word))) {
    return 'Input contains disallowed names.';
  }

  // Check if the message exceeds the maximum length
  if (input.length > maxMessageLength) {
    return `Message should not exceed ${maxMessageLength} characters.`;
  }

  return '';
};



const validateName = (name) => {
  const maxNameLength = 50;

  // Check if the name starts with a space
  if (/^\s/.test(name)) {
    return "Name should not start with a space.";
  }
  
  // Check if the name contains any disallowed characters
  if (!/^[a-zA-Z\s.]+$/.test(name)) {
    return "Name should only contain alphabets, spaces, and periods.";
  }

  // Check if the name is only numbers
  if (/^\d+$/.test(name)) {
    return "Name should not contain only numbers.";
  }

  // Check if the name exceeds the maximum length
  if (name.length > maxNameLength) {
    return `Name should not exceed ${maxNameLength} characters.`;
  }

  return "";
};



const validateEmail = (email) => {
  if (!/^[\w.%+-]+@(gmail\.com|outlook\.com|yahoo\.com)$/.test(email)) {
    return "Email should be a valid address from gmail.com, outlook.com, or yahoo.com.";
  }
  return "";
};

const validatePhone = (phone) => {
  // Remove the country code and any leading '+' sign
  const phoneWithoutCountryCode = phone.replace(/^\+?[1-9]\d{0,1}/, '');

  // Check if the remaining part of the phone number starts with '0'
  if (/^0/.test(phoneWithoutCountryCode)) {
    return "Phone number should not start with 0 after the country code.";
  }
 
  
  // Validate the entire phone number format
  if (!/^\+?[1-9]\d{1,14}$/.test(phone)) {
    return "Mobile number should be a valid international number, e.g., +1234567890.";
  }
  
  // Ensure the phone number is not all zeros
  if (/^0+$/.test(phoneWithoutCountryCode)) {
    return "Phone number should not be all zeros.";
  }

  return "";
};


// const validateCompanyName = (companyName) => {
//   if (companyName.trim() === "") {
//     return "Company Name should not be blank.";
//   }
//   if (/^[^a-zA-Z0-9]/.test(companyName)) {
//     return "Company Name should not start with a special character.";
//   }
//   if (companyName.length > 50) { // Assuming a reasonable limit of 50 characters
//     return "Company Name should not exceed 50 characters.";
//   }
//   return "";
// };
const validateCompanyName = (companyName) => {
  const maxCompanyLength = 200;

  if (companyName.trim() === "") {
    return "Company Name should not be blank.";
  }
  if (/^[^a-zA-Z0-9]/.test(companyName)) {
    return "Company Name should not start with a special character.";
  }
  if (companyName.length > maxCompanyLength) {
    return `Company Name should not exceed ${maxCompanyLength} characters.`;
  }
  return "";
};



function CustomerForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
    service: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let validationError = "";

    switch (name) {
      case "name":
        validationError = validateName(value);
        break;
      case "email":
        validationError = validateEmail(value);
        break;
      case "companyName":
        validationError = validateCompanyName(value);
        break;
      case "message":
        validationError = validateInput(value);
        break;
      default:
        break;
    }

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validationError });
  };

  const handlePhoneChange = (value) => {
    const phoneError = validatePhone(value);
    setFormData({ ...formData, phone: value });
    setErrors({ ...errors, phone: phoneError });
  };

  const handleServiceChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      companyName: validateCompanyName(formData.companyName),
      message: validateInput(formData.message),
    };

    setErrors(newErrors);
    return Object.keys(newErrors).every((key) => newErrors[key] === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_mobile: formData.phone,
        from_company: formData.companyName,
        from_message: formData.message,
        from_service: formData.service,
      };

      emailjs
        .send(
          "service_lr0mii8",
          "template_ti27xv2",
          templateParams,
          "8eN42VMuT1Ujm-l2e"
        )
        .then(
          (response) => {
            sendThankYouEmail(formData, onClose);
          },
          (error) => {
            onClose("Failed to send message. Please try again.");
          }
        );
    }
  };

  const sendThankYouEmail = (formData, onClose) => {
    const thankYouTemplateParams = {
      to_name: formData.name,
      to_email: formData.email,
    };

    emailjs
      .send(
        "service_e3wxd23", // Replace with your service ID
        "template_poqspvt", // Replace with your template ID
        thankYouTemplateParams,
        "UcsdwIxhpf-3b6lQ5" // Replace with your user ID
      )
      .then(
        (thankYouResponse) => {
          onClose("Thanks for Reaching Out! Your Consultation Slot will be Emailed to you.");
        },
        (thankYouError) => {
          onClose("Failed to send thank you email. Please try again.");
        }
      );
  };

  return (
    <Modal show={isOpen} onHide={() => onClose(null)}>
      <Modal.Header closeButton>
        <Modal.Title>Schedule Here!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPhone">
            <Form.Label>Mobile</Form.Label>
            <PhoneInput
              className="phone-input"
              country={"in"}
              value={formData.phone}
              placeholder="Mobile Number"
              onChange={handlePhoneChange}
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
              }}
            />
            {errors.phone && <p className="text-danger">{errors.phone}</p>}
          </Form.Group>

          <Form.Group controlId="formCompanyName">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              isInvalid={!!errors.companyName}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.companyName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formService">
            <Form.Label>Service</Form.Label>
            <ServicesDropdown
              name="service"
              selectedService={formData.service}
              onChange={handleServiceChange}
            />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              placeholder="Required Services and Reason for Contact"
              value={formData.message}
              onChange={handleChange}
              isInvalid={!!errors.message}
              rows={3}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.message}
            </Form.Control.Feedback>
          </Form.Group>
          <div className="d-flex justify-content-center">
            <input
              className="btn-primary sbuttong w-25"
              type="submit"
              value="Submit"
            />
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CustomerForm;
