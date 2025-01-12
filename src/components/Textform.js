import React , {useState} from "react";



export default function Textform(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case","success");
  }

  const handleLoClick = ()=>{
    console.log("Lowercase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case","success");
  }
  const handleCapitalizeClick = ()=>{
    console.log("capital first letter" + text);
    let newText = (text.charAt(0).toUpperCase() + text.slice(1));
    setText(newText);
    props.showAlert("Capitalize first letter","success");
  }

  const handleReverseClick = ()=>{
    console.log("Reverse the text" + text);
    let newText = (text.split('').reverse().join(''));
    setText(newText);
    props.showAlert("Reverse the text","success");
  }

  const handleCopyClick = ()=>{
    console.log("I am copy");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success");
  }

  const handleWhiteSpace = () =>{
    console.log("remove whitespace");
    setText(text.trim().replace(/\s+/g, ' '));
    props.showAlert("Remove whitespace","success");
  }
    

  const handleOnChange = (event)=>{
    console.log(" On Change");
    setText(event.target.value);
  }
    const[ text , setText] = useState('');
    
  return (
    <>
<div className="container"  style={{color: props.mode=== 'dark'?'white':'#042742' }}>
    <h1 className=' mb-4'>{props.heading}   </h1>
    <div className='mb-3'>
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white',color: props.mode=== 'dark'?'white':'#042742' }} id="mybox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase </button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to lowercase </button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCapitalizeClick}>First letter Capital</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleReverseClick}>Reverse text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleWhiteSpace}>Remove Whitespace</button>
</div>

<div className="container my-3"  style={{color: props.mode=== 'dark'?'white':'#042742' }}>
  <h2> Your Text Summary 123</h2>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
  <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Nothing to preview!"}</p>
</div>
</>
);
}
