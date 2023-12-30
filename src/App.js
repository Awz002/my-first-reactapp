
import { useState } from 'react';
import React from 'react';
import './App.css';
// import Accordian from './components/Accordian';
import Form from './components/Form';
import Navbar from './components/Navbar';
import LinkedAccordina from './components/LinkedAccordina';
import Alert from './components/Alert';
import About from './About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
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

  const removeClasses =()=>{
   document.body.classList.remove('bg-primary');
   document.body.classList.remove('bg-success');
   document.body.classList.remove('bg-warning');
   document.body.classList.remove("bg-danger");
  }
  
  
  const toggleMood2=(cls)=>{
    removeClasses();
    console.log(cls);
    document.body.classList.add("bg-"+cls)
    setMood(cls);
  }
  
  const toggleMood=()=>{
    removeClasses();
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
    //  <Router>
      <>
      
        <Navbar mood={mood} toggleMood={toggleMood} toggleMood2={toggleMood2} textCol={textCol} />
        <Alert alert={alert} />
        {/* <Switch>/ */}
          {/* <Route path="/accordian"> */}
        {/* { <Accordian mood={mood} /> } */}
          {/* </Route> */}
        {/* </Switch> */}
        {/* <Switch>  */}
           {/* <Route exact path="/">  */}
               <Form newAlert={newAlert} />
         {/* </Route>  */}
         {/* </Switch> */}
        {/* <Switch>  */}
         {/* <Route exact path="/about" > */}
          <About accBg={accBg} textCol={textCol} />
          {/* </Route>  */}
       {/* </Switch>  */}
       {/* <Switch> */}
        {/* <Route path="/Linkedaccordina"> */}
        <LinkedAccordina accBg={accBg} textCol={textCol} />
        {/* </Route> */}
       {/* </Switch> */}
     </>
    //  </Router> 
  );
}

export default App;
