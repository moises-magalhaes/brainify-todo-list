import { GrFormClose } from "react-icons/gr";

const Todo = ({ todos, completeTodo, removeTodo }) => {
	return todos.map((todo, index) => (
		<div className={todo.isComplete ? "item complete" : "item"} key={index}>
			<div className="text-wrapping">
				<span className="complete-task"></span>
				<p
					key={todo.id}
					onClick={() => completeTodo(todo.id)}
					className="todo-text"
				>
					{todo.text}
				</p>
			</div>
			<div className="icon">
				<GrFormClose
					onClick={() => removeTodo(todo.id)}
					className="delete-icon"
				/>
			</div>
		</div>
	));
};

export default Todo;
