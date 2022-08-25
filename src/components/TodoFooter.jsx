import React from 'react';
import { ListFooter, FilterContainer } from './styles/TodoFooter.styled';
const TodoFooter = ({
	todos,
	clearCompletedTodos,
	getAllTodos,
	getCompletedTodos,
	getActiveTodos,
}) => {
	const remainingTodo = todos.filter((todo) => todo.completed === false);
	return (
		<ListFooter>
			<p>{remainingTodo.length} items left</p>
			<FilterContainer>
				<button onClick={getAllTodos}>All</button>
				<button onClick={getActiveTodos}>Active</button>
				<button onClick={getCompletedTodos}>Completed</button>
			</FilterContainer>
			<p className='clear-completed' onClick={clearCompletedTodos}>
				Clear Completed
			</p>
		</ListFooter>
	);
};

export default TodoFooter;
