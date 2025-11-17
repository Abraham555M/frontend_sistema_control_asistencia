import React from "react";

const TablaEmpleados = ({ empleados }) => {
  return (
    <table >
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Email</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {empleados.map((empleado) => (
          <tr key={empleado.id_empleado}>
            <td>{empleado.id_empleado}</td>
            <td>{empleado.nom_empleado + empleado.ape_empleado}</td>
            <td>{empleado.tel_empleado}</td>
            <td>{empleado.ema_empleado}</td>
            {empleado.est_empleado == 1 ? <td> Activo </td> : <td> Inactivo </td>}
            <td>
              <button>Cambiar estado</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaEmpleados;
