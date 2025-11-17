import React from "react";

const TablaTipoPermiso = ({ tipoPermisos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {tipoPermisos.map((tipoPermiso) => (
          <tr key={tipoPermiso.id_tipo_permiso}>
            <td>{tipoPermiso.id_tipo_permiso}</td>
            <td>{tipoPermiso.nom_tipo_permiso}</td>
            <td>{tipoPermiso.est_tipo_permiso}</td>
            <td>
              <button>Cambiar estado</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaTipoPermiso;
