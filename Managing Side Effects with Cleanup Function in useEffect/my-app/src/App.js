import "./App.css";
import { useEffect, useState } from "react";
import ScrollListenerComponent from "./ScrollListenerComponent";

let timer;

function App() {
  let [count, setCount] = useState(10);

  useEffect(() => {
    if (count > 0) {
      timer = setInterval(() => {
        setCount(count - 1);
        console.log(Date.now());
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <div className="App"> 
      <h1>Count: {count}</h1>
      <ScrollListenerComponent/>
    </div>
  );
}

export default App;
