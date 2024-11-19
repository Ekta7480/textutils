
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import About from './components/About';
import Textform from './components/Textform';
import React, { useState } from 'react';
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



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
    {/* { <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container my- 3">
    {/* <Switch>
            <Route path="/about">
              <About />
            </Route>
          <Route path="/"> */}
            <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
            {/* </Route>
          </Switch>
    */}
        
          
    </div>
    {/* </Router> } */}


    
  </>
 
);
}

export default App;

