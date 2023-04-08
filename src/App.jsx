import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import ResumeInformation from './components/ResumeInformation'
import { Routes, Route } from 'react-router-dom'
import Resume from './components/Resume'

function App() {
 

  return (
    <div className="App">
      <NavBar title="Resume Builder"/>
      <Routes>
        <Route path='/' element={<ResumeInformation />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
      </Routes>
    </div>
  )
}

export default App
