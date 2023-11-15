import { Component, useState } from 'react'
import Navbar from './components/navbar'
import Home from './components/Home'



import './App.css'
import Social from './components/Social'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <Social/>
      <About/>
    </>
  )
}

export default App
