import React from "react";
import { useStateCallback } from "./useStateCallback";

function UseStateCallbackExample({ startCountAt, callbackFn }) {
  const [counter, setCounter] = useStateCallback(startCountAt);

  const handleIncrementCounter = React.useCallback(() => {
    const increment = (value) => value + 1;

    setCounter(increment(counter), callbackFn);
  }, [counter]);

  return (
    <div>
      <button onClick={handleIncrementCounter}>increment button</button>
    </div>
  );
}

export default UseStateCallbackExample;
