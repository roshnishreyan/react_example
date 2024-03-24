import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    // setText((prevText) => prevText.toUpperCase());
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("on changed");
    setText(event.target.value);
  };
  const handleloClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    // setText((prevText) => prevText.toUpperCase());
    setText(newText);
  };
  const handleclearClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = "";
    // setText((prevText) => prevText.toUpperCase());
    setText(newText);
  };

  const handleCopy = () => {
    console.log("i am copy");
    var text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const [text, setText] = useState("enter here");
  //setText("new text");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-outline-primary mx-3"
          onClick={handleUpClick}
        >
          convert to upper case
        </button>
        <button
          className="btn btn-outline-primary mx-3"
          onClick={handleloClick}
        >
          convert to lower case
        </button>
        <button
          className="btn btn-outline-primary mx-3"
          onClick={handleclearClick}
        >
          clear text
        </button>
        <button className="btn btn-outline-primary mx-3" onClick={handleCopy}>
          copy text
        </button>

        <button className="btn btn-outline-primary mx-3" onClick={handleExtraSpaces}>Extra Spaces</button>
      </div>

      <div className="container" my-3></div>
      <h1>your text summary</h1>
      <p>
        {text.split(" ").length} words and {text.length} characters
      </p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </>
  );
}
