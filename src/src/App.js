import { useState } from "react";
import "./App.css";

function App() {
  // State for the current input and result
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // Function to handle button clicks
  const handleClick = (value) => {
    if (value === "=") {
      try {
        // Use eval to evaluate the mathematical expression
        setResult(eval(input)); // Avoid eval in production; replace with safer alternatives
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      // Clear the input and result
      setInput("");
      setResult("");
    } else {
      // Update the input
      setInput(input + value);

      //"52" +"*"   "52"
    }
  };

  return (
    <div className="App">
      <div className="display">
        <div className="result">{result}</div>
      </div>
      <input
        type="text"
        className="input"
        value={input}
        readOnly
        placeholder="0"
      />

      <button onClick={() => handleClick("/")}>/</button>
      <button onClick={() => handleClick("*")}>*</button>
      <button onClick={() => handleClick("-")}>-</button>
      <button onClick={() => handleClick("+")}>+</button>
      <button onClick={() => handleClick("=")}>=</button>
      <button onClick={() => handleClick("9")}>9</button>
      <button onClick={() => handleClick("8")}>8</button>
      <button onClick={() => handleClick("7")}>7</button>
      <button onClick={() => handleClick("6")}>6</button>
      <button onClick={() => handleClick("5")}>5</button>
      <button onClick={() => handleClick("4")}>4</button>
      <button onClick={() => handleClick("3")}>3</button>
      <button onClick={() => handleClick("2")}>2</button>
      <button onClick={() => handleClick("1")}>1</button>
      <button onClick={() => handleClick("0")}>0</button>
      <button onClick={() => handleClick("C")}>C</button>
    </div>
  );
}

export default App;
