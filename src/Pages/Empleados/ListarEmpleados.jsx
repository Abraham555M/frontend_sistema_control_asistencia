import React, { useEffect, useState } from 'react'
import { listarEmpleados } from '../../Services/Empleado/Empleado'
import TablaEmpleados from '../../Components/Pages/Empleados/TablaEmpleados';
import { FaUserTie } from 'react-icons/fa';

const ListarEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    listarEmpleados()
      .then((res) => setEmpleados(res.data.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className='w-[95%] mx-auto'>
      <div className="mt-6 bg-white border border-gray-200 rounded-2xl shadow-xl">
        {/* Título */}
        <div className="border-b border-gray-300 px-6 py-4">
          <h1 className="text-2xl font-semibold">Lista de Empleados</h1>
        </div>

        {/* Filtros Fechas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="flex flex-col">
            <label className="font-medium mb-1">Desde</label>
            <input
              type="date"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Hasta</label>
            <input
              type="date"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
        </div>

        {/* Buscador + Estado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-6">
          <div className="md:col-span-2">
            <input
              type="text"
              placeholder="Buscar empleado ..."
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <select className="w-full border border-gray-300 px-3 py-2 rounded-lg bg-white focus:ring-2 focus:ring-blue-400 outline-none">
              <option disabled selected>Selecciona un estado</option>
              <option value="1">Activo</option>
              <option value="0">Inactivo</option>
            </select>
          </div>
        </div>
      </div>


      <div className='border'>
      <TablaEmpleados empleados = {empleados} ></TablaEmpleados>

      </div>



    </div>
  )
}

export default ListarEmpleados
