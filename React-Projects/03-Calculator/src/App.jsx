import Display from './components/Display';
import ButtonContainer from "./components/ButtonContainer";
import './App.css';
import { useState } from 'react';

function App() {
  const [calVal, setCalVal] = useState("");

  function handleInput(input) {
    if (input === 'C') {
      setCalVal("");
    }
    else if (input === '=') {
      const result = eval(calVal);
      setCalVal(`${result}`);
    }
    else if (input === '<-') {
      setCalVal((prevVal) => prevVal.slice(0, -1));
    }
    else {
      setCalVal(calVal + input);
    }
  }
  return (
    <div className="calculator">
      <Display displayVal={calVal} />
      <ButtonContainer handleInput={handleInput} />
    </div>
  );
}

export default App
