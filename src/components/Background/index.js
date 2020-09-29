import React, { useState } from "react";
import style from "./main.module.css";

function Background(props) {
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "#fff" ? "#f00" : "#fff");
  };

  return (
    <React.Fragment>
      <div
        className={style.container}
        onClick={handleClick}
        style={{ backgroundColor }}
      >
        {props.children} {backgroundColor === "#fff" ? "White" : "Red"}
      </div>
    </React.Fragment>
  );
}
export default Background;
