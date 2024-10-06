import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Message } from "primereact/message";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import { addNumbersFromString } from "../helpers/calculatorHelper";

const StringCalculator = () => {
  const [numbersInput, setNumbersInput] = useState("");
  const [result, setResult] = useState(null);

  const calculateSum = () => {
    try {
      const result = addNumbersFromString(numbersInput);
      setResult(result);
    } catch (e) {
      setResult(null);
    }
  };

  return (
    <div>
      <h2>String Calculator</h2>
      <div style={{ marginBottom: "10px" }}>
        <InputText
          value={numbersInput}
          onChange={(e) => setNumbersInput(e.target.value)}
          placeholder="Enter numbers with delimiters"
          style={{ width: "300px" }}
        />
      </div>
      <Button
        label="Calculate"
        icon="pi pi-calculator"
        onClick={calculateSum}
      />

      {result !== null && (
        <div style={{ marginTop: "20px" }}>
          <Message severity="success" text={`Result: ${result}`} />
        </div>
      )}
    </div>
  );
};

export default StringCalculator;
