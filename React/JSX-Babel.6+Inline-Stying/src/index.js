import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid blue",
};

ReactDOM.render(
  <div>
    <h1 style={{ color: "blueViolet" }}>Hello World!</h1>
    <h1 style={customStyle}>Hello World!</h1>
  </div>,
  document.getElementById("root")
);
