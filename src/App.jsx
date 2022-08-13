
import './App.css'
import LandingTwo from './Components/Landing2';
import Register from './Components/RegisterTutee'
import NavBar from './Components/NavBar'
import { useState, Fragment } from 'react'

function App() {

  const [page, setPage] = useState("Home")


  return (
    <div className="App">

      {page === "Home" && (
        <Fragment>
          <NavBar />
          <div style={{ marginTop: "64px" }}>
            <LandingTwo setPage={setPage}/>
            <LandingTwo />

          </div>
        </Fragment>
      )}
      {page === "Register" && (
        <Register setPage={setPage}/>
      )}

    </div>
  )
}

export default App
