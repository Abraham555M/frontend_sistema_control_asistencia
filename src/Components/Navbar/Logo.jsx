import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center mb-10">
        <img
            src="https://png.pngtree.com/template/20191213/ourmid/pngtree-colorful-flower-logos-vectors-illustrations-image_339757.jpg"
            alt="Logo"
            className="w-20 h-20 object-cover border-4 border-white shadow-md rounded-2xl hover:scale-110 transition-transform"
        />
        <h1 className="text-center font-bold text-md w-20 mx-auto">Company Street</h1>
    </div>
  )
}

export default Logo
