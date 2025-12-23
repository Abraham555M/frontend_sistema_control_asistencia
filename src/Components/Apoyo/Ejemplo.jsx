import { useState, useMemo } from "react";

const Ejemplo = () => {
  const [contador, setContador] = useState(0);
  const [numero, setNumero] = useState(5);

  const resultado = useMemo(() => {
    console.log("Calculando...");
    return numero * 10;
  }, [numero]);

  return (
    <>
      <h1>Resultado: {resultado}</h1>
      <button className="border" onClick={() => setNumero(numero + 1)}>Cambiar número</button>
      <button  className="border"  onClick={() => setContador(contador + 1)}>
        Contador: {contador}
      </button>
    </>
  );
};

export default Ejemplo; 