import TodoItem from './TodoItem';

import { TodoList, TodosContainer } from './styles/Todo.styled';
import TodoFooter from './TodoFooter';

const Todos = ({
	todos,
	checkTodo,
	deleteTodo,
	clearCompletedTodos,
	getAllTodos,
	getCompletedTodos,
	getActiveTodos,
	activeClass
}) => {
	return (
		<TodosContainer>
			<TodoList>
				{todos.length ? (
					todos.map((todo) => (
						<TodoItem
							key={todo.id}
							todo={todo}
							checkTodo={checkTodo}
							deleteTodo={deleteTodo}
						/>
					))
				) : (
					<div className='empty-list'>Nothing to see here...</div>
				)}
			</TodoList>
			<TodoFooter
				todos={todos}
				clearCompletedTodos={clearCompletedTodos}
				getAllTodos={getAllTodos}
				getActiveTodos={getActiveTodos}
				getCompletedTodos={getCompletedTodos}
				activeClass={activeClass}
			/>
		</TodosContainer>
	);
};

export default Todos;
