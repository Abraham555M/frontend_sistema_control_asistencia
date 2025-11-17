import React from "react";

const UseEffectApoyo = () => {
  const[usuario, setUsuario] = useState("Viktor"); 
    const[fecha, setFecha] = useState("01-10-2022"); 
    const[contador, setContador] = useState(0);
  
    const modificarUsuario = (e) => {
      setUsuario(e.target.value);
    }
  
    const cambiarFecha = () => {
      setFecha(new Date().toLocaleDateString())
    }
  
    useEffect(() => {
      console.log("Ejecuta al iniciar el componente")
    }, []); // Solo una vez
  
    useEffect(() => {
      setContador((prev) => prev + 1);
      console.log(`Has modificado el usuario: ${contador}`)
  
    }, [usuario]); 
  
    return (
      <div className='text-center'>
        <h1>Use Effect</h1>
  
        <strong className={contador < 10 ? 'bg-amber-200' : 'bg-green-400'}>
          {usuario}
        </strong>
  
        <br />
        <strong>{fecha}</strong>
        <br />
        <input className='border' onChange={modificarUsuario} placeholder='Ingresa su nombre' type="text" name="" id="" />    
        <button onClick={cambiarFecha}> Cambiar Fecha </button>
      </div>
    )
  }

export default UseEffectApoyo;
