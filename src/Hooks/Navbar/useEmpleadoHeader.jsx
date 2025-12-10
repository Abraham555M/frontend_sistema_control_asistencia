import { useEffect, useState } from "react";
import { obtenerEmpleadoHeader } from "../../Services/Empleado/Empleado";

export const useEmpleadoHeader = () => {
  const [empleado, setEmpleado] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Intentar obtener del localStorage
    const empleadoGuardado = localStorage.getItem("usuario");

    if (empleadoGuardado) {
      try {
        const empleadoData = JSON.parse(empleadoGuardado);
        setEmpleado(empleadoData);
        setLoading(false);
      } catch (error) {
        console.error("Error al parsear empleado:", error);
      }
    }

    // 2. Refrescar datos desde backend
    obtenerEmpleadoHeader()
      .then((res) => {
        setEmpleado(res.data.data);
        localStorage.setItem("usuario", JSON.stringify(res.data.data));
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error:", err.response?.data);
        setLoading(false);
      });
  }, []);

  return { empleado, loading };
};
