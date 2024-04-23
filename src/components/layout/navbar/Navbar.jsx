import "bootstrap/dist/css/bootstrap.min.css"; // Importa el CSS de Bootstrap
import "./Naavbar.css";
import { Navbar, Nav, Image } from "react-bootstrap"; // Importa Navbar y Nav desde react-bootstrap
import Cart from "../../common/CartWidget/CartWidget";
import logo from "../../../components/img/logo.jpeg"; // Ruta de la imagen del logo
import { Link } from "react-router-dom";

const Navbarr = ({ enviarCategoria }) => {
  const handleClick = (categoria) => {
    enviarCategoria(categoria);
  };

  return (
    <nav>
      <ul>
        <Navbar bg="#c2dffa" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <li>
                <Link to="/">
                  <Image
                    src={logo}
                    alt="Logo de la empresa"
                    fluid
                    style={{ width: "50px", height: "auto" }}
                  />
                </Link>
              </li>

              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="productos/hardware">Hardware</Link>
              </li>
              <li>
                <Link to="productos/pantalla">Pantallas</Link>
              </li>
              <li>
                <Link to="productos/gabinete">Gabinetes</Link>
              </li>
            </Nav>
          </Navbar.Collapse>
          <div style={{ position: "absolute", left: "90%" }}>
            <Cart />
          </div>
        </Navbar>
      </ul>
    </nav>
  );
};

export default Navbarr;
