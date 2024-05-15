import { useEffect, useState } from "react";

function ExternalEvents() {
  let [data, setData] = useState("");
  let [dataO, setDataO] = useState("");

  useEffect(() => {
    let handleMovement = (e) => {
      console.log(e.screenX);
      setData(e.screenX);
      setDataO(e.screenY);
      document.title = "componentDidUpdate";
    };

    window.addEventListener("mousemove", handleMovement);
    console.log("mount");
    document.title = "componentDidMount";

    return () => {
      window.removeEventListener("mousemove", handleMovement);
      document.title = "componentDidUnmount";
    };
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <p>Screen X : {data}</p>
      <p>Screen Y : {dataO}</p>
    </div>
  );
}

export default ExternalEvents;
