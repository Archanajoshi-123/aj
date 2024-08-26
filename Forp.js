import React, { useState , useEffect} from "react";
import ContactUsPopup from "./Popup.js";
import "./Forp.css";

const Forp = () => {
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
      }, 1200000); 
      // Remove message after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [submitMessage]);

  const isSuccessMessage = submitMessage && !submitMessage.includes('Failed');
  console.log("Is success message:", isSuccessMessage); // Log the success message check

  return (
    <div className="App">
      {isPopupOpen && (
        <div className="background-overlay"></div> // Blurred background overlay
      )}
      {!isPopupOpen && (
        <div className="background-content">
          <button onClick={openPopup}>Contact Us</button>
          {submitMessage && (
            <div className={`submit-message ${isSuccessMessage ? 'success' : 'error'}`}>
              {submitMessage}
            </div>
          )}
        </div>
      )}
      <ContactUsPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}  

export default Forp;
