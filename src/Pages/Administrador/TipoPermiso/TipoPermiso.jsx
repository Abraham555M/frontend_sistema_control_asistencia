import React, { useEffect, useState } from "react";
import { listarTipoPermiso } from "../../../Services/Administrador/TipoPermiso";
import TablaTipoPermiso from "../../../Components/Pages/Administrador/TablaTipoPermiso";

const TipoPermiso = () => {
  const [tipoPermisos, setTipoPermisos] = useState([]);

  useEffect(() => {
    listarTipoPermiso()
      .then((res) => setTipoPermisos(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Tipos de Permisos</h2>

      <TablaTipoPermiso tipoPermisos={tipoPermisos}></TablaTipoPermiso>
    </div>
  );
};

export default TipoPermiso;
