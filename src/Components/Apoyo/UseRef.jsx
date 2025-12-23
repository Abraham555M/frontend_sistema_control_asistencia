import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const nombreValue = useRef(""); // Referencias
    const apellidoValue = useRef("");
    const correoValue = useRef("");
    const miCaja = useRef("");
    const [estado, setEstado] = useState(false); 
    // *************
    const [numeroSaludo, setNumeroSaludo] = useState(0);
    const saludoEnCola = useRef(numeroSaludo); 

    const handleMostrar = (e) => {
        e.preventDefault(); 

        // Se obtiene el nombre en especifico. 
        console.log(nombreValue.current.value) 
        console.log(apellidoValue.current.value) 
        console.log(correoValue.current.value) 

        // Operacion en "miCaja"
        console.log(miCaja);
        setEstado(true);         
    }

    useEffect(() => {
        saludoEnCola.current = numeroSaludo; 
        setTimeout(() => {
            console.log("Mensaje en cola", saludoEnCola.current)
        }, 2000)
    }, [numeroSaludo])

    const handleEnviarSaludo = () => {
        setNumeroSaludo(numeroSaludo + 1); 
    }

  return (
    <div>
        <h1>Formulario</h1>

        <div ref={miCaja} className={`border p-5 border-gray-400 rounded-2xl text-center font-bold ${estado ? "bg-green-300" : ""}`}>
            <h2>Pruebas con useRef</h2>
        </div>

        <form action="" onSubmit={handleMostrar} className=''>
            <input type="text" name="" id="" placeholder='Nombres' ref={apellidoValue} />
            <input type="text" name="" id="" placeholder='Apellidos' ref={nombreValue} />
            <input type="email" name="" id="" placeholder='Correo' ref={correoValue} />
            <input type="submit" name="" id="" value='Enviar' />
        </form>   
        <hr />
        <div>
            <h1>Ejemplo con useRef</h1> 

            <h2>Saludos enviados {numeroSaludo}</h2>   
            <button onClick={handleEnviarSaludo} className='p-2 bg-green-200 rounded-2xl '>Enviar saludo</button>
        </div>   
    </div>
  )
}

export default UseRef
