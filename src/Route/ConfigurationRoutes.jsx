import { Routes, Route } from "react-router-dom";
import InicioSesion from "../Pages/Autenticacion/InicioSesion";
import RecuperarPassword from "../Pages/Autenticacion/RecuperarPassword";
import Empleados from "../Pages/Empleados/Empleados";
import Horario from "../Pages/Horario/Horario";
import LayoutConNavbar from "../Route/LayoutConNavbar";
import Asistencia from "../Pages/Asistencia/Asistencia";


const ConfigurationRoutes = () => {
  return (
    <Routes>
      {/* Rutas sin navbar */}
      <Route path="/" element={<InicioSesion />} />
      <Route path="/recuperar" element={<RecuperarPassword />} />

      {/* Rutas con navbar */}
      <Route element={<LayoutConNavbar />}>
       <Route path="/asistencia" element={<Asistencia />} />
        <Route path="/empleados" element={<Empleados />} />
        <Route path="/horarios" element={<Horario />} />
      </Route>

      <Route path="*" element={<h1>NOT FOUND</h1>} />
    </Routes>
  );
};

export default ConfigurationRoutes;
