

import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import React, { useState } from 'react';
// import React from "react";

function App() {
  const [mode , setMode]= useState('light'); // Wheather dark mode is enable or not
  const [alert , setAlert] = useState(null);
  const showAlert = (message , type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(( ) => {
      setAlert(null);
    }, 1500)
  }
 
 
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042742';
      showAlert("Dark mode has been enabled", "success");
     
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
     
    }
     
  }
  return (
 
    <>
    
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container my- 3">
    
    <Textform showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra Spaces" mode={mode} />
    <About mode={mode} />
    </div>
  </>
 
);
}
export default App;