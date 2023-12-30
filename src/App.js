
import { useState } from 'react';
import './App.css';
// import Accordian from './components/Accordian';
import Form from './components/Form';
import Navbar from './components/Navbar';
import LinkedAccordina from './components/LinkedAccordina';
import Alert from './components/Alert';
// import About from './About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

 
  const [mood,setMood]=useState("light")
  const [textCol,setTextCol]=useState('dark')
  const [accBg,setAccBg]=useState("light");
  const [alert,setAlert]=useState(null);

  const newAlert=(type,message)=>{
    setAlert({
      type:type,
      msg:message,
    })
    setTimeout(setAlert, 1500);
  }



  const toggleMood=()=>{
    if(mood==='light'){
      setMood("dark");
      setTextCol("light");
      setAccBg("dark")
      document.body.style.backgroundColor="#000";
      document.body.style.color="#fff";
      newAlert("success","Dark Mood Turned On");
    }
    else{
      setMood("light");
      setTextCol("dark");
      setAccBg("light");
      document.body.style.backgroundColor="#fff";
      document.body.style.color="#000";
      newAlert("danger","Light Mood Turned On");
    }
  }

  return (
    // <Router>
      <>
      
        <Navbar mood={mood} toggleMood={toggleMood} textCol={textCol} />
        <Alert alert={alert} />
        {/* <Accordian mood={mood} /> */}
        <Form newAlert={newAlert} />
        <LinkedAccordina accBg={accBg} textCol={textCol} />
        {/* <Switch> */}
          {/* <Route exact path="/home"> */}
          {/* </Route> */}
        {/* </Switch> */}
        {/* <Switch> */}
          {/* <Route exact path="/about"><About/></Route> */}
        {/* </Switch> */}
     </>
    /* </Router> */
  );
}

export default App;
