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
    const handleExtraSpaces=()=>{
        const newText = text.replace(/\s+/g,' ').trim();
        showtext(newText);
        props.newAlert("success","Extra Spaces has been removed");
    }
    const [text,showtext]=useState("");
   
  return (
    <>
    <div className='container' >
    <h1 className={`text-center  display-1 text-${props.textCol}`}  >Text Converter</h1>
    <div className="mb-3">
    <textarea className="form-control " onChange={handelChange} value={text} id="myForm" rows="5"></textarea>
    <button className='btn btn-outline-info  m-2' onClick={handleUpCase} ><i><strong>Convert to UpperCase</strong></i></button>
    <button className='btn btn-outline-info  m-2' onClick={handleLoCase} ><strong>Convert to LowerCase</strong></button>
    <button className='btn btn-outline-info m-2' onClick={resetCase}    ><strong>Reset</strong> </button>
    <button className='btn btn-outline-info m-2' onClick={handleExtraSpaces}    ><strong>Remove Extra spaces</strong> </button>
    </div>
    </div>
    <div className="container">
        <div className="row">
            <h3>Summary</h3>
            <p>your pargraph has total {text.split(/\s+/).filter(Boolean).length} characters including Spaces  </p>
            <p>it has {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</p>
            <p>it can take {.008*text.length} minutes to read for a normal perosn</p>
        </div>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
