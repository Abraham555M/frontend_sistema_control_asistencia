import { useState } from "react";
import Toggle from "../../Layouts/Toggle";
import { FaEdit } from "react-icons/fa";

const TablaEmpleados = ({ empleados }) => {
  const [enabled, setEnabled] = useState(false);

  const handleEditarEmpleado = () => {

  }

  return (
    <div className="bg-white shadow-md rounded-2xl p-4">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#4d3277] text-white">
            <th className="py-3 px-4 rounded-l-xl">ID</th>
            <th className="py-3 px-4">Nombre</th>
            <th className="py-3 px-4">Teléfono</th>
            <th className="py-3 px-4">Email</th>
            <th className="py-3 px-4">Estado</th>
            <th className="py-3 px-4 rounded-r-xl text-center">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {empleados.length === 0 ? (
            <tr>
              <td colSpan="6" className="py-6 text-center text-gray-500 italic">
                No hay registros de empleados
              </td>
            </tr>
          ) : (
            empleados.map((empleado) => (
              <tr
                key={empleado.id_empleado}
                className="border-b hover:bg-gray-100 transition"
              >
                <td className="py-3 px-4">{empleado.id_empleado}</td>
                <td className="py-3 px-4 font-medium">
                  {empleado.nom_empleado + " " + empleado.ape_empleado}
                </td>
                <td className="py-3 px-4">{empleado.tel_empleado}</td>
                <td className="py-3 px-4">{empleado.ema_empleado}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      empleado.est_empleado === 1
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {empleado.est_empleado === 1 ? "Activo" : "Inactivo"}
                  </span>
                </td>

                <td className="py-3 px-4 text-center flex  justify-between items-center">
                  <Toggle enabled={enabled} setEnabled={setEnabled} />
                  <FaEdit onClick={handleEditarEmpleado} className="text-2xl text-pink-700 hover:scale-115 transition-transform" />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TablaEmpleados;
