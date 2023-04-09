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
    const [text, setText] = useState("Enter Text Here ");
    // setText("new text");
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <label for="myBox" class="form-label">Example text area</label> */}
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  
    
 
    
  )
}
