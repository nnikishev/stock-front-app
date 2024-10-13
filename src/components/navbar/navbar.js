import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginModal from './children/LoginModal';

function BasicNavbar() {
    const [modalShow, setModalShow] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const style = {
      display: cookies.token ? 'none' : 'block', // Invisible if cookie exists
  };
    const unstyle = {
      display: !cookies.token ? 'none' : 'block', // Invisible if cookie exists
  };
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/settings/get_by_name/title/")
        .then((response) => response.json())
        .then((json) => setInfo(json))
}, [])
  function logout() { 
    removeCookie(["token"])
  }
  // console.log(cookies)
  // console.log(cookies.token)

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      {info && <Navbar.Brand href="/">{info.value}</Navbar.Brand>}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Главная</Nav.Link>
            <Nav.Link href="products">Наша продукция</Nav.Link>
            <Nav.Link href="about">О нас</Nav.Link>
            </Nav>
            <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link style= {style} onClick={() => setModalShow(true)} >Вход</Nav.Link>

            <LoginModal

              show={modalShow}
              onHide={() => setModalShow(false)}
            />
              {/* <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Авторизация</Modal.Title>
                </Modal.Header>
                <Modal.Body><LoginForm/></Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal> */}
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style= {style} href="regisration">Регистрация</Nav.Link>
            <Nav.Link style= {unstyle} onClick={() => logout()}>Выход</Nav.Link>
          </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;