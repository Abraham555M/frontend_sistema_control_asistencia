import { useState } from "react";
import MenuItem from "./MenuItem";
import MenuBoton from "./MenuBoton";
import Header from "./Header";
import ExitItem from "./ExitItem";

const Navbar = () => {
  // Estado único que controla cuál menú está abierto
  const [openMenu, setOpenMenu] = useState(null);

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
          <div className="flex flex-col items-center mb-10">
            <img
              src="https://imagenes.elpais.com/resizer/v2/Y3W6QUFBBZLLTALRW6NBRPZ2RA.jpg?auth=d68f18251117888479d8fdc3210796bc86d9d3f41719da72c2877bcafc3504ea&width=414"
              alt="Logo"
              className="rounded-full w-24 h-24 object-cover border-4 border-white shadow-md"
            />
          </div>

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
        rol={"Administrador"}
        nombre={"Abraham Hilario Fernández"}
      ></Header>
    </div>
  );
};

export default Navbar;
