import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ContactForm from './ContactUsForm';

function ContactUsModal(props) {

return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <ContactForm />
    </Modal>
  );
}

export default ContactUsModal;