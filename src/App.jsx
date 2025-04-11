import { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from "react-router-dom"
import {Blue} from 'react-router-dom'
import {Red} from 'react-router-dom'
import {Home} from "react-router-dom"

function App() {


  return (
   
     <div id="container">
      
      <div id="navbar">
        <Link to='/blue'>Blue</Link>
        <Link to='/red'>Red</Link>
        <Link to='/'></Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue"
          element={Blue}
          />
          <Route path="/red"
          element={Red}
          />
            <Route path="/"/>
          
        </Routes>
      </div>
    </div>
   
  )
}

export default App
