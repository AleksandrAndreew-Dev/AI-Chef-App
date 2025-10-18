import React from "react";
import Count from "./count";

export default function Counter() {

  console.log("Counter block renderred");
  const [count, setCount] = React.useState(2);

  function handlePlus() {
    setCount((prevCount) => prevCount + 1);
  }
  function handleMinus() {
    count > 0 ? setCount((prevCount) => prevCount - 1): null;
  }

  return (
    <section className="counter">
      <h3>How many times did Bob says state?</h3>
      <div>
        <button className="plus" onClick={handlePlus}>
          +
        </button>
        <Count number={count}/>
        <button className="minus" onClick={handleMinus}>
          -
        </button>
      </div>
    </section>
  );
}
