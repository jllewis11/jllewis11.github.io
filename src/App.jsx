//import About from './components/About'
import React, { useEffect } from 'react'
import Experience from './components/Experience'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'
import SocialLinks from './components/SocialLinks'
import Work from './components/Work'

function App() {
  useEffect(() => {
    document.title = "Jerry's Portfolio"
  }, [])
  return (
    <div classname="bg-black">
      <NavBar />
      <Home />
      <Work />
      <Experience />
      <Portfolio />
      <SocialLinks />
    </div>
  )
}

export default App
