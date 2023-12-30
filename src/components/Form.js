import React,{useState} from 'react'

export default function Form(props) {

 
    const handleUpCase=()=>{
        let newText=text.toUpperCase();
        showtext(newText);
        props.newAlert("success",`"Your text has been converted to upperCase"`);
    }
    const handelChange=(e)=>{
        showtext(e.target.value)
        
    }
    const handleLoCase=()=>{
        let newText=text.toLowerCase();
        showtext(newText);
        props.newAlert("success",`"Your text has been converted to LowerCase"`);
    }
    const resetCase=()=>{
        let newText="";
        showtext(newText);
        props.newAlert("success",`"Your text has been reset"`);
    }
    const [text,showtext]=useState("");
   
  return (
    <>
    <div className='container' >
    <h1 className={`text-center  display-1 text-${props.textCol}`}  >Text Converter</h1>
    <div className="mb-3">
    <textarea className="form-control" onChange={handelChange} value={text} id="myForm" rows="5"></textarea>
    <button className='btn btn-outline-info m-2' onClick={handleUpCase} >Convert to UpperCase</button>
    <button className='btn btn-outline-info m-2' onClick={handleLoCase} >Convert to LowerCase</button>
    <button className='btn btn-outline-info m-2' onClick={resetCase} >Reset</button>
    </div>
    </div>
    <div className="container">
        <div className="row">
            <h3>Summary</h3>
            <p>your pargraph has total {text.length} characters including Spaces  </p>
            <p>it has {text.split(' ').length} words</p>
            <p>it can take {.008*text.length} minutes to read for a normal perosn</p>
        </div>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
