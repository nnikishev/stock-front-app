import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import Modal from 'react-bootstrap/Modal';
import LoginForm from './LoginForm';
import "./styles.css"

function LoginModal(props) {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [token, setToken] = useState(null);
    console.log("modal 10", props.token)
    const handleLogin = async (name, password) => {
        // console.log('Username:', name);
        console.log('props:', props);
        const response = await fetch('http://194.87.213.123:8091/api/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: name, password: password }),
        }).then(res => res.json()).catch((err) => {throw new Error('Login failed')});
        console.log("123", response)
        // const data = await response.json();
        // console.log('Login successful:', data.token);
        if (response.token !== null) {
          props.setToken(response.token)
          setCookie('token', response.token)
          props.onHide()
        }
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