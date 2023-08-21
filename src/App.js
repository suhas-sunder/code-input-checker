import "./App.css";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  let [code, setCode] = useState(Math.floor(Math.random() * 9000 + 1000));
  let [codeValidation, setCodeValidation] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
    const inputElements = document.getElementsByClassName("inputNum");
    const inputNums = [];

    Array.from(inputElements).forEach((input) => {
      if (input.value) {
        inputNums.push(input.value);
      }

      input.value = ""; //Reset all input values
    });

    code === parseInt(inputNums.join(""))
      ? resetInputs(inputElements)
      : setCodeValidation("Invalid input. Please enter the correct code!");
  };

  const resetCode = () => {
    setCode(Math.floor(Math.random() * 9000 + 1000));
  };

  const resetInputs = (inputs) => {
    resetCode();
    setCodeValidation("You have entered the correct code!");
  };

  return (
    <div>
      <h1>Code Checker</h1>
      <p>Your code is: {code}</p>
      <Form handleSubmission={handleSubmission} code={code} />
      {codeValidation && <span>{codeValidation}</span>}
    </div>
  );
}

export default App;
