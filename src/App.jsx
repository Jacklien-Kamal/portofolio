import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-gray-900 bg-opacity-98 text-white '>
      <Header/>
      <Hero/>
      <Projects/>
      <Technologies/>
      </div>
    </>
  )
}

export default App
