import { use, useEffect, useState } from 'react'
import {listarGeneros} from '../../../Services/Administrador/Genero'
const Genero = () => { 

  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    listarGeneros()
      .then((res) => setGeneros(res.data.data))
      .catch((err) => console.log(err));
  }, []); 

  return (
    <div className='text-center'>
      <h1>Lista de Generos</h1>

      {
        generos.map((genero) => (
          <li key={genero.id_genero}>{genero.nom_genero}</li>
        ))
      }
     
    </div>
  )
}

export default Genero
