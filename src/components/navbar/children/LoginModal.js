import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoginForm from './LoginForm';
import "./styles.css"

function LoginModal(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(email)
    const [error, setError] = useState('');

    const handleLogin = (username, password) => {
        console.log('Username:', username);
        console.log('Password:', password);
        // Here, you can handle authentication, e.g., API call
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await fetch('https://your-api-url.com/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: email, password: password }),
        });
        
        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        console.log('Login successful:', data);
        // Handle success (e.g., redirect, save token)

    } catch (err) {
      setError(err.message);
    }
    }
    
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Авторизация
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        < LoginForm onLogin={handleLogin} />
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;