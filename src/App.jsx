import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import MainSection from './Components/MainSection'
import FAQ from './Components/FAQ'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navigation />
      <MainSection />
      <FAQ />
    </>
  )
}

export default App
