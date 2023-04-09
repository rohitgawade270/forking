import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    } 
    const handleLoClick = (event) =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = (event) => {
        let newText = '';
        setText(newText);
    }     
    const [text, setText] = useState("");
    // setText("new text");
  return (
    <>
    <div className='container' >
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <label for="myBox" class="form-label">Example text area</label> */}
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>    
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container">
        <h2 className='my-3'>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{ 0.008 * text.split(" ").length} Minutes read</p>   
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
</>  
    
 
    
  )
}
