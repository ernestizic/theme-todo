import React from 'react';
import { ListFooter, FilterContainer } from './styles/TodoFooter.styled';
const TodoFooter = ({
	todos,
	clearCompletedTodos,
	getAllTodos,
	getCompletedTodos,
	getActiveTodos,
	activeClass
}) => {
	const remainingTodo = todos.filter((todo) => todo.completed === false);
	return (
		<ListFooter>
			<p>{remainingTodo.length} items left</p>
			<FilterContainer>
				<a href='##' onClick={getAllTodos} className={activeClass.all ? 'active' : ''}>All</a>
				<a href='##' onClick={getActiveTodos} className={activeClass.active ? 'active' : ''}>Active</a>
				<a href='##' onClick={getCompletedTodos} className={activeClass.completed ? 'active' : ''}>Completed</a>
			</FilterContainer>
			<p className='clear-completed' onClick={clearCompletedTodos}>
				Clear Completed
			</p>
		</ListFooter>
	);
};

export default TodoFooter;
