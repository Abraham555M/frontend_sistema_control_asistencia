import React, { useEffect, useRef, useState } from "react";
import UseRef from "./UseRef";
import ListaEmpleados from "./ListaEmpleados";
import Ejemplo from "./Ejemplo";

const UseMemoComponent = () => {
  const [gestor, setGestor] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const gestorValue = useRef(); 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsuarios(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("Se renderiza el nombre del gestor")
  }, [gestorValue])

  const asignarGestor = (e) => {
    setGestor(gestorValue.current.value); 
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Nombre del gestor: {gestor}
      </h1>
      <input type="text" ref={gestorValue} onChange={asignarGestor} placeholder="Introduce el nombre de tu gestor" />

      <h2>Listado de empleados</h2>
      <p>Los empleados vienen de jsonplaceholder</p>

      <ListaEmpleados></ListaEmpleados>

      <Ejemplo></Ejemplo>
    </div>
  );
};

export default UseMemoComponent;
