import React from 'react'

const BotonFormulario = ({valor}) => {
  return (
   <button 
        type='submit'
        className="w-full py-2 text-lg font-semibold text-white 
            bg-gradient-to-r from-purple-600 to-indigo-600 
            rounded-full 
            shadow-lg shadow-purple-900/50 
            hover:from-purple-700 hover:to-indigo-700 
            duration-300 hover:scale-110 transition-transform"
    >
        {valor}
    </button>
  )
}

export default BotonFormulario
