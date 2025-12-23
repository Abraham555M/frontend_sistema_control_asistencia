import { useEffect, useState } from "react";
import UseRef from "./UseRef";

const FetchServices = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, []); // 👈 se ejecuta solo una vez

  if (loading) return <p>Cargando...</p>;

  return (
    <>
     <ul>
      {usuarios.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>

    <UseRef></UseRef>
    </>
   
  );
}

export default FetchServices
