import { useRef, useState } from "react";
import "./App.css";

function App() {
	const inputRef = useRef(null);
	const resultRef = useRef(null);
	const [result, setResult] = useState(0);

	const plus = (e) => {
		e.preventDefault();
		setResult((result) => result + Number(inputRef.current.value));
	};
	const minus = (e) => {
		e.preventDefault();
		setResult((result) => result - Number(inputRef.current.value));
	};
	const times = (e) => {
		e.preventDefault();
		setResult((result) => result * Number(inputRef.current.value));
	};
	const divide = (e) => {
		e.preventDefault();
		setResult((result) => result / Number(inputRef.current.value));
	};

	const resetInput = (e) => {
		e.preventDefault();
		inputRef.current.value = 0;
	};
	const resetResult = (e) => {
		e.preventDefault();
		setResult((prevVal) => prevVal * 0);
	};

	return (
		<div className="App">
			<div>
				<h1>A Simple Calcultor</h1>
			</div>
			<form>
				<p ref={resultRef}>{result}</p>
				<input
					className="input"
					pattern="[0-9]"
					ref={inputRef}
					type="number"
					placeholder="enter a number"
				/>
				<button className="button" onClick={plus}>
					add
				</button>
				<button className="button" onClick={minus}>
					subtract
				</button>
				<button className="button" onClick={times}>
					multiply
				</button>
				<button className="button" onClick={divide}>
					divide
				</button>
				<div className="reset-buttons">
					<button id="reset" onClick={resetInput}>
						reset input
					</button>
					<button id="reset" onClick={resetResult}>
						reset result
					</button>
				</div>
			</form>
		</div>
	);
}

export default App;
