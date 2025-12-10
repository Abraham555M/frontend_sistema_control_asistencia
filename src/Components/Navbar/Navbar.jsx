import { useState } from "react";
import MenuItem from "./MenuItem";
import MenuBoton from "./MenuBoton";
import Header from "./Header";
import ExitItem from "./ExitItem";
import Logo from "./Logo";
import { useEmpleadoHeader } from "../../Hooks/Navbar/useEmpleadoHeader";

const Navbar = () => {
  // Estado único que controla cuál menú está abierto
  const [openMenu, setOpenMenu] = useState(null);
  const { empleado, loading } = useEmpleadoHeader();

  // Función genérica para abrir/cerrar un solo menú
  const toggleMenu = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <nav className="bg-[#2D1B4E] flex flex-col w-64 p-6 text-white h-screen justify-between">
        <div>
          {/* Logo */}
          <Logo></Logo>

          {/* Navegación */}
          <ul className="flex flex-col gap-2">
            {/* Asistencia */}
            <li>
              <MenuItem
                direccion={"/asistencia"}
                valor={"Asistencia"}
              ></MenuItem>
            </li>

            {/* Empleados */}
            <li>
              <MenuBoton
                valor={"Empleados"}
                id="empleados"
                openMenu={openMenu}
                toggleMenu={toggleMenu}
                items={[
                  { to: "/empleados/lista-empleados", valor: "Ver Empleados" },
                  { to: "/empleados/crear-empleados", valor: "Crear Empleado" },
                ]}
              ></MenuBoton>
            </li>

            {/* Horarios */}
            <li>
              <MenuBoton
                valor={"Horarios"}
                id="horarios"
                openMenu={openMenu}
                toggleMenu={toggleMenu}
                items={[
                  { to: "/horarios/lista-horarios", valor: "Ver Horarios" },
                  { to: "/horarios/crear-horarios", valor: "Crear Horario" },
                ]}
              ></MenuBoton>
            </li>

            {/* Permisos */}
            <li>
              <MenuBoton
                valor={"Permisos"}
                id="permisos"
                openMenu={openMenu}
                toggleMenu={toggleMenu}
                items={[
                  { to: "/permisos/lista-permisos", valor: "Ver Permisos" },
                  { to: "/permisos/crear-permisos", valor: "Crear Permiso" },
                ]}
              ></MenuBoton>
            </li>

            {/* Administrador */}
            <li>
              <MenuBoton
                valor={"Administrador"}
                id="administrador"
                openMenu={openMenu}
                toggleMenu={toggleMenu}
                items={[
                  { to: "/administrador/generos", valor: "Genero" },
                  { to: "/administrador/tipo-permisos", valor: "Tipo Permiso" },
                  { to: "/administrador/tipo-usuarios", valor: "Tipo Usuario" },
                ]}
              ></MenuBoton>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <ul>
            <li>
              <ExitItem valor="Cerrar Sesión" />
            </li>
          </ul>
        </div>
      </nav>

      {/* Header + Contenido principal */}
      <Header
        rol={empleado?.rol?.nom_rol_usuario || ""}
        nombre={`${empleado?.nom_empleado ?? ""} ${empleado?.ape_empleado ?? ""}`}
        loading={loading}
      />
    </div>
  );
};

export default Navbar;
