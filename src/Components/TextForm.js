import React, { useState } from "react";

export default function TextForm(props) {
  const convertUpper = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Uppercase", "success");
  };

  const convertLower = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Lowercase", "success");
  };

  function handleOnchange(event) {
    setText(event.target.value);
  }

  function clearText(event) {
    setText("");
    props.showAlert(" Cleared !", "warning");
  }

  function copyText(event) {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "primary");
  }

  function removeExtraSpaces() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  function makeInitCap() {
    let words = text.split(" ");
    for(let i = 0;i<words.length;i++){
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    setText(words.join(" "));
  }

  /*event.target.value is a JavaScript expression that is commonly 
  used in event handler functions to get the current value of an input 
  field, such as a text area or a text input.*/

  const [text, setText] = useState(""); //######//

  return (
    <>
      <div className="mb-3">
        <div className="container">
          <h1 className="p-3">{props.heading}</h1>
          <textarea
            name=""
            value={text}
            placeholder="Enter Your Text here"
            onChange={handleOnchange}
            id="myBox"
            cols="10"
            rows="5"
            className="form-control"
          >
            {text}
          </textarea>
          <button className="btn btn-primary m-4" disabled={text.length===0} onClick={convertUpper}>
            Convert To Uppercase 
          </button>
          <button className="btn btn-primary m-4" disabled={text.length===0} onClick={convertLower}>
            Convert To Lowercase
          </button>
          <button className="btn btn-primary m-4" disabled={text.length===0} onClick={clearText}>
            Clear Text
          </button>
          <button className="btn btn-primary m-4" disabled={text.length===0} onClick={copyText}>
            Copy Text
          </button>
          <button className="btn btn-primary m-4" disabled={text.length===0} onClick={removeExtraSpaces}>
            Remove Extra Spaces
          </button>
          <button className="btn btn-primary m-4" disabled={text.length===0} onClick={makeInitCap}>
            Make Initial letter Capital
          </button>
        </div>
      </div>

      <div className="container my-3">
        <h3>Summary of your Input</h3>
        <p>
          {" "}
          {text.split(" ").filter((element)=>{
              return element.length!== 0
          }).length} words and {text.length} charachters
        </p>
        <p>{parseInt(text.split(" ").length) * 0.005} minutes read </p>
        <h5 className="heade">
          Preview :<p>{text}</p>
        </h5>
      </div>
    </>
  );
}
