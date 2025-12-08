import React from 'react'
import { FaUser } from 'react-icons/fa'
import { Outlet } from 'react-router-dom'

const Header = ({rol, nombre}) => {
  return (
    <div className="flex-1 flex flex-col">
        {/* Header superior */}
        <header className="bg-[#6B4B9E] h-16 flex items-center justify-between px-10 shadow-md">
            <h1 className="font-bold text-white">
            Rol del Usuario:{" "}
            <span className="text-white">{rol}</span>
            </h1>

            <div className="flex items-center gap-3 text-gray-800">
            <FaUser className="text-2xl text-purple-700" />
            <h2 className="font-semibold">{nombre}</h2>
            </div>
        </header>

        {/* Contenido dinámico */}
        <main className="flex-1 bg-gray-100 p-6">
            <Outlet />
        </main>
    </div>
  )
}

export default Header
