import React, { useState } from 'react';

 


export default function Textbar(props) {
   
const [text, setText]=useState("");

  const handeOnChange=(event)=>{ // event object we will get when we function run
        console.log("You can write now")
        setText(event.target.value)
    }

    const handleUpClick =()=>{
        console.log("uppercase clicked" + text);
        let newtext= text.toUpperCase();
        setText(newtext);
    }
    
    
    const handleDnClick=()=>{
        console.log("convert to lowercase"+text)
        let newtext=text.toLowerCase(); //allowed  beacause newtext variable is differnt scope
        setText(newtext)
    }

     const handleClearClick=()=>{
        console.log("")
        let newtext="";
        setText(newtext)
    }
   
     const handleCopy=()=>{
        console.log("i m copy");
      
        navigator.clipboard.writeText(text);
    }
    const HandleExSpace=()=>{
        console.log("remove extra space")
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(' '))

    }

    
    // text="madhuri";
    // setText("madhurisahu")
    return(
        <>
        <div className='container' >
            
            <div className ="mb-3" style={{color:props.mode==="dark"?'white':'black'}}>
                <h1>{props.heading}</h1>
                {/* <label for="mybox" className="form-label">Example text Area</label> */}
                <textarea className="form-control"  value={text} onChange={handeOnChange} style={{backgroundColor: props.mode==="dark"?"grey":"white",color: props.mode==="dark"?"white":"black"}} id="mybox" rows="10" cols="100"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button> 
                {/* mx-2 create a horizontel space of both side of button  */}
                <button className="btn btn-primary mx-2" onClick={handleDnClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
             <button className="btn btn-primary mx-2" onClick={HandleExSpace}>Remove extra space</button>

        </div>
        <div className='container my-2' style={{color: props.mode==="dark"?'white':'black'}}>
            <h1>Your summary</h1>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"enter something"}</p>
        </div>
        </>
    )
}