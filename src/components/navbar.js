import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicNavbar() {
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/settings/get_by_name/title/")
        .then((response) => response.json())
        .then((json) => setInfo(json))
}, [])

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      {info && <Navbar.Brand href="#home">{info.value}</Navbar.Brand>}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Главная</Nav.Link>
            <NavDropdown title="Каталог" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">О нас</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;