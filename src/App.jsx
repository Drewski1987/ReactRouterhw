import './index.css'
import './App.css'
import Blue from './Components/Blue.jsx'
import Red from './Components/Red.jsx'
import Home from './Components/Home.jsx'
import {Routes, Route, Link} from "react-router-dom"

function App() {


  return (
   <>
     <div id="container">
      
      <div id="navbar">
        <Link to="/Home">Home</Link>
        <Link to="/Blue">Blue</Link>
        <Link to="/Red">Red</Link>
        
      </div>

      <div id="main-section">

        <Routes>

          <Route path="/Blue"
          element={<Blue />}
          />
          <Route path="/Red"
          element={<Red />}
          />
            <Route path="/Home"
            element={<Home />}
            />
            
          
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
