import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Router from './router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Router/>
    </>
  )
}

export default App
