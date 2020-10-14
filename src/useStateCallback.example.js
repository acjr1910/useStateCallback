import React from "react";
import { useStateCallback } from "./useStateCallback";

function UseStateCallbackExample() {
  const [counter, setCounter] = useStateCallback(0);

  function handleIncrementCounter() {
    setCounter(counter + 1, (updatedState) =>
      console.log(`Counter is now on ${updatedState}`)
    );
  }

  return (
    <div>
      <h1>
        Counter is on <span>{counter}</span>
      </h1>
      <button onClick={handleIncrementCounter}>Increment</button>
    </div>
  );
}

export default UseStateCallbackExample;
