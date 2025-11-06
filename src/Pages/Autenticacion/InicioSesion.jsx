import React, { useEffect } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from '@mui/icons-material/Person'; // Usaremos un icono de persona más grande y central.
import InputFormulario from '../../Components/Autenticacion/InputFormulario';

const InicioSesion = () => {

    const handleRecuperarPassword = (nombre) => {
        alert("xdd" + nombre)
    
        
    }

    useEffect

    return (
        <section className="h-screen flex justify-center items-center 
            bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900"> 
            
            {/* 2. Tarjeta con Efecto Glassmorphism */}
            <div className="
                bg-white/0                      /* Fondo blanco con 10% de opacidad */
                backdrop-blur-xl                 /* La clave: Desenfoca lo que está detrás del div */
                rounded-3xl                      /* Bordes más redondeados */
                shadow-2xl                       /* Sombra grande y profunda */
                shadow-black/40                  /* Sombra más oscura para contraste */
                p-8 w-[350px] flex flex-col items-center 
                border border-white/10         
            ">
                {/* 3. Icono de Usuario Central */}
                <div className='mb-6'>
                    {/* El icono grande y con color de la imagen original es más fácil de lograr con un div con gradiente que con un simple Mui Icon */}
                    <div className='w-24 h-24 rounded-full bg-white/20 flex justify-center items-center shadow-inner'>
                        {/* Puedes reemplazar esto con una imagen de perfil si quieres */}
                        <PersonIcon className="!text-white opacity-70" sx={{ fontSize: 70 }} />
                    </div>
                </div>
                
                {/* Formulario */}
                <form action="" className='space-y-6 w-full text-white'>
                    
                   {/* Campo Email */}
                    <InputFormulario 
                        Icon={EmailIcon} 
                        type="email" 
                        placeholder="Email ID" 
                    />

                    {/* Campo Contraseña */}
                    <InputFormulario 
                        Icon={LockIcon} 
                        type="password" 
                        placeholder="Password" 
                    />                                    
                    
                    {/* Opciones de "Recordarme" y "Olvidé Contraseña" */}
                    <div className='flex justify-end items-center text-sm mt-2'>                        
                        {/* Olvidé contraseña */}
                        <a onClick={ e => handleRecuperarPassword("Viktor")} className="text-white/70 hover:text-white transition cursor-pointer">
                            Forgot Password?
                        </a> 
                    </div>
                    
                    {/* Botón de Login */}
                    <div className='pt-4'>
                        <button 
                            type='submit'
                            // Fondo con gradiente, esquinas redondeadas completas, sombra en el botón
                            className="w-full py-3 text-lg font-semibold text-white 
                                bg-gradient-to-r from-purple-600 to-indigo-600 
                                rounded-full 
                                shadow-lg shadow-purple-900/50 
                                hover:from-purple-700 hover:to-indigo-700 
                                transition duration-300"
                        >
                            LOGIN
                        </button>
                    </div>
                </form>
            </div>
            
        </section>
    )
}

export default InicioSesion
