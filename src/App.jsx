
import './App.css'
import LandingOne from './Components/Landing1';
import NavBar from './Components/NavBar'

function App() {


  return (
    <div className="App">
      <NavBar />

      <div style={{marginTop: "64px"}}>
        <LandingOne />

        <LandingOne />
      </div>
    </div>
  )
}

export default App
