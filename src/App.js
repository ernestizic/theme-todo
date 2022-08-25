import { useState } from 'react';

import CreateTodo from './components/CreateTodo';
import Header from './components/Header';
import Todos from './components/Todos';

import { todoData } from './data';

import { v4 as uuidv4 } from 'uuid';

import GlobalStyles, { Footer } from './components/styles/GlobalStyles';

function App() {
	const [isLightTheme, setIsLightTheme] = useState(true);

	const [todos, setTodos] = useState(todoData);

	// Check a TODO
	const checkTodo = (id) => {
		console.log(id);
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		);
	};

	// Delete a Todo
	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	// Create a Todo
	const createTodo = (todo) => {
		const newTodo = {
			id: uuidv4(),
			title: todo,
			completed: false,
		};
		setTodos([...todos, newTodo]);
	};

	return (
		<>
			<GlobalStyles />
			<div className='App'>
				<Header isLightTheme={isLightTheme} setIsLightTheme={setIsLightTheme} />
				<CreateTodo createTodo={createTodo} />
				<Todos todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />

				<Footer>Drag and drop to reorder list</Footer>
			</div>
		</>
	);
}

export default App;
