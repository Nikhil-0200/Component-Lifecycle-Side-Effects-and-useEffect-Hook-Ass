import "./App.css";

import React from "react";
import { useState } from "react";

function App() {
  let [value, setValue] = useState(0);

  return (
    <div className="App">
      <h1>Count: {value}</h1>
      <button onClick={() => setValue(value + 1)}>Inc Count</button>
      <button onClick={() => setValue(value - 1)}>Dec Count</button>
    </div>
  );
}

export default App;
