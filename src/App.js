import React, { useState } from "react";
// import "./styles.css";
import ContainLayout from "./components/ContainerLayout";
// import Background from "./components/Background";
// import FormInput from "./components/FormInput";
// import SearchBar from "./components/SearchBar";
// import CharacterCount from "./components/CharacterCount";

export default function App() {
  // const [inputValue, setInputValue] = useState("");
  // const [inputCount, setInputCount] = useState("");
  return (
    <div className="App">
      <ContainLayout></ContainLayout>
      {/* <ContainLayout title="This is a title">Hello bbest</ContainLayout>
      <Background>{inputValue}</Background>
      <FormInput
        inputValue={inputValue}
        setInputValue={setInputValue}
      ></FormInput>
      <SearchBar
        inputCount={inputCount}
        setInputCount={setInputCount}
      ></SearchBar>
      <CharacterCount inputCount={inputCount}></CharacterCount> */}
    </div>
  );
}
