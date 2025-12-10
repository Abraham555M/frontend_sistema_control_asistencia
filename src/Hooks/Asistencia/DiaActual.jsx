import { useState, useEffect } from "react";

export const useFechaActual = () => {
  const formatearFecha = () => {
    const fecha = new Date();

    const dias = [
      "Domingo", "Lunes", "Martes", "Miércoles",
      "Jueves", "Viernes", "Sábado"
    ];

    const meses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const diaSemana = dias[fecha.getDay()];
    const diaMes = fecha.getDate();
    const mes = meses[fecha.getMonth()];

    return `Hoy es ${diaSemana}, ${diaMes} de ${mes}.`;
  };

  const [fechaActual, setFechaActual] = useState(formatearFecha());

  // Si quieres actualizar automáticamente cada día/minuto, aquí puedes ampliar
  useEffect(() => {
    const timer = setInterval(() => {
      setFechaActual(formatearFecha());
    }, 60000); // cada 1 minuto

    return () => clearInterval(timer);
  }, []);

  return fechaActual;
};
