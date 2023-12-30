import React from 'react'

function Alert(props) {
    const capitalizer=(e)=>{
        let text=e.toLowerCase();
        return  text.charAt(0).toUpperCase()+text.slice(1);
    }
  return (
    props.alert &&<div style={{height:"70px" ,width:"100%"}}  >
      <div  >
        <div className={`alert alert-${props.alert.type} alert-dismissible text-center fade show`} role="alert">
            <strong>{capitalizer(props.alert.type)}</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.alert.msg}
         </div>
    </div>
    </div>
  )
}

export default Alert
