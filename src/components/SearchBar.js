import React, { useState } from "react";

function SearchBar({ inputCount, setInputCount }) {
  const handleInputChange = () => {
    setInputCount(event.target.value);
  };
  return (
    <form>
      <input type="text" value={inputCount} onChange={handleInputChange} />
      <div>{setInputCount}</div>
    </form>
  );
}
export default SearchBar;
