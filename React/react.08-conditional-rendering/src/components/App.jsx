import React from "react";
import Form from "./Form";

const isLoggedIn = false;
const currentTime = new Date(2022, 12, 1, 13).getHours();

function App() {
  return (
    <div className="container">
      {/* Ternary Operator */}
      {isLoggedIn ? <h1>Hello</h1> : <Form />}

      {(currentTime > 12) ? <h1>HelloWhy are you still working?</h1> : null}

      {/* AND Operator| It serves the same purpose as the above expression */}
      {currentTime > 12 && <h1>Why are you still working?</h1>}
      {/* When the first condition is false, JS doesn't even consider the second expression. And hence the 
      h1 doesn't get rendered */}
    </div>
  );
}

export default App;
