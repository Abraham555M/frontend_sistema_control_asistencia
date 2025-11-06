import { Routes, Route } from "react-router-dom";
import InicioSesion from "../Pages/Autenticacion/InicioSesion";
import RecuperarPassword from "../Pages/Autenticacion/RecuperarPassword";

const ConfigurationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<InicioSesion />} />
      <Route path="/recuperar" element={<RecuperarPassword />} />
      <Route path="*" element={ <h1>NOT FOUND</h1>} />
    </Routes>
  );
};

export default ConfigurationRoutes;
