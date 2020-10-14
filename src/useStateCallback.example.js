import React from "react";
import { useStateCallback } from "./useStateCallback";

function UseStateCallbackExample({ startCountAt, callbackFn }) {
  const [counter, setCounter] = useStateCallback(startCountAt);

  const handleIncrementCounter = React.useCallback(() => {
    const value = counter + 1;
    setCounter(value, callbackFn);
  }, [counter]);

  return (
    <div>
      <button onClick={handleIncrementCounter}>increment button</button>
    </div>
  );
}

export default UseStateCallbackExample;
