import React from 'react'
import Home from './pages/Home'
import { Toaster } from 'sonner'
import './App.css'

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <Home />
    </>
  )
}

export default App

