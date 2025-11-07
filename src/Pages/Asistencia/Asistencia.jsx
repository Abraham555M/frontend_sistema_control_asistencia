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
    <div className="border flex flex-col items-center justify-center h-[80%] gap-5">
      {/* Hora actual */}
      <div className="text-3xl font-bold text-purple-700">
        {horaActual}
      </div>

      {/* Botón */}
      <button         onClick={handleClick}
 className="flex justify-center cursor-pointer bg-amber-400 rounded-2xl p-5 w-60 text-white text-xl font-bold shadow-md hover:bg-amber-500 transition">
        Registrar Asistencia
      </button>

      {/* Texto */}
      <div>
        <p className="text-gray-600">Recuerda marcar tu asistencia una sola vez</p>
      </div>

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
