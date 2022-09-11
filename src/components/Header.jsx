import React from 'react';
import { StyledHeader } from './styles/Header.styled';
import MoonIcon from '../assets/icon-moon.svg';
import SunIcon from '../assets/icon-sun.svg';

const Header = ({ isLightTheme, setIsLightTheme }) => {
	const handleChangeTheme = (theme)=> {
		setIsLightTheme(theme);
		localStorage.setItem('theme', JSON.stringify(theme))
	}
	return (
		<StyledHeader>
			<h1>TODO</h1>
			<div className='theme-change-container'>
				{isLightTheme ? (
					<img src={MoonIcon} alt='dark mode icon' onClick={()=>handleChangeTheme(false)} />
				) : (
					<img src={SunIcon} alt='light mode icon' onClick={()=>handleChangeTheme(true)} />
				)}
			</div>
		</StyledHeader>
	);
};

export default Header;
