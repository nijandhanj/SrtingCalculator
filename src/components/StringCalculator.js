import React, { useState } from "react";
import { add } from "../utils/calculation";

function StringCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {

    try {
        const processedInput = input.replace(/\\n/g, "\n"); 
        setResult(add(processedInput));
    } catch (error) {
        setResult(error.message);
    }
};



  return (
    <main className="main-container">
      <h2>String Calculator</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers..."
      />
      <button onClick={handleCalculate} type="submit">
        Submit
      </button>
      {<h4>Result:{result}</h4>}
    </main>
  );
}

export default StringCalculator;
