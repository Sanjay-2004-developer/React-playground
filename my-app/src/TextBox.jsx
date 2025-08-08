

import React,{useState} from "react";
import './TextBox.css'
export default function TextBox(props){
  const [text,setText]=useState("enter a txt");

  const handleUpClick=()=>{
    console.log("HI i Clicked")
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handlelowClick=()=>{
    console.log("HI i Clicked")
    let newText=text.toLowerCase();
    setText(newText)
  }
  
  const handleOnchange=(event)=>{
    console.log("Changed");
    setText(event.target.value)
  }
  return(
  <>
  <h4>{props.title}</h4>
  <div className="form-floating">
  <textarea placeholder="Type here" className="form-control" id="my-box" rows="10" value={text} onChange={handleOnchange}></textarea>
</div>
<div>
  <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Upper case</button>
  <button className="btn btn-primary m-2" onClick={handlelowClick}>Convert to Lower case</button>
</div>

<div className="TextBox">
<p> {text.length}    Length  {text.split(" ").length}   Words</p>
  <p>{0.008 *(text.split(" ").length)}  Minnutes to read</p>
</div>

<div>
  <h4>Preview</h4>
  <p>{text}</p>
</div>

    

</>
);
}


