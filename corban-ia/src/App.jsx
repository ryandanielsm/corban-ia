import { useState } from 'react'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import Banner from './componentes/Banner/Banner'
import Footer from './componentes/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar></NavBar>
        <Banner></Banner>
        <Footer></Footer>
        </div>
    </>
  )
}

export default App
