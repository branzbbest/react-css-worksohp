import React from "react";
import style from "./main.module.css";

function Button({ children }) {
  return (
    <>
      <button>{children}</button>
    </>
  );
}
export default Button;
