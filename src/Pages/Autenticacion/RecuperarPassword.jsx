import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import InputFormulario from '../../Components/Autenticacion/InputFormulario';
import EmailIcon from '@mui/icons-material/Email';
import BotonFormulario from '../../Components/Autenticacion/BotonFormulario';
import { useNavigate } from 'react-router-dom';
import LoaderScreen from '../../Components/Layouts/LoaderScreen';

const RecuperarPassword = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false); 

    const handleEnviarCorreo = async (e) => {
        e.preventDefault(); 

        setLoading(true);

        // Simulación del envío de correo (usa tu fetch real aquí)
        await new Promise(resolve => setTimeout(resolve, 2000));

        setLoading(false);

        navigate("/cambiar-password");
    }

    return (
        <>
            { loading && ( <LoaderScreen></LoaderScreen> ) }

            <section className="h-screen flex justify-center items-center 
                bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900"> 
                
                {/* Tarjeta con Efecto Glassmorphism */}
                <div className="bg-white/0 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/40 p-8 w-[350px] flex flex-col items-center border border-white/10">               
                    <div className='mb-6 '>
                        <div className='w-24 h-24 rounded-full bg-white/20 flex justify-center items-center shadow-inner'>
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
                            <BotonFormulario valor={"ENVIAR CORREO"} operacion={handleEnviarCorreo}></BotonFormulario>
                        </div>
                    </form>            
                </div>
            </section>
        </>
  )
}

export default RecuperarPassword
