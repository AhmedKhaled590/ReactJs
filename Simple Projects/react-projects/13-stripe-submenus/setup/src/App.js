import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import hero from './images/hero.svg'

function App() {
  return (
    <>
      <Navbar />
      <Submenu />
      <Hero />
      <Sidebar />
    </>
  )
}

export default App
