import React, { useState } from "react";
import { style } from "../style";

const AddNumberRoot = (props) => {
  const { onClick } = props;

  return (
    <div>
      <h1>Add Number Root</h1>
      <AddNumber onClick={onClick} />
    </div>
  );
};

const AddNumber = (props) => {
  const { onClick } = props;
  const [size, setSize] = useState(0);

  return (
    <div style={style}>
      <input
        type={"button"}
        value={"+"}
        onClick={() => onClick(Number(size))}
      />
      <input
        type={"number"}
        value={size}
        onChange={(event) => setSize(event.target.value)}
      />
    </div>
  );
};

export { AddNumberRoot, AddNumber };
