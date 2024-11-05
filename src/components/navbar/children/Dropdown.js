import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { useCookies } from 'react-cookie';

function ProfileMenu() {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    function logout() { 
        removeCookie(["token"])
      }

  return (
          <NavDropdown
              id="nav-dropdown"
              title="Профиль"
              menuVariant="light"
            >
              {/* <NavDropdown.Item href="#action/3.1">Профиль</NavDropdown.Item> */}
              <NavDropdown.Item href="/feedbacks">
                Обратная связь
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Корзина</NavDropdown.Item>s */}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              <Nav.Link onClick={() => logout()}>Выход</Nav.Link>
            </NavDropdown.Item>
            </NavDropdown>
  );
}

export default ProfileMenu;