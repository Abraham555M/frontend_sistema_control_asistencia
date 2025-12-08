import React, { useState, useEffect } from "react";
import ModalSuccess from "../../Components/Modales/ModalSuccess";
import { useHoraActual } from "../../Hooks/Asistencia/HoraActual";

const Asistencia = () => {
  const horaActual = useHoraActual();
  const [mostrarModal, setMostrarModal] = useState(false);
  
  const handleClick = () => {
    // Aquí podrías registrar la asistencia
    setMostrarModal(true);
  };

  return (
    <div className="flex flex-col items-center h-[95%] gap-6">
      {/* Título */}
      <div className="w-full p-6  bg-white shadow-lg rounded-2xl ">
        <h1 className="text-3xl font-extrabold text-center text-gray-800">
          Bienvenido a Company Street
        </h1>
      </div>

      {/* Contenedor principal */}
      <div className="w-full h-full p-6 border border-gray-200 shadow-lg rounded-2xl bg-white flex flex-col items-center gap-6">
        {/* Botón Mis Asistencias */}
        <button className="self-end bg-[#06B6D4] text-white font-semibold text-md px-5 py-3 rounded-2xl shadow-md hover:bg-[#059ab4] transition">
          Mis Asistencias
        </button>

        {/* Hora actual */}
        <div className="text-4xl font-extrabold text-purple-700 tracking-wide">
          {horaActual}
        </div>

        {/* Botón Registrar */}
        <button
          onClick={handleClick}
          className="w-60 bg-[#8B5CF6] text-white text-md font-bold px-5 py-3 rounded-2xl shadow-md hover:bg-amber-600 transition"
        >
          Registrar Asistencia
        </button>

        {/* Texto informativo */}
        <div className="bg-gray-100 rounded-2xl p-5 w-[90%] text-center shadow-inner h-60">
          <p className="text-gray-600 font-medium">
            Recuerda marcar tu asistencia una sola vez.
          </p>
        </div>
      </div>

      {/* Modal */}
      <ModalSuccess
        isOpen={mostrarModal}
        onClose={() => setMostrarModal(false)}
        title="¡Asistencia Registrada!"
        message="Tu asistencia se ha marcado correctamente."
      />
    </div>
  );
};

export default Asistencia;
