import TodoItem from './TodoItem';

import { TodoList, TodosContainer } from './styles/Todo.styled';
import TodoFooter from './TodoFooter';

const Todos = ({todos, checkTodo, deleteTodo}) => {

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
					<div className='empty-list'>Nothing left to do</div>
				)}
			</TodoList>
			<TodoFooter />
		</TodosContainer>
	);
};

export default Todos;
