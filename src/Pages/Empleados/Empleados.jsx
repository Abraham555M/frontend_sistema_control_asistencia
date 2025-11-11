import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Empleados = () => {
  const {nombre, apellido} = useParams(); // Se obtiene el parametro de la url 
  const navegar = useNavigate();

  const enviar = (e) => {
    e.preventDefault(); // Enviar el formulario por defecto 
    let nombre = e.target.nombre.value;  
    let apellido = e.target.apellido.value;
    
    let url = `/empleados/${nombre}/${apellido}`

    if(nombre.length <= 0 && apellido.length <= 0){ // En caso no se llena nada se redirige a otro sitio
      navegar("/asistencia")
    }else{
      navegar(url);
    }

    
  }

  return (
    <div className='border h-100'>
      <h1>Bienvenido {nombre} {apellido}</h1>


    <form onSubmit={e => enviar(e)}>
        <input className='border' type="text" name="nombre" id="" />
        <input className='border' type="text" name="apellido" id="" />
        <input className='border' type="submit" />
      </form>    
    </div>
  )
}

export default Empleados
