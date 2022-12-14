import { useEffect, useState } from 'react';

import { todoData } from './data';
import CreateTodo from './components/CreateTodo';
import Header from './components/Header';
import Todos from './components/Todos';
import { ThemeProvider } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { lightTheme, darkTheme } from './components/styles/Theme.styled';
import GlobalStyles, { Footer } from './components/styles/GlobalStyles';
import './App.css';

function App() {
	// todo data is gotten from data.js file
	const [isLightTheme, setIsLightTheme] = useState(true);
	const [todos, setTodos] = useState([]);
	const [filteredList, setFilteredList] = useState(null);

	const initState = {
		all: true,
		active: false,
		completed: false,
	};
	const [activeClass, setActiveClass] = useState(initState);
	
	useEffect(() => {
		setTodos(todoData);
	}, []);

	useEffect(()=> {
		const userTheme = localStorage.getItem('theme');
		if (userTheme) {
			setIsLightTheme(JSON.parse(userTheme));
		}
	}, [])

	// Check a TODO
	const checkTodo = (id) => {
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
		console.log(id);
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

	// Clear completed todos
	const clearCompletedTodos = () => {
		const remainingTodo = todos.filter((todo) => todo.completed === false);
		setTodos(remainingTodo);
	};

	/********************** FILTER TODOS ******************/
	// All Todos
	const getAllTodos = () => {
		setFilteredList(null);
		setActiveClass({ ...initState, all: true });
	};

	// Active Todos
	const getActiveTodos = () => {
		setFilteredList(todos.filter((todo) => todo.completed === false));
		setActiveClass({ ...initState, all: false, active: true });
	};

	// Completed Todos
	const getCompletedTodos = () => {
		setFilteredList(todos.filter((todo) => todo.completed === true));
		setActiveClass({ ...initState, all: false, completed: true });
	};

	return (
		<ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
			<GlobalStyles />

			<div className='App'>
				<Header isLightTheme={isLightTheme} setIsLightTheme={setIsLightTheme} />
				<CreateTodo createTodo={createTodo} />
				<Todos
					todos={filteredList ? filteredList : todos}
					checkTodo={checkTodo}
					deleteTodo={deleteTodo}
					clearCompletedTodos={clearCompletedTodos}
					getAllTodos={getAllTodos}
					getActiveTodos={getActiveTodos}
					getCompletedTodos={getCompletedTodos}
					activeClass={activeClass}
				/>

				<Footer>Drag and drop to reorder list</Footer>
			</div>
		</ThemeProvider>
	);
}

export default App;
