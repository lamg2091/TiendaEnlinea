import "../estilos/Inicio.css";
import { NavLink } from "react-router-dom";
import imagenModelo from "../assets/images/modelo-1.jpg";
import imagenCategoMujer from "../assets/images/foto-mujer.jpg";
import imagenCategoriaHombre from "../assets/images/foto-ropa-hombre.jpg";
import imagenCategoriaAccesorio from "../assets/images/accesorios.jpg";
const Inicio = () => {
  return (
    <>
      <main className="container-main">
        <section className="container-inicio">
          <div className="inicio">
            <h1>Viste a tu manera</h1>
            <p className="parrapha">
              Dale estilo a tus dias con nustros productos
            </p>
            <NavLink to="#" className='about'>Comprar ahora</NavLink>
          </div>

          <div className="container-img">
            <img
              src={imagenModelo}
              alt="Imagen presentacion"
            />
          </div>
        </section>

        <section className="categoria">
          <h1>Comprar por categoria</h1>
          <div className="card-categoria">
            <div className="img-card">
              <img
                src={imagenCategoMujer}
                className="img-categoria"
                alt="categoria mujer"
              />
              <div className="nombre-categoria">
                <p className="parrafo">Mujer</p>
                <NavLink to="#" className='link'>Ver todo</NavLink>
              </div>
            </div>
            <div className="img-card">
              <img
                src={imagenCategoriaHombre}
                className="img-categoria"
                alt="categoria mujer"
              />
              <div className="nombre-categoria">
                <p className="parrafo">Hombre</p>
              <NavLink to="#" className='link'>Ver todo</NavLink>
              </div>
              
            </div>
            <div className="img-card">
              <img
                src={imagenCategoriaAccesorio}
                className="img-categoria"
                alt="categoria mujer"
              />
              <div className="nombre-categoria">
                 <p className="parrafo">Accesorio</p>
              <NavLink to="#" className='link'>Ver todo</NavLink>
              </div>
            </div>
          </div>
        </section>
        <section className="descripcion-inicio">
            <h2>eleva tu estilo con nuestras prenda</h2>
            <NavLink to="#">Haz tu comapra aqui</NavLink>
        </section>
      </main>
    </>
  );
};

export default Inicio;
