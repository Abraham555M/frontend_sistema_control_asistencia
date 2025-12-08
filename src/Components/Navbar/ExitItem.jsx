import React from 'react'
import { NavLink } from 'react-router-dom'

const ExitItem = ({ direccion, valor }) => {
  return (
    <NavLink
      to={direccion}
      className={({ isActive }) =>
        `block rounded-md px-4 py-3 bg-red-300/20 text-center font-semibold transition ${
          isActive
            ? "bg-white text-red-600"
            : "hover:bg-red-400 hover:text-gray-200"
        }`
      }
    >
      {valor}
    </NavLink>
  )
}

export default ExitItem
