import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ContactForm from './ContactUsForm';
import axios from 'axios';

function ContactUsModal(props) {

  const handleFeedback = async (name, email, contactNumber, message) => {
    const formData = {
      "fio": name,
      "email": email,
      "phone": contactNumber,
      "message": message
    }
    await axios.post('http://194.87.213.123:8000/api/feedbacks/', formData);
    props.onHide()
  }
  
return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <ContactForm 
          onFeedback={handleFeedback}
        />
    </Modal>
  );
}

export default ContactUsModal;