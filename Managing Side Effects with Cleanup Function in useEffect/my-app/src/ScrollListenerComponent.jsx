import { useState, useEffect } from "react";

function ScrollListenerComponent() {
  let [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Scroll Y Position: {scrollY}</h1>
    </div>
  );
}

export default ScrollListenerComponent;
