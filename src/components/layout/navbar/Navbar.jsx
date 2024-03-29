import "bootstrap/dist/css/bootstrap.min.css"; // Importa el CSS de Bootstrap
import "./Naavbar.css";
import { Navbar, Nav } from "react-bootstrap"; // Importa Navbar y Nav desde react-bootstrap
import Cart from "../../common/CartWidget/CartWidget";

const Navbarr = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#hardware">Hardware</Nav.Link>
          <Nav.Link href="#pantallas">Pantallas</Nav.Link>
          <Nav.Link href="#gabinetes">Gabinetes</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div style={{ position: "absolute", left: "90%" }}>
        <Cart />
      </div>
    </Navbar>
  );
};

export default Navbarr;
