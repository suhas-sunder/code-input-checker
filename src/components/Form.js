import React from "react";
import { useEffect } from "react";

function Form({ handleSubmission, code }) {
  const handleInput = (e) => {
    // Replace existing number with new num input
    handleOneDigitMax(e);

    // Focus next element if necessary
    handleFocusInputs(e);
  };

  const handleOneDigitMax = (e) => {
    if (e.target.value.length > 1) {
      e.target.value = e.target.value[e.target.value.length - 1];
    }
  };

  const handleFocusInputs = (e) => {
    const submitBtn = document.getElementById("submit");
    const regex = /[0-9]/;
    if (e.target.value.match(regex)) {
      e.target.nextElementSibling
        ? e.target.nextElementSibling.focus()
        : submitBtn.focus();
    }
  };

  const checkForBackspace = (e) => {
    if (e.keyCode === 8 && !e.target.value) {
      e.target.previousElementSibling.focus();
    }
  };

  // Check inputs for backspace
  useEffect(() => {
    const inputElements = document.getElementsByClassName("inputNum");
    console.log(code);

    Array.from(inputElements).forEach((input, index) => {
      if (index !== 0) {
        input.addEventListener("keyup", checkForBackspace);
      }
    });

    return () => {
      window.removeEventListener("keyup", checkForBackspace);
    };
  }, []);

  return (
    <form onSubmit={handleSubmission}>
      <div className="inputs">
        <input
          className="inputNum"
          type="number"
          min="0"
          max="9"
          maxLength="1"
          onChange={(e) => handleInput(e)}
        ></input>
        <input
          className="inputNum"
          type="number"
          min="0"
          max="9"
          maxLength="1"
          onChange={(e) => handleInput(e)}
        ></input>
        <input
          className="inputNum"
          type="number"
          min="0"
          max="9"
          maxLength="1"
          onChange={(e) => handleInput(e)}
        ></input>
        <input
          className="inputNum"
          type="number"
          min="0"
          max="9"
          maxLength="1"
          onChange={(e) => handleInput(e)}
        ></input>
      </div>
      <button id="submit">Submit</button>
    </form>
  );
}

export default Form;
