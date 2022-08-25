import React from 'react';
import { ListFooter, FilterContainer } from './styles/TodoFooter.styled';
const TodoFooter = () => {
	return (
		<ListFooter>
			<p>5 items left</p>
            <FilterContainer>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </FilterContainer>
			<p className='clear-completed'>Clear Completed</p>
		</ListFooter>
	);
};

export default TodoFooter;
