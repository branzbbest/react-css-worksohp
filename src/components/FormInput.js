import React, { useState } from "react";

function FormInput({ inputValue, setInputValue }) {
  // const [inputValue, setInputValue ] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleClearClick = (event) => {
    setInputValue("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">submit</button>
      </form>
      <div>{inputValue}</div>
      <button onClick={handleClearClick}>Clear</button>
    </>
  );
}
export default FormInput;
