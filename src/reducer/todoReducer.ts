import { Todo, TodoState } from '../interfaces/interfaces';

type typeACtion =
	| { type: 'todoAdd'; payload: Todo }
	| { type: 'toggleTodo'; payload: { name: string } }
	| { type: 'deleteTodo'; payload: { name: string } };

export const todoReducer = (
	state: TodoState,
	action: typeACtion
): TodoState => {
	switch (action.type) {
		case 'todoAdd':
			return {
				...state,
				todos: [...state.todos, action.payload],
			};

		case 'toggleTodo':
			return {
				...state,
				todos: state.todos.map(({ ...todo }) => {
					if (todo.name === action.payload.name) {
						todo.completed = !todo.completed;
					}
					return todo;
				}),
			};

		case 'deleteTodo':
			return {
				...state,
				todos: state.todos.filter((todo) => todo.name !== action.payload.name),
			};

		default:
			return state;
	}
};
