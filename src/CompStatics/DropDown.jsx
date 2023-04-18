import "../Css/Cssapp/NavbarProducts.css";
import "../Css/Cssapp/DropDown.css";
import { Link } from "react-router-dom";

const DropDown = () => {
  return (
    <div className="container navbar-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-products">
        <a className="navbar-brand a-navbar-products" href="#">
          | Productos |
        </a>
        <button
          className="navbar-toggler button-navbar-products"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <hr />
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Computadoras
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="/laptops">
                  <a className="dropdown-item a-link-products" href="#">
                    Laptops | Portátiles
                  </a>
                </Link>
                <Link to="/cpu">
                  <a className="dropdown-item a-link-products" href="#">
                    PC Escritorio | Gaming
                  </a>
                </Link>
                <Link to="/tablets">
                  <a className="dropdown-item a-link-products" href="#">
                    Tablets
                  </a>
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Componentes
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="/discos">
                  <a className="dropdown-item" href="#">
                    Discos Duros
                  </a>
                </Link>
                <Link to="/memorias">
                  <a className="dropdown-item" href="#">
                    Memorias | Ram | Tarjetas
                  </a>
                </Link>
                <Link to="/ventiladores">
                  <a className="dropdown-item" href="#">
                    Ventiladores
                  </a>
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Periféricos
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="/teclados">
                  <a className="dropdown-item" href="#">
                    Teclados
                  </a>
                </Link>
                <Link to="/mouse">
                  <a className="dropdown-item" href="#">
                    Mouse
                  </a>
                </Link>
                <Link to="/audifonos">
                  <a className="dropdown-item" href="#">
                    Audífonos | Micrófonos
                  </a>
                </Link>
                <Link to="/cables">
                  <a className="dropdown-item" href="#">
                    Cables
                  </a>
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Punto de venta
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="/monitores">
                  <a className="dropdown-item" href="#">
                    Todo En Uno | Monitores
                  </a>
                </Link>
                <Link to="/baterias">
                  <a className="dropdown-item" href="#">
                    UPS | Baterías
                  </a>
                </Link>
                <Link to="/impresoras">
                  <a className="dropdown-item" href="#">
                    Impresoras | Cajones | Scanners
                  </a>
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Tienda
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="/fundas">
                  <a className="dropdown-item" href="#">
                    Fundas | Estuches | Maletines
                  </a>
                </Link>
                <Link to="/sillas">
                  <a className="dropdown-item" href="#">
                    Sillas Gaming | Sillas
                  </a>
                </Link>
                <Link to="/escritorios">
                  <a className="dropdown-item" href="#">
                    Escritorios
                  </a>
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Herramientas
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="/herramientas">
                  <a className="dropdown-item" href="#">
                    Instalación | Red
                  </a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default DropDown;
