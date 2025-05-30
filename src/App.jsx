import {React, useEffect} from 'react';
import Hero from './components/Hero'
import About from './components/About'
import AOS from 'aos'
import 'aos/dist/aos.css'
function App() {

  useEffect(() => {
    AOS.init({
      duration:1000,
    })
  }, [])

  return (
    <main className = 'bg-slate-950'>
      <Hero />
      <About />
    </main>
  )
}

export default App
