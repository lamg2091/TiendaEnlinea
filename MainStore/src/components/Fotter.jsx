import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import imagenLogo from '../assets/images/logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="main-container-fotter">
       <div className="container-footer">
        <section className="marca-logo">
        <img src={imagenLogo} alt="Logo de la tienda" />
        <div className="form-footer">
          <input type="email" placeholder='jhoe@gmail.com' className='input-footer'/>
        <input type="button" value="Enviar" className='btn-footer'/>
        </div>
      </section>

      <section className="section-categoria">
        <h4>Tienda</h4>
        <div className="link-categoria">
          <NavLink to="/mujer">Mujer</NavLink>
          <NavLink to="/hombre">Hombre</NavLink>
          <NavLink to="/accesorios">Accesorios</NavLink>
        </div>
      </section>

      <section className="section-ayuda">
        <h4>Ayuda</h4>
        <div className="link-ayuda">
          <NavLink to="/envios">Envíos</NavLink>
          <NavLink to="/cambios-y-devoluciones">Cambios y devoluciones</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </div>
      </section>

      <section className="section-redes">
        <h4>Síguenos</h4>
        <div className="link-redes">
          <a href="https://facebook.com/tu-tienda" target="_blank" className='icon-redes' rel="noopener noreferrer" 
          aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://instagram.com/tu-tienda" target="_blank" className='icon-redes' rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://wa.me/5732245316443" target="_blank" className='icon-redes' rel="noopener noreferrer" aria-label="TikTok">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </section>
       </div>

       <hr />
      
      <section className='section-copyright'>
         <p>
           <FontAwesomeIcon icon={faCopyright} /> 2026 MainStore todo lo derechos reservados
         </p>
      </section>
    </footer>
  )
}

export default Footer