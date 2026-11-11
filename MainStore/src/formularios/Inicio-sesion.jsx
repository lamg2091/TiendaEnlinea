import "../formularios/InicioSesion.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { useForm } from "react-hook-form";
import { useState } from "react";

const InicioSesion = () => {
  const [mostrarcontrasena, setMostrarContrasena] = useState(false);
  const mostrarContrasena = () => {
    setMostrarContrasena(!mostrarcontrasena);
  
  };
  
  const {register, handleSubmit, formState: { errors },} = useForm();

  const onSubmit = (data) =>{
    alert('los datos se enviaron correctamente', data)
  }
  return (
    <>
      <div className="container-login">
        <form action="#" method="post" className="form-login" onSubmit={handleSubmit(onSubmit)}>
          <FontAwesomeIcon icon={faUserCircle} className="icon-login" />
          <h1>Ingresa de nuevo</h1>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="joe@gmail.com"
              {...register('email',{
                required: 'El correo es obligatorio',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Ingrese un correo valido'
                }
              })}
              
            />
            <FontAwesomeIcon icon={faEnvelope} className="icon-email" />
            {errors.email && <p className='error'>{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type={mostrarcontrasena ? "text" : "password"}
              name="email"
              id="password"
              placeholder="***********"
              {...register('password', {
                required: 'Por favor este campo es obligatorio',
                minLength: {
                  value: 6,
                  message: 'La contraseña debe teber al menos 6 carateres'
                }
              })}
            />
            <FontAwesomeIcon icon={faLock} className="icon-password" />
            {errors.password && <p className='error'>{errors.password.message}</p>}
          </div>
          <div className="mostrar-passwor">
            <input
              type="checkbox"
              name="checkbox"
              id="chaeckbox"
              checked={mostrarcontrasena}
              onChange={mostrarContrasena}
            />
            <label htmlFor="chaeckbox">mostrar contraseña</label>
          </div>
          <input type="submit" value="Entrar" className="btn-login" />

          <div className="link-inicio">
            <span>
              ¿No tienes una cuenta registrate?<NavLink to="#">aqui</NavLink>
            </span>
            <span>
              ¿Te se olvido la contraseña?<NavLink to="#">aqui</NavLink>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default InicioSesion;
