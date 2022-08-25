import colors from '../../constants/colors';
import desktopBgLight from '../../assets/bg-desktop-light.jpg';
import desktopBgDark from '../../assets/bg-desktop-dark.jpg';
import mobileBgLight from '../../assets/bg-mobile-light.jpg';
import mobileBgDark from '../../assets/bg-mobile-dark.jpg';

// Light theme colors
export const lightTheme = {
	bg: {
		mobile: `${mobileBgLight}`,
		desktop: `${desktopBgLight}`,
	},
	colors: {
		background: `${colors.lightGray}`,
		todoBackground: '#fff',
        text: `${colors.veryDarkGrayishBlue}`,
        circle: `${colors.veryLightGrayishBlue}`
	},
};

//   Dark Theme colors
export const darkTheme = {
	bg: {
		mobile: `${mobileBgDark}`,
		desktop: `${desktopBgDark}`,
	},
	colors: {
		background: `${colors.veryDarkBlue}`,
		todoBackground: `${colors.veryDarkDesaturatedBlue}`,
        text: `${colors.lightGrayishBlue}`,
        circle: `${colors.veryDarkGrayishBlueDarkTheme2}`,
	},
};
