import { useState } from 'react'
// import './App.css'
import NavigationBar from './components/Navigation/NavigationBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Project from './components/Projects/Project'


function App() {
  return (
    <>
    <div className='border border-info'>

    </div>
      <NavigationBar />
      <Home />
      <About />
      <Skills />
      <Project />
    </>
  )
}

export default App
