import React, { useState } from "react";
import { style } from "./style";
import { AddNumberRoot } from "./components/AddNumber";
import { DisplayNumberRoot } from "./components/DisplayNumber";

const App = () => {
  const [number, setNumber] = useState(0);
  const onClick = (size) => setNumber((prev) => prev + size);

  return (
    <div className="App" style={style}>
      <h1>Root</h1>
      <AddNumberRoot number={number} onClick={onClick} />
      <DisplayNumberRoot number={number} />
    </div>
  );
};

export default App;
