import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffect = () => {
  const caja = useRef(null);
  const [texto, setTexto] = useState("");
  const [estado, setEstado] = useState(true);
  const [mostrar, setMostrar] = useState(true);

  useLayoutEffect(() => {
    console.log("UseLayoutEffect");
    console.log(caja.current.getBoundingClientRect());
    setTexto("Hola 2");
  }, []);

  useEffect(() => {
    console.log("UseEffect");
  }, []);

  const handleToggle = () => {
    setMostrar((prev) => !prev);
  };

 
  return (
    <div>
      <div ref={caja} className="bg-amber-400 size-20 text-center">
        {mostrar ? "Se presionó el botón" : <p>No hay contenido</p>}
      </div>
      <button
        onClick={handleToggle}
        className="bg-blue-500 text-white p-3 rounded-2xl hover:scale-105 duration-300 transition-transform"
      >
        {mostrar ? "Ocultar mensaje" : "Mostrar mensaje"}
      </button>{" "}
    </div>
  );
};

export default UseLayoutEffect;
