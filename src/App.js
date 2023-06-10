// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//-------------------import from react router dom web---------------------------


//------------------------------------------------------------------------------

function App() {
  const [mode, setMode] = useState('light');
  const [endis, setEndis] = useState('Enable');
  const [alert, setAlert] = useState(null);
  
  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type
    })
  }
  
  function toggleMode() {
    if (mode === 'light') {
      setMode('dark')
      setEndis('Enabled : ')
      document.body.style.backgroundColor = '#0B2447'
      document.body.style.color = 'white'
      showAlert(" Dark mode has been enabled", "success")
      // document.title = "Wordy-Dark Mode"
    }
    else {
      setMode('light')
      setEndis('Disabled : ')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#0B2447'
      showAlert(" Dark mode has been disabled", "success")
      // document.title = "Wordy-Light Mode"
    }
  }
  
  function toggleBlue() {
    if (mode === 'light') {
      setMode('primary')
      
      document.body.style.backgroundColor = 'skyblue'
      document.body.style.color = '#0B2447'
      showAlert(" Blue mode has been enabled", "success")
    }
    else {
      setMode('light')
      setEndis('Disabled : ')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#0B2447'
      showAlert(" Blue mode has been disabled", "success")
    }
  }
  
  function toggleGrey() {
    if (mode === 'light') {
      setMode('secondary')
      
      document.body.style.backgroundColor = 'grey'
      document.body.style.color = '#0B2447'
      showAlert(" Grey mode has been enabled", "success")
    }
    else {
      setMode('light')
      setEndis('Disabled : ')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#0B2447'
      showAlert(" Grey mode has been disabled", "success")
    }
  }
  
  function toggleGreen() {
    if (mode === 'light') {
      setMode('success')
      
      document.body.style.backgroundColor = 'green'
      document.body.style.color = 'white'
      showAlert(" Green mode has been enabled", "success")
    }
    else {
      setMode('light')
      setEndis('Disabled : ')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#0B2447'
      showAlert(" Green mode has been disabled", "success")
    }
  }
  
  function toggleRed() {
    if (mode === 'light') {
      setMode('danger')
      
      document.body.style.backgroundColor = 'tomato'
      document.body.style.color = 'white'
      showAlert(" Red mode has been enabled", "success")
    }
    else {
      setMode('light')
      setEndis('Disabled : ')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#0B2447'
      showAlert(" Red mode has been disabled", "success")
    }
  }

  function toggleYellow() {
    if (mode === 'light') {
      setMode('warning')
      
      document.body.style.backgroundColor = 'yellow'
      document.body.style.color = '#0B2447'
      showAlert(" Yellow mode has been enabled", "success")
    }
    else {
      setMode('light')
      setEndis('Disabled : ')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#0B2447'
      showAlert(" Red mode has been disabled", "success")
    }
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} toggleBlue={toggleBlue}
          toggleGrey={toggleGrey} toggleGreen={toggleGreen} toggleRed={toggleRed}
          toggleYellow={toggleYellow}
          togglendis={endis}></Navbar>
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About  mode = {mode}/>} />
            <Route exact path="/" element={<TextForm heading="The Text You give and the text you recieve :" showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

