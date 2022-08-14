
import './App.css'
import LandingTwo from './Components/Landing2';
import Register from './Components/RegisterTutee';
import RegisterTutor from './Components/RegisterTutor';
import NavBar from './Components/NavBar'
import { useState, Fragment } from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Fragment>
            <NavBar />
            <div style={{ marginTop: "64px" }}>
              <LandingTwo />
            </div>
          </Fragment>} />
        <Route path="register/tutee" element={<Register />} />
        <Route path="register/tutor" element={<RegisterTutor />} />
      </Routes>

    </div>
  )
}

export default App
