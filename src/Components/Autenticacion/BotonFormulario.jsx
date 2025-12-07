import React from 'react'

const BotonFormulario = ({valor, operacion}) => {
  return (
   <button 
        type='submit'
        onClick={(e) => operacion(e)}
        className="w-full py-2 text-lg font-semibold text-white 
            bg-gradient-to-r from-purple-600 to-indigo-600 
            rounded-full 
            shadow-lg shadow-purple-900/50 
            hover:from-purple-700 hover:to-indigo-700 
            transition duration-300"
    >
        {valor}
    </button>
  )
}

export default BotonFormulario
