import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  )
}

export default App
