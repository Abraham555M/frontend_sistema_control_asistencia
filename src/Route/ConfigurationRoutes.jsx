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
import TipoUsuario from "../Pages/Administrador/TipoUsuario/TipoUsuario";
import TipoPermiso from "../Pages/Administrador/TipoPermiso/TipoPermiso";
import Genero from "../Pages/Administrador/Genero/Genero";
import CambiarPassword from "../Pages/Autenticacion/CambiarPassword";
import ProtectedRoute from "../Hooks/Rutas/ProtectedRoute";
import ComponentUseReducer from "../Components/Apoyo/ComponentUseReducer";

const ConfigurationRoutes = () => {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<InicioSesion />} />
      <Route path="/recuperar" element={<RecuperarPassword />} />
      <Route path="/cambiar-password" element={<CambiarPassword />} />
      <Route path="/practice" element={<ComponentUseReducer/> } />

      {/* Rutas protegidas */}
      <Route
        element={
          <ProtectedRoute>
            <LayoutConNavbar />
          </ProtectedRoute>
        }
      >
        <Route path="/asistencia" element={<Asistencia />} />

        <Route path="/redirigir" element={<Navigate to="/asistencia" />} />

        {/* Anidadas */}
        <Route path="empleados">
          <Route path="lista-empleados" element={<ListarEmpleados />} />
          <Route path="crear-empleados" element={<Empleados />} />
        </Route>

        <Route path="horarios">
          <Route path="lista-horarios" element={<ListarHorario />} />
          <Route path="crear-horarios" element={<Horario />} />
        </Route>

        <Route path="permisos">
          <Route path="lista-permisos" element={<ListarPermisos />} />
          <Route path="crear-permisos" element={<Permisos />} />
        </Route>

        <Route path="administrador">
          <Route path="generos" element={<Genero />} />
          <Route path="tipo-permisos" element={<TipoPermiso />} />
          <Route path="tipo-usuarios" element={<TipoUsuario />} />
        </Route>

      </Route>

      <Route path="*" element={<h1>NOT FOUND</h1>} />
    </Routes>
  );
};

export default ConfigurationRoutes;
