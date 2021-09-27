import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

export const TodoAdd = () => {
	const { AddNewTodo, todoState } = useContext(TodoContext);
	const [formValue, setFormValue] = useState('');

	const countToggle = todoState.todos.filter(
		(todo) => todo.completed === true
	).length;

	localStorage.setItem('todosStorage', JSON.stringify(todoState.todos));

	const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormValue(e.target.value);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (formValue.trim().length > 0) {
			AddNewTodo({ name: formValue, completed: false });
			setFormValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>
				Todo App: {countToggle} de {todoState.todos.length} completados
			</h1>
			<hr />
			<label>Escribe tu tarea:</label>
			<input
				type="text"
				placeholder="Tarea"
				className="form form-control mt-2 "
				onChange={handleOnchange}
				value={formValue}
			/>

			<button type="submit" className="btn btn-success mt-4 ">
				Añadir tarea
			</button>
		</form>
	);
};
