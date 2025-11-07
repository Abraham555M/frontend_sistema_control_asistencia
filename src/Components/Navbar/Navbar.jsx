import React from 'react'
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <nav className="bg-purple-700 flex flex-col w-64 p-6 text-white">
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
        <ul className="flex flex-col gap-3">
          <li>
            <NavLink
              to="/empleados"
              className={({ isActive }) =>
                `block rounded-md px-4 py-3 text-center font-semibold transition ${
                  isActive
                    ? "bg-white text-purple-700"
                    : "hover:bg-purple-600 hover:text-gray-200"
                }`
              }
            >
              Empleados
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/horarios"
              className={({ isActive }) =>
                `block rounded-md px-4 py-3 text-center font-semibold transition ${
                  isActive
                    ? "bg-white text-purple-700"
                    : "hover:bg-purple-600 hover:text-gray-200"
                }`
              }
            >
              Horarios
            </NavLink>
          </li>

          <li className='mt-120'>
            <NavLink
              to="/empleados"
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
            Rol del Usuario: <span className="text-purple-700">Administrador</span>
          </h1>

          <div className="flex items-center gap-3 text-gray-800">
            <FaUser className="text-2xl text-purple-700" />
            <h2 className="font-semibold">Marcos López Gutiérrez</h2>
          </div>
        </header>

        {/* Aquí va el contenido renderizado */}
        <main className="flex-1 bg-gray-100 p-6">
          {/* <Outlet />  si usas layouts */}
        </main>
      </div>
    </div>
  );
};

export default Navbar
