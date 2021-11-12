import { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
	// const initialState = JSON.parse(localStorage.getItem("input")) || [];
	const [input, setInput] = useState("");

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
		// localStorage.setItem("storeData", JSON.stringify(input));
	}, []);

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});

		setInput("");
	};

	// useEffect(() => {
	// 	localStorage.setItem("storeData", JSON.stringify("input"));
	// }, [input]);

	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Add task"
				value={input}
				name="text"
				className="todo-input"
				onChange={handleChange}
				ref={inputRef}
			/>
			<button className="todo-button">Add task</button>
		</form>
	);
};

export default TodoForm;
