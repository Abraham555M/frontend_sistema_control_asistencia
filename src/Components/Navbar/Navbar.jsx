import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-6">
      <ul>
        <NavLink to="/empleados">Empleados </NavLink>
        <NavLink to="/horarios">Horarios</NavLink>
      </ul>
      <button className="ml-auto bg-red-500 px-3 py-1 rounded">Cerrar sesión</button>
    </nav>
  );
};

export default Navbar
