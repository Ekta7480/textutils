import React , {useState} from "react";



export default function Textform(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case","Success");
  }

  const handleLoClick = ()=>{
    console.log("Lowercase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case","Success");
  }
  const handleCapitalizeClick = ()=>{
    console.log("capital first letter" + text);
    let newText = (text.charAt(0).toUpperCase() + text.slice(1));
    setText(newText);
    props.showAlert("Capitalize first letter","Success");
  }

  const handleReverseClick = ()=>{
    console.log("Reverse the text" + text);
    let newText = (text.split('').reverse().join(''));
    setText(newText);
    props.showAlert("Reverse the text","Success");
  }

  const handleCopyClick = ()=>{
    console.log("I am copy");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","Success");
  }

  const handleWhiteSpace = () =>{
    console.log("remove whitespace");
    setText(text.trim().replace(/\s+/g, ' '));
    props.showAlert("Remove whitespace","Success");
  }
    

  const handleOnChange = (event)=>{
    console.log(" On Change");
    setText(event.target.value);
  }
    const[ text , setText] = useState('');
    
  return (
    <>
<div className="container"  style={{color: props.mode=== 'dark'?'white':'#042742' }}>
    <h1>{props.heading}   </h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white',color: props.mode=== 'dark'?'white':'#042742' }} id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase </button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase </button>
    <button className="btn btn-primary mx-2" onClick={handleCapitalizeClick}>First letter Capital</button>
    <button className="btn btn-primary mx-2" onClick={handleReverseClick}>Reverse text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy text</button>
    <button className="btn btn-primary mx-2" onClick={handleWhiteSpace}>Remove Whitespace</button>
</div>

<div className="container my-3"  style={{color: props.mode=== 'dark'?'white':'#042742' }}>
  <h2> Your Text Summary</h2>
  <p>{text.split("").length} words and {text.length} characters</p>
  <p>{0.008*text.split("").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something in the text area above to preview it here"}</p>
</div>
</>
);
}
