# useStateCallback

useStateCallback is an simple abstraction of React's useState, useEffect and useRef hooks putted all together.

## Why?

I think this abstraction makes the code cleaner, readable, and automates the useState/useEffect set up in some cases.

## Installing

You can install it using yarn or npm as you'd like:

```
$ yarn add use-state-callback
```

or

```
$ npm install use-state-callback
```

## Usage

The callback function will be called with the state update value as single parameter. So you can use a function reference or an anonymous function as second argument of the dispatcher function.

Function reference:

```js
import { useStateCallback } from "use-state-callback";

function AwesomeComponent() {
  const [counter, setCounter] = useStateCallback(0);

  function consoleCounterValue(updatedState) {
    console.log(`counter is on ${updatedState} now`);
  }

  function handleClick() {
    const increment = (value) => value + 1;
    setCounter(increment(counter), consoleCounterValue);
  }

  render(<button onClick={handleClick}>Increment</button>);
}
```

Anonymous Function:

```js
import { useStateCallback } from "use-state-callback";

function AwesomeComponent() {
  const [counter, setCounter] = useStateCallback(0);

  function consoleCounterValue(value) {
    console.log(`counter is now on ${value}`);
  }

  function handleClick() {
    const increment = (value) => value + 1;
    setCounter(increment(counter), (updatedState) =>
      console.log(`counter is on ${updatedState} now`)
    );
  }

  render(<button onClick={handleClick}>Increment</button>);
}
```
