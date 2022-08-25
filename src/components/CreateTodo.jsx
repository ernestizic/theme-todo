import React, { useState } from 'react';
import { TodoForm } from './styles/CreateTodo.styled';

const CreateTodo = ({ createTodo }) => {
	const [text, setText] = useState('');
	
	const handleSubmit = (e) => {
		e.preventDefault();
		createTodo(text);
		setText('');
	};
	return (
		<TodoForm onSubmit={handleSubmit}>
            <span className='form-circle'></span>
			<input
				type='text'
				placeholder='Create a new todo...'
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
		</TodoForm>
	);
};

export default CreateTodo;
