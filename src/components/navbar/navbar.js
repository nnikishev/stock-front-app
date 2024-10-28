import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginModal from './children/LoginModal';
import image from './children/logo.jpg'
import ProfileMenu from './children/Dropdown';
import { useCookies } from 'react-cookie';


function BasicNavbar() {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const [token, setToken] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const imgStyle = {
      width: "36px",
      height: "36px",
    }
    const style = {
      display: cookies.token ? 'none' : 'block', // Invisible if cookie exists
  };
    const unstyle = {
      display: cookies.token ? 'block' : 'none', // visible if cookie exists
  };
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch("http://194.87.213.123:8000/api/settings/get_by_name/title/")
        .then((response) => response.json())
        .then((json) => setInfo(json))
}, [])
  

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      
      {info && <Navbar.Brand href="/">
        <img style={imgStyle} src={image}></img>
        &nbsp;&nbsp;&nbsp;
        {info.value}
        </Navbar.Brand>}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">   
            {/* <Nav.Link href="/">Главная</Nav.Link> */}
            <Nav.Link href="products">Наша продукция</Nav.Link>
            <Nav.Link href="about">О нас</Nav.Link>
            </Nav>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link style= {style} onClick={() => setModalShow(true)} >Вход</Nav.Link>
              <LoginModal
                token={token}
                setToken={setToken}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Nav.Item>
          <Nav.Item>
            <Nav.Link style= {style} href="regisration">Регистрация</Nav.Link>
            <div style={unstyle} >
            <ProfileMenu />
            </div>
          </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;