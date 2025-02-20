"use client";
import { forwardRef, Ref, useImperativeHandle, useRef, useState } from "react";

export default function UseImperativeHandlePage() {
	const resetButtonRef = useRef<CounterRef>(null);

	return (
		<div className="tutorial">
			<Counter ref={resetButtonRef} />
			<button onClick={() => resetButtonRef.current?.reset()}>
				Reset From Parent
			</button>
		</div>
	);
}

type CounterRef = {
	reset: () => void;
};

type CounterProps = {};
const Counter = forwardRef<CounterRef>(
	(props: CounterProps, refFromParent: Ref<CounterRef>) => {
		const [count, setCount] = useState(0);

		const increment = () => setCount(count + 1);
		const decrement = () => setCount(count - 1);

		useImperativeHandle(refFromParent, () => ({
			reset: () => setCount(0)
		}));

		return (
			<div>
				<h1 className="text-2xl">Count: {count}</h1>
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
			</div>
		);
	}
);
