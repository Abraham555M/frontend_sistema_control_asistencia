import React, { useState } from 'react'

const RecuperarPassword = () => {

    const [valor, setValor] = useState(true)

    return (
     <section className="h-screen flex justify-center items-center 
            bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900"> 
      
        {
            (!valor) ? (
                <p>ss</p>
            ) : (
                <p>ssfff</p>
            )
        }

    </section>
  )
}

export default RecuperarPassword
