import { useState } from 'react'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import Banner from './componentes/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar></NavBar>
        <Banner></Banner>
        </div>
    </>
  )
}

export default App
