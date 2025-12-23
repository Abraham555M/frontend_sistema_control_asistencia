import { useState } from "react";
import { useHoraActual } from "../../Hooks/Asistencia/HoraActual";
import { useFechaActual } from "../../Hooks/Asistencia/DiaActual";
import AsistenciaSemanalModal from "../../Components/Modales/AsistenciaSemanalModal";
import ModalCondicional from "../../Components/Modales/ModalCondicional";

const Asistencia = () => {
  const horaActual = useHoraActual();
  const fechaActual = useFechaActual();

  const [mostrarModal, setMostrarModal] = useState(false);
  const [modalMisAsistencias, setModalMisAsistencias] = useState(false); 

  const handleClick = () => {
    // Aquí podrías registrar la asistencia
    setMostrarModal(true);
  };

  const handleMisAsistencias = () => {
    setModalMisAsistencias(true);
  }

  return (
    <div className="flex flex-col items-center h-[95%] gap-6">
      {/* Título */}
      <div className="w-full p-6 bg-white shadow-lg rounded-2xl text-center space-y-2">
        <h1 className="text-3xl font-extrabold text-gray-800">
          Bienvenido a Company Street
        </h1>
        <p className="text-xl font-semibold">¿Listo para marcar tu asistencia?</p>
      </div>

      {/* Contenedor principal */}
      <div className="w-full h-full p-6 border border-gray-200 shadow-lg rounded-2xl bg-white flex flex-col items-center gap-6">
       <div className="flex justify-end w-full">
        {/* Botón Mis Asistencias */}
        <button onClick={handleMisAsistencias} className="self-end bg-[#06B6D4] text-white font-semibold text-md px-5 py-3 rounded-2xl shadow-md hover:bg-[#059ab4] hover:scale-105 transition-transform">
          Mis Asistencias
        </button>
       </div>

        {/* Hora actual */}
        <div className=" text-black tracking-wide text-center">
         
        <p>{fechaActual}</p>
          <span className="text-4xl font-extrabold"> {horaActual} </span>
        </div>

        {/* Botón Registrar */}
        <button
          onClick={handleClick}
          className="w-60 bg-[#EC4899] text-white text-md font-bold px-5 py-3 rounded-2xl shadow-md hover:bg-[#bb1869] hover:scale-105 transition-transform"
        >
          Registrar Asistencia
        </button>

        {/* Texto informativo */}
        <div className="bg-gray-100 rounded-2xl p-5 w-[90%] text-center shadow-inner h-60 flex items-center justify-center">
          <p className="text-gray-600 font-medium text-xl">
            Recuerda marcar tu asistencia una sola vez.
          </p>
        </div>
      </div>

      {/* Modal */}
       <ModalCondicional
            open={mostrarModal} 
            onClose={() => setMostrarModal(false)}
            title="Cerrar Sesión"
            message={"¿Desea cerrar sesión de su cuenta?"}
        >
         
        </ModalCondicional>

      <AsistenciaSemanalModal
        open={modalMisAsistencias}
        onClose={() => setModalMisAsistencias(false)}
      />

    </div>
  );
};

export default Asistencia;
