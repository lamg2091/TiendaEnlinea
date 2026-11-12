import '../formularios/RegisterUser.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle, faLock,
  faEnvelope, faKey,
  faEye
} from "@fortawesome/free-solid-svg-icons";

const RegistroUser = () => {
  return (
    <>
        <div className="container-main-register">
            <form action="/registro" method="post" className="container-register">
                <fieldset>
                    <FontAwesomeIcon icon={faUserCircle} className='icon-register'/>
                <legend>Crear una cuenta</legend>
                <div className="group-form">
                    <label htmlFor="nameUser">Nombre de usuario</label>
                    <input type="text" name="nameUser" id="nameUser" placeholder="@luiss2091"/>
                    <FontAwesomeIcon icon={faUserCircle} className="icon-form"/>
                </div>
                <div className="group-form">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="luis@gmail.com"/>
                    <FontAwesomeIcon icon={faEnvelope} className="icon-form"/>
                </div>
                <div className="group-form">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" id="password" placeholder="****************"/>
                    <FontAwesomeIcon icon={faLock} className="icon-form"/>
                </div>
                <div className="group-form">
                    <label htmlFor="password">Repetir contraseña</label>
                    <input type="password" name="password" id="password" placeholder="****************"/>
                    <FontAwesomeIcon icon={faKey} className="icon-form"/>
                </div>
                <div className="show-pass">
                    <FontAwesomeIcon icon={faEye} className='icon-form'/>
                      <label htmlFor="show">Mostrar contraseña</label>
                </div>

                <button type="submit" className='btn-register'>Registrate</button>

                <p className="text-fotter">
                    &copy; MainStore 
                </p>
                </fieldset>
            </form>
            
        </div>
    </>
  )
}

export default RegistroUser