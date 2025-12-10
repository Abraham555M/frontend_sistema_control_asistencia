import { useEffect, useState } from "react";
import { listarEmpleados } from "../../Services/Empleado/Empleado";
import TablaEmpleados from "../../Components/Pages/Empleados/TablaEmpleados";
import { useNavigate } from "react-router-dom";

const ListarEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    listarEmpleados()
      .then((res) => setEmpleados(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const handleCrearEmpleado = () => {
    navigate("/empleados/crear-empleados");
  }

  return (
    <div className="w-[95%] mx-auto mt-6">

      {/* Card principal */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">

        {/* Header del card */}
        <div className="bg-[#4d3277] px-6 py-4 text-white rounded-t-2xl flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Lista de Empleados</h1>
          <button onClick={handleCrearEmpleado} className="bg-amber-200/30 rounded-2xl px-5 py-2 font-bold hover:scale-110 transition-transform">Crear Empleado</button>
        </div>

        {/* Filtros por fechas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border-b border-gray-200">
          <div className="flex flex-col">
            <label className="font-medium mb-1 text-gray-700">Desde</label>
            <input
              type="date"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-[#4d3277] outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1 text-gray-700">Hasta</label>
            <input
              type="date"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-[#4d3277] outline-none"
            />
          </div>
        </div>

        {/* Buscadores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-6 border-b border-gray-200">
          
          {/* Input Buscar */}
          <div className="md:col-span-2">
            <label className="text-gray-700 font-medium mb-1 block">
              Buscar empleado
            </label>
            <input
              type="text"
              placeholder="Escribe nombre, teléfono o email..."
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-[#4d3277] outline-none"
            />
          </div>

          {/* Select Estado */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Estado</label>
            <select className="w-full border border-gray-300 px-3 py-2 rounded-lg bg-white focus:ring-2 focus:ring-[#4d3277] outline-none">
              <option selected disabled>
                Selecciona un estado
              </option>
              <option value="1">Activo</option>
              <option value="0">Inactivo</option>
            </select>
          </div>
        </div>

        {/* Tabla */}
        <div className="p-5">
          <TablaEmpleados empleados={empleados} />
        </div>
      </div>
    </div>
  );
};

export default ListarEmpleados;
