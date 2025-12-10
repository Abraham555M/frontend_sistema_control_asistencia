import React from 'react'
import { FaUser } from 'react-icons/fa'
import { Outlet } from 'react-router-dom'

const Header = ({ rol, nombre, loading }) => {
  return (
    <div className="flex-1 flex flex-col">

      {/* Header superior */}
      <header className="bg-[#4d3277] h-16 flex items-center justify-between px-10 shadow-lg">

        {/* ROL */}
        <h1 className="text-white/90 text-md font-semibold tracking-wide flex items-center gap-2">
          Rol del Usuario:

          {loading ? (
            /* Loader shimmer */
            <span className="w-32 h-5 bg-white/20 rounded-lg animate-pulse"></span>
          ) : (
            <span className="text-white font-bold bg-white/10 px-3 py-1 rounded-xl backdrop-blur-sm hover:scale-110 transition-transform">
              {rol}
            </span>
          )}
        </h1>

        {/* USUARIO */}
        <div className="flex items-center gap-4">

          {loading ? (
            <>
              {/* Círculo Loader */}
              <div className="w-10 h-10 rounded-full bg-white/20 animate-pulse"></div>

              {/* Línea loader */}
              <div className="w-28 h-5 bg-white/20 rounded-lg animate-pulse"></div>
            </>
          ) : (
            <>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 shadow-inner">
                <FaUser className="text-white text-xl" />
              </div>

              <h2 className="text-white font-semibold text-md">
                {nombre}
              </h2>
            </>
          )}
        </div>
      </header>

      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default Header
