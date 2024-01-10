import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");

  const ConvertUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase.","success");
  };

  const ConvertLow = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase.","success");

  };

  const ConvertFirstLetterUp = () => {
    let splitText = text.split(" ");
  // Capitalize the first letter of each word
  let newText = splitText.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
  setText(newText);
  props.showAlert("Capitalized the first letter of each word.","success");
  };

  const CopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert ("Copied to Clipboard!", "success");
  };

  const RemoveExtraSpace = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
    props.showAlert ("Extra spaces are removed.", "success");

  };
  
  const ClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared.","success");

  };

  const onchange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div style={{color : props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={onchange}
            id="myBox"
            rows="8"
            style={{backgroundColor : props.mode==='dark'?'rgb(36 74 104)':'white',
            color : props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={ConvertUp} disabled={text.length === 0}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={ConvertLow} disabled={text.length === 0}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={ConvertFirstLetterUp} disabled={text.length === 0}>
        Capitalizing First Letter
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={RemoveExtraSpace} disabled={text.length === 0}>
        Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={CopyText} disabled={text.length === 0}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={ClearText} disabled={text.length === 0}>
          Clear Text
        </button>
      </div>
       <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>
          <b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> Words and <b>{text.length}</b>{" "}
          Characters
        </p>
        <p>
          <b>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> Minutes Read
        </p>
        <h2>Preview</h2>
        <p>{text.length===0?'Nothing to Preview':text}</p>
      </div>
    </>
  );
}
