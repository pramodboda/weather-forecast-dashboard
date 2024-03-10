import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrentTemp from './components/cards/CurrentTemp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h2>Weather Forecast Dashboard</h2>

<CurrentTemp/>
    </>
  )
}

export default App
