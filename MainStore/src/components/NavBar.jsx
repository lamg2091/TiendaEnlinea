
import { Link,  } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBoxOpen,
  faUsers,
  faEnvelope,
  faBars,
  faXmark,

} from "@fortawesome/free-solid-svg-icons";
import imagenUser from "../assets/images/luis.jpeg";
import imagenLogo from "../assets/images/logo.png";
import "../components/NavBar.css";
import {useNavigate} from 'react-router-dom'
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const navigate = useNavigate(); 

 
  return (
    <>
      <div className="main-container">
        <div className="contenedor-nav">
          <img src={imagenLogo} alt="logo empresa" className="img-logo" />
          <nav className="nav-bar">
            <ul className={`items ${menuOpen ? "active" : ""}`}>
              <li className="link">
                <FontAwesomeIcon icon={faHouse} className="icon-navbar" />
                <Link to="">Inicio</Link>
              </li>
              <li className="link">
                <FontAwesomeIcon icon={faBoxOpen} className="icon-navbar" />
                <Link to="/producto">Productos</Link>
              </li>
              <li className="link">
                <FontAwesomeIcon icon={faUsers} className="icon-navbar" />
                <Link to="/nosotros">Nosotros</Link>
              </li>
              <li className="link">
                <FontAwesomeIcon icon={faEnvelope} className="icon-navbar" />
                <Link to="/contacto">Contacto</Link>
              </li>
              <div className="drop-login">
                <select className="opcion-credencial" defaultValue='' onChange={(e) => navigate(e.target.value)}>
                  <option value="" disable>Selecione una opcion</option>
                  <option value="/iniciosesion">Incio de sesion</option>
                  <option value="/registeruser">Crea una cuenta</option>
                  <option value="/admin">Administrador</option>
                </select>
              </div>
            </ul>

            <div className="utilidades">
              <div className="container-user">
                <img
                  src={imagenUser}
                  className="img-user"
                  alt="imagen user"
                  style={{ width: "50px" }}
                />
                <span>Luis Mejia Gonzalez</span>
              </div>

              <button
                className="btn-menu"
                onClick={toggleMenu}
                aria-label="abrir menua"
              >
                <FontAwesomeIcon
                  icon={menuOpen ? faXmark : faBars}
                  className="icon-menu"
                />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
