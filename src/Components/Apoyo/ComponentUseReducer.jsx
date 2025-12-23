import { useEffect, useReducer } from 'react';
import {JuegoReducer} from './JuegoReducer'

const init = () => {
    return JSON.parse(localStorage.getItem("juegos")) || []; 
}

const ComponentUseReducer = () => {
    const [juegos, dispatch] = useReducer(JuegoReducer, [], init);

    useEffect(()=>{
        localStorage.setItem("juegos", JSON.stringify(juegos))
    }, [juegos])

    const conseguirDatosForm = (e) => {
        e.preventDefault();

        let juego = {
            id: new Date().getTime(),
            titulo: e.target.nombre.value,
            descripcion: e.target.descripcion.value
        }
        
        console.log(juego)
    }
    
  return (    
    <>
     <h1>Estos son mis videojuegos </h1>
     <p>Numero de videojuegos 13</p>

     <ul>
        <li>GTA</li>
        <li>Valorant</li>
        <li>Minecraft</li>
     </ul>

     <h3>Agregar juegos</h3>

     <form
        onSubmit={conseguirDatosForm}
        className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg space-y-4 border"
        >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Crear contenido
        </h2>

        <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
            Título
            </label>
            <input
            type="text"
            name="titulo"
            placeholder="Ingresa el título"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
            Descripción
            </label>
            <textarea
            name="descripcion"
            rows="4"
            placeholder="Escribe una descripción..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
        </div>

        <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
            Guardar
        </button>
        </form>

    </>
  );
};

export default ComponentUseReducer;
