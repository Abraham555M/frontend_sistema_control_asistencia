import React, { useState } from 'react'
import InputFormulario from '../../Components/Autenticacion/InputFormulario'
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import BotonFormulario from '../../Components/Autenticacion/BotonFormulario';
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import LockIcon from "@mui/icons-material/Lock";

const CambiarPassword = () => {
  const [mostrarPassword, setMostrarPassword] = useState(false); 
  const navigate = useNavigate(); 

  const handleCambiarPassword = () => {
    navigate("/")
  }

  return (
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
                    Se ha validado su cuenta correctamente 
                </h2>

                <p className="text-white/80 text-sm leading-relaxed px-2">
                    Ingresa el correo asociado a tu cuenta y te enviaremos un enlace para 
                    restablecer tu contraseña de forma segura.
                </p>
            </div>
            <form action="" className='space-y-6 w-full text-white'>
              <div className='relative'>
                  { /* Campo Contraseña */}
                  <InputFormulario 
                      Icon={LockIcon} 
                      type={mostrarPassword ? "text" : "password"} 
                      placeholder="Password" 
                  />
                  <FaEye onClick={() => setMostrarPassword(!mostrarPassword)} className='absolute top-3 right-3 text-xl opacity-60 cursor-pointer'/>                   
              </div>
              <div className='relative'>
                  { /* Campo Contraseña */}
                  <InputFormulario 
                      Icon={LockIcon} 
                      type={mostrarPassword ? "text" : "password"} 
                      placeholder="Confirm Password" 
                  />
                  <FaEye onClick={() => setMostrarPassword(!mostrarPassword)} className='absolute top-3 right-3 text-xl opacity-60 cursor-pointer'/>                   
              </div>
              <div className='pt-3'>
                  <BotonFormulario valor={"VALIDAR CONTRASEÑA"} operacion={handleCambiarPassword}></BotonFormulario>
              </div>
            </form>            
        </div>
    </section>
  )
}

export default CambiarPassword
