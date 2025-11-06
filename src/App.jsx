import { useState } from 'react'
import ConfigurationRoutes from './Route/ConfigurationRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ConfigurationRoutes></ConfigurationRoutes>
    </>
  )
}

export default App
