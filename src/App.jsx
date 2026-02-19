import './App.css';

import About from './assets/Components/About.jsx';
import Navbar from './assets/Components/Navbar.jsx';
import Textbar from './assets/Components/Textbar.jsx';
import React, { useState } from 'react' // imrs
import Alert from './assets/Components/Alert.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'//imbr

// let name='madhuri';
function App() {


  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("light mode enabled", 'success')
    }
    else {
      setMode("dark")
      document.body.style.backgroundColor = '#131337ff'
      showAlert("dark mode enabled", 'success')
    }
  }
  return (


    <Router>
      <Navbar title="Textiutil" about="aboutText2" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Textbar heading="Enter the text to analyze" mode={mode} />} />
      </Routes>
    </Router>



  );
}

export default App;

