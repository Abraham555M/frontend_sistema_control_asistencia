import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

const Navbar = () => {
  const [openEmpleados, setOpenEmpleados] = useState(false);
  const [openHorarios, setOpenHorarios] = useState(false);
  const [openPermisos, setOpenPermisos] = useState(false);
  const [openAdministrador, setOpenAdministrador] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <nav className="bg-purple-700 flex flex-col w-64 p-6 text-white h-screen">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <img
            src="https://imagenes.elpais.com/resizer/v2/Y3W6QUFBBZLLTALRW6NBRPZ2RA.jpg?auth=d68f18251117888479d8fdc3210796bc86d9d3f41719da72c2877bcafc3504ea&width=414"
            alt="Logo"
            className="rounded-full w-24 h-24 object-cover border-4 border-white shadow-md"
          />
          <h2 className="mt-4 text-lg font-semibold">Panel Admin</h2>
        </div>

        {/* Navegación */}
        <ul className="flex flex-col gap-2">
          <li>
            <NavLink
              to="/asistencia"
              className={({ isActive }) =>
                `block rounded-md px-4 py-3 text-center font-semibold transition ${
                  isActive
                    ? "bg-white text-purple-700"
                    : "hover:bg-purple-600 hover:text-gray-200"
                }`
              }
            >
              Asistencia
            </NavLink>
          </li>

          {/* 🔹 Empleados con submenú */}
          <li>
            <button
              onClick={() => setOpenEmpleados(!openEmpleados)}
              className="w-full flex justify-between items-center rounded-md px-4 py-3 text-center font-semibold transition hover:bg-purple-600"
            >
              Empleados
              {openEmpleados ? (
                <IoChevronUpOutline className="text-lg" />
              ) : (
                <IoChevronDownOutline className="text-lg" />
              )}
            </button>

            {openEmpleados && (
              <ul className="ml-4 mt-2 space-y-2 border-l border-purple-300 pl-3">
                <li>
                  <NavLink
                    to="/empleados/lista-empleados"
                    className={({ isActive }) =>
                      `block rounded-md px-3 py-2 font-medium text-sm transition ${
                        isActive
                          ? "bg-white text-purple-700"
                          : "hover:bg-purple-600 hover:text-gray-200"
                      }`
                    }
                  >
                    Ver Empleados
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/empleados/crear-empleados"
                    className={({ isActive }) =>
                      `block rounded-md px-3 py-2 font-medium text-sm transition ${
                        isActive
                          ? "bg-white text-purple-700"
                          : "hover:bg-purple-600 hover:text-gray-200"
                      }`
                    }
                  >
                    Crear Empleados
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* 🔹 Horarios con submenú */}
          <li>
            <button
              onClick={() => setOpenHorarios(!openHorarios)}
              className="w-full flex justify-between items-center rounded-md px-4 py-3 text-center font-semibold transition hover:bg-purple-600"
            >
              Horarios
              {openHorarios ? (
                <IoChevronUpOutline className="text-lg" />
              ) : (
                <IoChevronDownOutline className="text-lg" />
              )}
            </button>

            {openHorarios && (
              <ul className="ml-4 mt-2 space-y-2 border-l border-purple-300 pl-3">
                <li>
                  <NavLink
                    to="/horarios/lista-horarios"
                    className={({ isActive }) =>
                      `block rounded-md px-3 py-2 font-medium text-sm transition ${
                        isActive
                          ? "bg-white text-purple-700"
                          : "hover:bg-purple-600 hover:text-gray-200"
                      }`
                    }
                  >
                    Ver Horarios
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/horarios/crear-horarios"
                    className={({ isActive }) =>
                      `block rounded-md px-3 py-2 font-medium text-sm transition ${
                        isActive
                          ? "bg-white text-purple-700"
                          : "hover:bg-purple-600 hover:text-gray-200"
                      }`
                    }
                  >
                    Crear Horario
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() => setOpenPermisos(!openPermisos)}
              className="w-full flex justify-between items-center rounded-md px-4 py-3 text-center font-semibold transition hover:bg-purple-600"
            >
              Permisos
              {openPermisos ? (
                <IoChevronUpOutline className="text-lg" />
              ) : (
                <IoChevronDownOutline className="text-lg" />
              )}
            </button>

            {openPermisos && (
              <ul className="ml-4 mt-2 space-y-2 border-l border-purple-300 pl-3">
                <li>
                  <NavLink
                    to="/permisos/lista-permisos"
                    className={({ isActive }) =>
                      `block rounded-md px-3 py-2 font-medium text-sm transition ${
                        isActive
                          ? "bg-white text-purple-700"
                          : "hover:bg-purple-600 hover:text-gray-200"
                      }`
                    }
                  >
                    Ver Permisos
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/permisos/crear-permisos"
                    className={({ isActive }) =>
                      `block rounded-md px-3 py-2 font-medium text-sm transition ${
                        isActive
                          ? "bg-white text-purple-700"
                          : "hover:bg-purple-600 hover:text-gray-200"
                      }`
                    }
                  >
                    Crear Permisos
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() => setOpenAdministrador(!openAdministrador)}
              className="w-full flex justify-between items-center rounded-md px-4 py-3 text-center font-semibold transition hover:bg-purple-600"
            >
              Administrador
              {openAdministrador ? (
                <IoChevronUpOutline className="text-lg" />
              ) : (
                <IoChevronDownOutline className="text-lg" />
              )}
            </button>

            {openAdministrador && (
              <ul className="ml-4 mt-2 space-y-2 border-l border-purple-300 pl-3">
                <li>
                  <NavLink
                    to="/administrador/generos"
                    className={({ isActive }) =>
                      `block rounded-md px-3 py-2 font-medium text-sm transition ${
                        isActive
                          ? "bg-white text-purple-700"
                          : "hover:bg-purple-600 hover:text-gray-200"
                      }`
                    }
                  >
                    Genero 
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/administrador/tipo-permisos"
                    className={({ isActive }) =>
                      `block rounded-md px-3 py-2 font-medium text-sm transition ${
                        isActive
                          ? "bg-white text-purple-700"
                          : "hover:bg-purple-600 hover:text-gray-200"
                      }`
                    }
                  >
                    Tipo Permiso
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/administrador/tipo-usuarios"
                    className={({ isActive }) =>
                      `block rounded-md px-3 py-2 font-medium text-sm transition ${
                        isActive
                          ? "bg-white text-purple-700"
                          : "hover:bg-purple-600 hover:text-gray-200"
                      }`
                    }
                  >
                    Tipo Usuarios
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Cerrar sesión */}
          <li className="mt-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block rounded-md px-4 py-3 text-red-300 text-center font-semibold transition ${
                  isActive
                    ? "bg-white text-purple-700"
                    : "hover:bg-purple-600 hover:text-gray-200"
                }`
              }
            >
              Cerrar Sesión
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Header + Contenido principal */}
      <div className="flex-1 flex flex-col">
        {/* Header superior */}
        <header className="bg-amber-200 h-16 flex items-center justify-between px-10 shadow-md">
          <h1 className="font-bold text-gray-800">
            Rol del Usuario:{" "}
            <span className="text-purple-700">Administrador</span>
          </h1>

          <div className="flex items-center gap-3 text-gray-800">
            <FaUser className="text-2xl text-purple-700" />
            <h2 className="font-semibold">Marcos López Gutiérrez</h2>
          </div>
        </header>

        {/* Aquí va el contenido renderizado */}
        <main className="flex-1 bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Navbar;
