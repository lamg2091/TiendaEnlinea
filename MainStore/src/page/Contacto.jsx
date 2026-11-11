import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import '../estilos/Contactos.css'
import { NavLink } from 'react-router-dom';

const Contacto = () => {
  return (
    <>
        <div className="main-contacto">
            <div className="contenedor-contacto">
                <div className="text-encabezado">
                    <h1>Escribenos, te respondemos.</h1>
                    <p>¿Dudas con un pedido, un producto o un envío? Cuéntanos y una persona real te contesta lo antes posible.</p>
                </div>
                <hr />
                <div className="contenedor-formulario">
                <div className="group-contacto">
                    <form className="form-contacto">
                        <div className="group-input">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre"/>
                        </div>
                        <div className="group-input">
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" id="email" name="email" placeholder="Ingresa tu correo electrónico"/>
                        </div>
                        <div className="group-input">
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje"></textarea>
                        </div>
                        <button type="submit" className='btn-contacto'>Enviar</button>
                    </form>
                </div>
                 <div className="contacto-redes">
                <div className="contacto">
                    <span>Whatsapp:</span>
                    <NavLink to="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </NavLink>
                </div>
                <div className="contacto">
                    <span>Email:</span>
                   <NavLink to="mailto:info@tienda.com">info@tienda.com</NavLink> <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="contacto">
                    <span>Dirección:</span>
                    <FontAwesomeIcon icon={faLocationDot} />
                </div>
            </div>
            </div>
            </div>
            
           
        </div>
    </>
  )
}

export default Contacto
