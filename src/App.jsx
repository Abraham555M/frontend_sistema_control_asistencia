import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InicioSesion from './Pages/Autenticacion/InicioSesion'
import RecuperarPassword from './Pages/Autenticacion/RecuperarPassword'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecuperarPassword></RecuperarPassword>
    </>
  )
}

export default App
