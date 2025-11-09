import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Team from './components/Team'

function App() {
  return (
    <div className='min-h-screen'>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Team/>
    </div>
  )
}

export default App
