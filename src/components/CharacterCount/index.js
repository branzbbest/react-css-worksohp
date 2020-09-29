import React, { Fragment, useState } from "react";
function CharacterCount({ inputCount, setInputCount }) {
  return (
    <Fragment>
      <span>{inputCount.length}</span>
    </Fragment>
  );
}
export default CharacterCount;
