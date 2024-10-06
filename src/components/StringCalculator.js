import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

const StringCalculator = () => {
  const [numbersInput, setNumbersInput] = useState("");

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
      <Button label="Calculate" icon="pi pi-calculator" onClick={() => {}} />
    </div>
  );
};

export default StringCalculator;
