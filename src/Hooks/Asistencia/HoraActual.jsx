import { useState, useEffect } from "react";

export const useHoraActual = () => {
  const [horaActual, setHoraActual] = useState("");

  useEffect(() => {
    const actualizarHora = () => {
      const opciones = {
        timeZone: "America/Lima",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const hora = new Date().toLocaleTimeString("es-PE", opciones);
      setHoraActual(hora);
    };

    actualizarHora();
    const intervalo = setInterval(actualizarHora, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return horaActual;
};
