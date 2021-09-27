import { useReducer } from 'react';
import { Todo, TodoState } from '../interfaces/interfaces';
import { todoReducer } from '../reducer/todoReducer';
import { TodoContext } from './TodoContext';

const INITAL_State: TodoState = {
	todos: JSON.parse(localStorage.getItem('todosStorage')!) || [],
};

interface props {
	children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: props) => {
	const [todoState, dispatch] = useReducer(todoReducer, INITAL_State);

	const AddNewTodo = (todo: Todo) => {
		dispatch({ type: 'todoAdd', payload: todo });
	};

	const toggleTodo = (name: string) => {
		dispatch({ type: 'toggleTodo', payload: { name } });
	};

	const deleteTodo = (name: string) => {
		dispatch({ type: 'deleteTodo', payload: { name } });
	};

	return (
		<TodoContext.Provider
			value={{ todoState, AddNewTodo, toggleTodo, deleteTodo }}
		>
			<div>{children}</div>
		</TodoContext.Provider>
	);
};
