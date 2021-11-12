import { useState, useEffect, useRef } from "react";
import { Card, Form, FormControl, InputGroup } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";

const TodoForm = (props) => {
	const [input, setInput] = useState("");

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
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

	return (
		<Card>
			<Card.Body>
				<Form className="todo-form" onSubmit={handleSubmit}>
					<div className="wrapping">
						<button className="todo-button">
							<AiOutlinePlus />
						</button>
						<FormControl
							type="text"
							placeholder="Add task"
							value={input}
							name="text"
							className="todo-input"
							onChange={handleChange}
							ref={inputRef}
						/>
					</div>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default TodoForm;
