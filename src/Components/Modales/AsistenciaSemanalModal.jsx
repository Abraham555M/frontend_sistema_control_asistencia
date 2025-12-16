import React from "react";
import GlassModal from "./GlassModal";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
} from "react-icons/fa";

const mockAsistencia = [
  { dia: "Lunes", fecha: "08/01", entrada: "08:00", salida: "17:00", estado: "ASISTIO" },
  { dia: "Martes", fecha: "09/01", entrada: "08:12", salida: "17:00", estado: "TARDANZA" },
  { dia: "Miércoles", fecha: "10/01", entrada: "--", salida: "--", estado: "FALTA" },
  { dia: "Jueves", fecha: "11/01", entrada: "08:00", salida: "17:00", estado: "ASISTIO" },
  { dia: "Viernes", fecha: "12/01", entrada: "--", salida: "--", estado: "DESCANSO" },
  { dia: "Sabado", fecha: "12/01", entrada: "--", salida: "--", estado: "DESCANSO" },
  { dia: "Domingo", fecha: "12/01", entrada: "--", salida: "--", estado: "DESCANSO" },
];

const estadoUI = {
  ASISTIO: {
    label: "Asistió",
    color: "text-green-400",
    icon: <FaCheckCircle />,
  },
  TARDANZA: {
    label: "Tardanza",
    color: "text-yellow-400",
    icon: <FaClock />,
  },
  FALTA: {
    label: "Falta",
    color: "text-red-400",
    icon: <FaTimesCircle />,
  },
  DESCANSO: {
    label: "Descanso",
    color: "text-gray-400",
    icon: "—",
  },
};

const AsistenciaSemanalModal = ({ open, onClose }) => {
  return (
    <GlassModal
      open={open}
      onClose={onClose}
      title="Asistencia semanal"
      message="Semana del 08 al 12 de enero"
    >
      {/* Contenedor grande */}
      <div className="w-[950px] max-w-full ">

        {/* Resumen */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-green-500/20 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">3</p>
            <p className="text-sm text-white/80">Asistencias</p>
          </div>
          <div className="bg-yellow-500/20 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">1</p>
            <p className="text-sm text-white/80">Tardanzas</p>
          </div>
          <div className="bg-red-500/20 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">1</p>
            <p className="text-sm text-white/80">Faltas</p>
          </div>
        </div>

        {/* Tabla visual */}
        <div className="overflow-y-auto max-h-[350px] rounded-2xl border border-white/20">
          {/* Header */}
          <div className="grid grid-cols-5 bg-white/20 p-3 text-sm font-semibold text-center">
            <span>Día</span>
            <span>Fecha</span>
            <span>Entrada</span>
            <span>Salida</span>
            <span>Estado</span>
          </div>

          {/* Filas */}
          {mockAsistencia.map((d, i) => {
            const estado = estadoUI[d.estado];

            return (
              <div
                key={i}
                className="grid grid-cols-5 p-3 text-center items-center
                           border-t border-white/10 hover:bg-white/10 transition"
              >
                <span>{d.dia}</span>
                <span className="text-white/70">{d.fecha}</span>
                <span>{d.entrada}</span>
                <span>{d.salida}</span>
                <span className={`flex justify-center items-center gap-1 ${estado.color}`}>
                  {estado.icon}
                  {estado.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-white/20 hover:bg-white/30 transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </GlassModal>
  );
};

export default AsistenciaSemanalModal;
