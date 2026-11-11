import React from "react";
import { NavLink } from "react-router-dom";
import "../estilos/Nosotros.css";

const Nosotros = () => {
  return (
    <>
      <div className="container-nosotros">
        <div className="header-nosotros">
          <h1>Yu tienda de confianza, en nueva venecia magdalena</h1>
          <p>
            En mainStore reunimos lo que usas todos los días, con precios
            claros, envíos puntuales y gente real al otro lado de la pantalla.
          </p>
        </div>
        <hr />
        <div className="descripcion-nosotros">
          <div className="descripcion-comienzo">
            <h2>¿Como empezamos?</h2>
          <p className="descripcion-comienzo-texto">
            mainStore nació de una idea sencilla: comprar en línea debería ser
            tan fácil y cercano como entrar a la tienda de la esquina. Empezamos
            con unos pocos productos y un puñado de clientes que se convirtieron
            en vecinos. Hoy seguimos igual: elegimos cada artículo con cuidado,
            respondemos cada mensaje y entregamos lo que prometemos.
          </p>
          </div>
          <div className="preguntas-frecuentes">
            <div className="container-preguntas">
              <h2>Precios claros</h2>
              <p>Lo que ves es lo que pagas. Sin costos escondidos al final.</p>
            </div>
            <div className="container-preguntas">
              <h2>Trato cercano</h2>
              <p>Te atendemos personas, no formularios. Escríbenos y te respondemos.</p>
            </div>
            <div className="container-preguntas">
              <h2>Entregas puntuales</h2>
              <p>Empacamos con cuidado y te avisamos en cada paso del envío.</p>
            </div>
          </div>
          <div className="quienes-somos">
            <h2>¿Quiénes somos?</h2>
            <div className="group-list">
               <div className="list-group-item">
                <img src="https://via.placeholder.com/150" alt="Juan Perez" />
                <h3>Juan Perez</h3>
                <p>Fundador y CEO</p>
              </div>

               <div className="list-group-item">
                <img src="https://via.placeholder.com/150" alt="Juan Perez" />
                <h3>Juan Perez</h3>
                <p>Fundador y CEO</p>
              </div>

              <div className="list-group-item">
                <img src="https://via.placeholder.com/150" alt="Juan Perez" />
                <h3>Juan Perez</h3>
                <p>Fundador y CEO</p>
              </div>
            </div>
          </div>

          <NavLink to='#'>Ver la tienda</NavLink>
        </div>
      </div>
    </>
  );
};

export default Nosotros;
