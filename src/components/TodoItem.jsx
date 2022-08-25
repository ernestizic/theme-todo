import React from 'react';
import DeleteIcon from '../assets/icon-cross.svg';
import CheckIcon from '../assets/icon-check.svg';
import { TodoItemContainer, CheckerContainer, Checker } from './styles/Todo.styled';

const TodoItem = ({ todo, checkTodo, deleteTodo }) => {
	return (
		<TodoItemContainer>
			<div className='todo-item'>
				<CheckerContainer>
					<Checker onClick={() => checkTodo(todo.id)} bg={todo.completed}>
						{todo.completed && <img src={CheckIcon} alt='check todo' />}
					</Checker>
				</CheckerContainer>

				<span className={todo.completed ? 'completed' : ''}>{todo.title}</span>
			</div>
			<img src={DeleteIcon} alt='delete todo' onClick={()=> deleteTodo(todo.id)} />
		</TodoItemContainer>
	);
};

export default TodoItem;
