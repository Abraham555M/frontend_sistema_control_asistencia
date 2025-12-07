import React from "react";

const TablaEmpleados = ({ empleados }) => {
  return (
    <table>
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
        {empleados.length === 0 ? (
          <tr>
            <td colSpan="6" style={{ textAlign: "center", padding: "10px" }}>
              No hay registros de empleados
            </td>
          </tr>
        ) : (
          empleados.map((empleado) => (
            <tr key={empleado.id_empleado}>
              <td>{empleado.id_empleado}</td>
              <td>{empleado.nom_empleado + " " + empleado.ape_empleado}</td>
              <td>{empleado.tel_empleado}</td>
              <td>{empleado.ema_empleado}</td>
              <td>{empleado.est_empleado === 1 ? "Activo" : "Inactivo"}</td>
              <td>
                <button>Cambiar estado</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default TablaEmpleados;
