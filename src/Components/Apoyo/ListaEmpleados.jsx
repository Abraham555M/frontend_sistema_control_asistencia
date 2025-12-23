import React, { useEffect, useState } from 'react'

const ListaEmpleados = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => {
            setUsuarios(data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }, []);

  return (
    <div>
        <ul>
           {usuarios.length > 0 ? (
                usuarios.map((usuario) => (
                    <li key={usuario.id}>{usuario.name}</li>
                ))
                ) : (
                <p>Sin empleados</p>
            )}
        </ul>
    </div>
  )
}

export default ListaEmpleados
