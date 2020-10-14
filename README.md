# useStateCallback

useStateCallback is an simple abstraction of React's useState, useEffect and useRef hooks putted all together.

## Reasoning

I have made this simple abstraction in a custom hook, because I think it makes the code cleaner and readable for me.

## Usage

```
import { useStateCallback } from 'use-state-callback';

function Component() {
	const [counter, setCounter] = useStateCallback(0);

	function consoleCounterValue(value) {
		console.log(`counter is now on ${value}`);
	}

	function handleClick() {
		const increment = (value) => value + 1;
		setCounter(increment(counter), consoleCounterValue);
	}

	render(<button onClick={handleClick}>Increment</button>);
}
```
