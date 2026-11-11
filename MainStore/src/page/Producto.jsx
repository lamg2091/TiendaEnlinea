import LogoEmpresa from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSearch,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import "../estilos/Producto.css";
const Producto = () => {
  const Productos = [
    {
  id: 1,
  nombre: "Vestido rojo",
  descripcion: "Vestido rojo elegante de corte ajustado, ideal para fiestas y eventos especiales. Elaborado en tela suave y cómoda con excelente caída.",
  precio: 85000,
  categoria: "vestidos",
  imagen: "/images/vestido-rojo.jpg",
},
{
  id: 2,
  nombre: "Falda negra",
  descripcion: "Falda negra de manga corta estilo campesina, elaborada a base de poliéster.",
  precio: 45000,
  categoria: "faldas",
  imagen: "/images/falda-negra.jpg",
},
{
  id: 3,
  nombre: "Blusa blanca",
  descripcion: "Blusa blanca fresca y versátil, perfecta para el día a día o la oficina. Tela ligera que combina con cualquier prenda.",
  precio: 38000,
  categoria: "blusas",
  imagen: "/images/blusa-blanca.jpg",
},
{
  id: 4,
  nombre: "Blusa blanca",
  descripcion: "Blusa blanca fresca y versátil, perfecta para el día a día o la oficina. Tela ligera que combina con cualquier prenda.",
  precio: 38000,
  categoria: "blusas",
  imagen: "/images/blusa-blanca.jpg",
},
  ];
  return (
    <>
      <div className="container-producto">
        <div className="producto">
          <header className="header">
            <img
              src={LogoEmpresa}
              alt="logo empresa"
              style={{ width: "200px", backgroundColor: "black" }}
            />
            <div className="cart">
              <FontAwesomeIcon icon={faShoppingCart} className="icon-cart" />
              <span>(0)</span>
            </div>
          </header>

          <main className="section-principal">
            <aside className="container-aside">
              <h2>Buscar por nombre</h2>
              <div className="filtro-nombre">
                <FontAwesomeIcon icon={faSearch} className="icon-header"/>
                <input type="text" name="name" id="name" placeholder="Buscar...."/>
              </div>
              <h2 className="header-categoria">Categoría</h2>
              <div className="input-categoria">
                <input type="checkbox" name="vestidos" id="vestidos" />
                <label htmlFor="vestidos">Vestidos</label>
              </div>

              <div className="input-categoria">
                <input type="checkbox" name="faldas" id="faldas" />
                <label htmlFor="faldas">Faldas</label>
              </div>

              <div className="input-categoria">
                <input type="checkbox" name="blusas" id="blusas" />
                <label htmlFor="blusas">Blusas</label>
              </div>

              <div className="input-categoria">
                <input type="checkbox" name="pantalones" id="pantalones" />
                <label htmlFor="pantalones">Pantalones</label>
              </div>
              <div className="talla-producto">
                <h2>Talla</h2>
                <div className="tallas">
                  <span>sx</span>
                  <span>s</span>
                  <span>m</span>
                  <span>l</span>
                  <span>lx</span>
                </div>
              </div>

              <div className="container-precio">
                <h2>Precio</h2>
                <div className="precio">
                  <div className="input-precio">
                    <label htmlFor="precioMax">Precio maximo</label>
                  <input
                    type="number"
                    name="precioMax"
                    id="precioMax"
                    placeholder="$"
                  />
                  </div>
                  <div className="input-precio">
                     <label htmlFor="precioMax">Precio minimo</label>
                  <input
                    type="number"
                    name="precioMin"
                    id="precioMin"
                    placeholder="$"
                  />
                  </div>
                </div>
              </div>

              <div className="btn-function">
                <input type="button" value="Aplicar filtro" />
                <input type="button" value="Limpiar filtro" />
              </div>
            </aside>

            <section className="container-producto">
              <h1 className="title-producto">Catalogo</h1>
              <div className="grid-producto">
                {Productos.map((producto) => (
                  <article className="card-producto" key={producto.id}>
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                    />
                    <h2>{producto.nombre}</h2>
                    <p className="descripcion">{producto.descripcion}</p>
                    <p>$ {producto.precio.toLocaleString(2)}</p>
                    <button type="submit">Agregar al carrito</button>
                  </article>
                ))}
              </div>
              <div className="container-paginacion">
                <FontAwesomeIcon icon={faArrowAltCircleLeft} className="icon-paginacion"/>
                <p>Pagina 1 de 2</p>
                <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon-paginacion"/>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Producto;
