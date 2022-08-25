import React from 'react';
import { StyledHeader } from './styles/Header.styled';
import MoonIcon from '../assets/icon-moon.svg';
import SunIcon from '../assets/icon-sun.svg';

const Header = ({ isLightTheme, setIsLightTheme }) => {
	return (
		<StyledHeader cc={isLightTheme}>
			<h1>TODO</h1>
			<div
				className='theme-change-container'
				onClick={() => setIsLightTheme(!isLightTheme)}
			>
				{isLightTheme ? (
					<img src={MoonIcon} alt='dark mode icon' />
				) : (
					<img src={SunIcon} alt='light mode icon' />
				)}
			</div>
		</StyledHeader>
	);
};

export default Header;
