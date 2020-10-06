import React from "react";

function useStateCallback(data) {
  const [state, setState] = React.useState(data);

  const cbQueueRef = React.useRef([]);

  function setStateAndCallback(value, cb) {
    if (typeof cb !== "function")
      console.warn(
        "The callback you are providing is not a function. Prefer using React's useState"
      );

    cbQueueRef.current = [...cbQueueRef.current, cb];

    setState(value);
  }

  React.useEffect(() => {
    if (cbQueueRef.current.length > 0) {
      cbQueueRef.current.forEach((fn) => {
        if (typeof fn === "function") fn(state);
      });
    }
  }, [state]);

  return [state, setStateAndCallback];
}

export { useStateCallback };
