import { Routes, Route, Navigate } from "react-router-dom";
import InicioSesion from "../Pages/Autenticacion/InicioSesion";
import RecuperarPassword from "../Pages/Autenticacion/RecuperarPassword";
import Empleados from "../Pages/Empleados/Empleados";
import Horario from "../Pages/Horario/Horario";
import LayoutConNavbar from "../Route/LayoutConNavbar";
import Asistencia from "../Pages/Asistencia/Asistencia";
import ListarHorario from "../Pages/Horario/ListarHorario";
import ListarEmpleados from "../Pages/Empleados/ListarEmpleados";
import ListarPermisos from "../Pages/Permisos/ListarPermisos";
import Permisos from "../Pages/Permisos/Permisos";

const ConfigurationRoutes = () => {
  return (
    <Routes>
      {/* Rutas sin navbar */}
      <Route path="/" element={<InicioSesion />} />
      <Route path="/recuperar" element={<RecuperarPassword />} />

      {/* Rutas con navbar */}
      <Route element={<LayoutConNavbar />}>
        <Route path="/asistencia" element={<Asistencia />} />
        <Route
          path="/redirigir"
          element={<Navigate to={"/asistencia"}></Navigate>}
        />

        {/* Rutas anidadas */}
        <Route path="horarios">
          <Route path="lista-horarios" element={<ListarHorario />} />
          <Route path="crear-horarios" element={<Horario />} />
        </Route>

         <Route path="empleados">
          <Route path="lista-empleados" element={<ListarEmpleados />} />
          <Route path="crear-empleados" element={<Empleados />} />
        </Route>

         <Route path="permisos">
          <Route path="lista-permisos" element={<ListarPermisos />} />
          <Route path="crear-permisos" element={<Permisos />} />
        </Route>
      </Route>

      <Route path="*" element={<h1>NOT FOUND</h1>} />
    </Routes>
  );
};

export default ConfigurationRoutes;
