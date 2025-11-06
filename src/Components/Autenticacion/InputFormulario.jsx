import React from 'react'

const InputFormulario = ({ Icon, type = "text", placeholder }) => {
 return (
    <div className="flex items-center border-b border-white/60 focus-within:border-white transition">
      <Icon className="text-white/70 mr-3" fontSize="small" />
      <input
        type={type}
        placeholder={placeholder}
        className="w-full py-2 outline-none bg-transparent placeholder-white/50 text-white"
      />
    </div>
  );
}

export default InputFormulario
