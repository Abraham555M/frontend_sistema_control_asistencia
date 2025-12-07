import React, { useState, useEffect } from "react";
import ModalSuccess from "../../Components/Modales/ModalSuccess";

const Asistencia = () => {
  const [horaActual, setHoraActual] = useState("");

  useEffect(() => {
    // Función que actualiza la hora cada segundo
    const actualizarHora = () => {
      const opciones = {
        timeZone: "America/Lima",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false, // formato 24h
      };
      const hora = new Date().toLocaleTimeString("es-PE", opciones);
      setHoraActual(hora);
    };

    // Llamamos una vez al cargar
    actualizarHora();

    // Actualizamos cada segundo
    const intervalo = setInterval(actualizarHora, 1000);

    // Limpiamos el intervalo al desmontar
    return () => clearInterval(intervalo);
  }, []);

  const [mostrarModal, setMostrarModal] = useState(false);

  const handleClick = () => {
    // Aquí podrías registrar la asistencia
    setMostrarModal(true);
  };

  return (
    <div className="flex flex-col items-center h-[95%] gap-6">
      {/* Título */}
      <div className="w-full p-6 border border-gray-200 shadow-lg rounded-2xl bg-white">
        <h1 className="text-3xl font-extrabold text-center text-gray-800">
          Bienvenido a Company Street
        </h1>
      </div>

      {/* Contenedor principal */}
      <div className="w-full p-6 border border-gray-200 shadow-lg rounded-2xl bg-white flex flex-col items-center gap-6">
        {/* Botón Mis Asistencias */}
        <button className="self-end bg-green-500 text-white font-semibold text-md px-5 py-3 rounded-2xl shadow-md hover:bg-green-600 transition">
          Mis Asistencias
        </button>

        {/* Hora actual */}
        <div className="text-4xl font-extrabold text-purple-700 tracking-wide">
          {horaActual}
        </div>

        {/* Botón Registrar */}
        <button
          onClick={handleClick}
          className="w-60 bg-amber-500 text-white text-md font-bold px-5 py-3 rounded-2xl shadow-md hover:bg-amber-600 transition"
        >
          Registrar Asistencia
        </button>

        {/* Texto informativo */}
        <div className="bg-gray-100 rounded-2xl p-5 w-[80%] text-center shadow-inner">
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
