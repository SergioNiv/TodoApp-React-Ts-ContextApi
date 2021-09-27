import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const TodoList = () => {
	const { todoState, toggleTodo, deleteTodo } = useContext(TodoContext);
	const { todos } = todoState;

	return (
		<div className="mt-5" style={{ textAlign: 'left' }}>
			<span style={{ fontSize: '1rem', display: 'block' }} className="mb-3">
				Presiona sobre la tarea para marcarla como completada
			</span>
			{todos.map((todo, idx) => (
				<li
					key={idx}
					style={{
						cursor: 'pointer',
						textDecoration: todo.completed ? 'line-through' : '',
					}}
					className="mt-2"
				>
					<button
						className="btn btn-danger me-3"
						onClick={() => deleteTodo(todo.name)}
					>
						Borrar
					</button>
					<span onClick={() => toggleTodo(todo.name)}>{todo.name}</span>
				</li>
			))}
		</div>
	);
};
