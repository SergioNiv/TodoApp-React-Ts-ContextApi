import { createContext } from 'react';
import { Todo, TodoState } from '../interfaces/interfaces';

export type TodoContextProps = {
	todoState: TodoState;
	AddNewTodo: (todo: Todo) => void;
	toggleTodo: (name: string) => void;
	deleteTodo: (name: string) => void;
};
export const TodoContext = createContext<TodoContextProps>(
	{} as TodoContextProps
);
