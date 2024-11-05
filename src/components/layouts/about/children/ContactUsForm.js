import React, { useState } from 'react';


function ContactForm({onFeedback}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    onFeedback(name, email, contactNumber, message)
  };

  return (
    <div className='contact-form'>
      <h2>Связаться с нами</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">ФИО:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label htmlFor="contactNumber">Телефон:</label>
          <input
            type="tel"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label htmlFor="message">Сообщение:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default ContactForm;