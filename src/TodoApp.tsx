import './App.css';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { TodoProvider } from './context/TodoProvider';

function TodoApp() {
	return (
		<TodoProvider>
			<div className="App-header App p-5 ">
				<TodoAdd />
				<TodoList />
			</div>
		</TodoProvider>
	);
}

export default TodoApp;
