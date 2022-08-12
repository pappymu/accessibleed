
import './App.css'
import LandingOne from './Components/Landing1';
import LandingTwo from './Components/Landing2';
import NavBar from './Components/NavBar'

function App() {


  return (
    <div className="App">
      <NavBar />

      <div style={{marginTop: "64px"}}>
        <LandingTwo />
        <LandingTwo />

      </div>
    </div>
  )
}

export default App
