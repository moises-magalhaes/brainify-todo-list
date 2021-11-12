import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import Heading from "./Heading";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
	const initialState = JSON.parse(localStorage.getItem("storeData")) || [];
	const [todos, setTodos] = useState(initialState);

	useEffect(() => {
		localStorage.setItem("storeData", JSON.stringify(todos));
	}, [todos]);

	const addTodo = (todo) => {
		if (!todo.text || /^\s$/.test(todo.text)) {
			return;
		}
		const newTodos = [todo, ...todos];
		setTodos(newTodos);
	};

	const removeTodo = (id) => {
		const removeArr = [...todos].filter((todo) => todo.id !== id);
		setTodos(removeArr);
	};

	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	return (
		<Container>
			<Heading title="My to-do-list" />
			<Card>
				<Card.Body>
					<Todo
						todos={todos}
						completeTodo={completeTodo}
						removeTodo={removeTodo}
					/>
				</Card.Body>
			</Card>
			<TodoForm onSubmit={addTodo} />
		</Container>
	);
};

export default TodoList;
