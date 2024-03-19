import React, { useState } from "react";

function App() {
  const [name, setName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setName((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>Hello {name.fName} {name.lName}</h1>
      <form>
        <input name="fName" value={name.fName} placeholder="First Name" onChange={handleChange} />
        <input name="lName" value={name.lName} placeholder="Last Name" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;