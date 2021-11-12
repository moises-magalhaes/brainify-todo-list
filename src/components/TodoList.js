import { useEffect, useState } from "react";
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
		<div>
			<h1>My to-do-list</h1>
			<TodoForm onSubmit={addTodo} />
			<Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
		</div>
	);
};

export default TodoList;
