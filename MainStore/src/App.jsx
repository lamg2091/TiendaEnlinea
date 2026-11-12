import Navbar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Fotter from './components/Fotter';
import Nosotros from "./page/Nosotros";

// Rota Publicas//
import Inicio from "./page/Inicio";
import Producto from './page/Producto'
import Contacto from './page/Contacto'
import InicioSesion from "./formularios/Inicio-sesion";
import RegistroUser from './formularios/RegistroUser'

function App() {
  return (
    <>
      <Navbar />
  
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/producto" element={<Producto/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/iniciosesion" element={<InicioSesion/>}/>
        <Route path="/registeruser" element={<RegistroUser/>}/>
      </Routes>
      <Fotter />
    </>
  );
}

export default App;
