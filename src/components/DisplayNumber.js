import { style } from "../style";
import React from "react";

const DisplayNumberRoot = (props) => {
  const { number } = props;
  return (
    <div style={style}>
      <h1>Display Number Root</h1>
      <DisplayNumber number={number} />
    </div>
  );
};

const DisplayNumber = (props) => {
  const { number } = props;
  return (
    <div style={style}>
      <h1>DisplayNumber</h1>
      <input type={"text"} value={number} readOnly />
    </div>
  );
};

export { DisplayNumberRoot, DisplayNumber };
