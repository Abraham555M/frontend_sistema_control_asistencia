import React, { useState } from "react";

const Empleados = () => {
  const [formData, setFormData] = useState({
    id_genero: "",
    id_rol_usuario: "",
    nom_empleado: "",
    ape_empleado: "",
    fch_nac_empleado: "",
    ema_empleado: "",
    doc_empleado: "",
    tel_empleado: "",
    img_empleado: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Empleado a registrar:", formData);
  };

  return (
    <div className="w-[95%] mx-auto mt-6">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-[#4d3277] px-6 py-4 text-white rounded-t-2xl">
          <h1 className="text-2xl font-semibold">Crear Empleado</h1>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border border-gray-200">

            {/* Nombres */}
            <div className="flex flex-col">
              <label className="font-medium mb-1 text-gray-700">Nombres</label>
              <input
                type="text"
                name="nom_empleado"
                value={formData.nom_empleado}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-[#4d3277] outline-none"
                placeholder="Carlos"
              />
            </div>

            {/* Apellidos */}
            <div className="flex flex-col">
              <label className="font-medium mb-1 text-gray-700">Apellidos</label>
              <input
                type="text"
                name="ape_empleado"
                value={formData.ape_empleado}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-[#4d3277] outline-none"
                placeholder="Ramírez"
              />
            </div>

            {/* Género */}
            <div className="flex flex-col">
              <label className="font-medium mb-1 text-gray-700">Género</label>
              <select
                name="id_genero"
                value={formData.id_genero}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg bg-white focus:ring-2 focus:ring-[#4d3277] outline-none"
              >
                <option value="">Seleccione</option>
                <option value="1">Masculino</option>
                <option value="2">Femenino</option>
                <option value="3">Otro</option>
              </select>
            </div>

            {/* Rol */}
            <div className="flex flex-col">
              <label className="font-medium mb-1 text-gray-700">Rol</label>
              <select
                name="id_rol_usuario"
                value={formData.id_rol_usuario}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg bg-white focus:ring-2 focus:ring-[#4d3277] outline-none"
              >
                <option value="">Seleccione</option>
                <option value="1">Administrador</option>
                <option value="2">Empleado</option>
              </select>
            </div>

            {/* Fecha nacimiento */}
            <div className="flex flex-col">
              <label className="font-medium mb-1 text-gray-700">
                Fecha de nacimiento
              </label>
              <input
                type="date"
                name="fch_nac_empleado"
                value={formData.fch_nac_empleado}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-[#4d3277] outline-none"
              />
            </div>

            {/* Documento */}
            <div className="flex flex-col">
              <label className="font-medium mb-1 text-gray-700">Documento</label>
              <input
                type="text"
                name="doc_empleado"
                value={formData.doc_empleado}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-[#4d3277] outline-none"
                placeholder="12345678"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="font-medium mb-1 text-gray-700">
                Correo electrónico
              </label>
              <input
                type="email"
                name="ema_empleado"
                value={formData.ema_empleado}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-[#4d3277] outline-none"
                placeholder="correo@empresa.com"
              />
            </div>

            {/* Teléfono */}
            <div className="flex flex-col">
              <label className="font-medium mb-1 text-gray-700">Teléfono</label>
              <input
                type="text"
                name="tel_empleado"
                value={formData.tel_empleado}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-[#4d3277] outline-none"
                placeholder="987654321"
              />
            </div>

            {/* Imagen */}
            <div className="flex flex-col md:col-span-2">
              <label className="font-medium mb-1 text-gray-700">
                Imagen del empleado
              </label>
              <input
                type="file"
                name="img_empleado"
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg"
              />
            </div>

          </div>

          {/* Botones */}
          <div className="flex justify-end gap-4 p-6">
            <button
              type="reset"
              className="px-6 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-xl bg-[#4d3277] text-white hover:bg-[#3c265e] transition"
            >
              Guardar Empleado
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Empleados;
