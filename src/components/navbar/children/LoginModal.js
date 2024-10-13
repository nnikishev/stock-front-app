import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import Modal from 'react-bootstrap/Modal';
import LoginForm from './LoginForm';
import "./styles.css"

function LoginModal(props) {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [token, setToken] = useState(null);

    const handleLogin = async (name, password) => {
        // console.log('Username:', name);
        // console.log('Password:', password);
        const response = await fetch('http://localhost:8091/api/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: name, password: password }),
        });
        // console.log(response)
        if (response && !response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        console.log('Login successful:', data);
        if (response && response.ok){
            setToken(data.token)
            setCookie('token', token)
        }
        props.onHide()
    };

   
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