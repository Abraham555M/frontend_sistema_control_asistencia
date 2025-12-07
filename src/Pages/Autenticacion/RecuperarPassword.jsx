import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import InputFormulario from '../../Components/Autenticacion/InputFormulario';
import EmailIcon from '@mui/icons-material/Email';
import BotonFormulario from '../../Components/Autenticacion/BotonFormulario';
import { useNavigate } from 'react-router-dom';

const RecuperarPassword = () => {
    const navigate = useNavigate();

    const handleEnviarCorreo = (e) => {
        e.preventDefault(); 
        navigate("/recuperar");
    }

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
                <div className='mb-6 '>
                    {/* El icono grande y con color de la imagen original es más fácil de lograr con un div con gradiente que con un simple Mui Icon */}
                    <div className='w-24 h-24 rounded-full bg-white/20 flex justify-center items-center shadow-inner'>
                        {/* Puedes reemplazar esto con una imagen de perfil si quieres */}
                        <PersonIcon className="!text-white opacity-70" sx={{ fontSize: 70 }} />
                    </div>
                </div>
                <div className="pb-8 text-center">
                    <h2 className="text-white text-xl font-semibold tracking-wide mb-2">
                        Recuperar Contraseña
                    </h2>

                    <p className="text-white/80 text-sm leading-relaxed px-2">
                        Ingresa el correo asociado a tu cuenta y te enviaremos un enlace para 
                        restablecer tu contraseña de forma segura.
                    </p>
                </div>
                <form action="" className='space-y-6 w-full text-white'>
                    <div>
                        {/* Campo Email */}
                        <InputFormulario
                            Icon={EmailIcon} 
                            type="email" 
                            placeholder="Email" 
                        />
                   </div>
                    <div className='pt-3'>
                        <BotonFormulario valor={"ENVIAR CORREO"}></BotonFormulario>
                    </div>

                </form>            
            </div>
        </section>
  )
}

export default RecuperarPassword
