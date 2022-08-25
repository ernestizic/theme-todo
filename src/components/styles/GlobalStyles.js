import styled, { createGlobalStyle } from 'styled-components';
import colors from '../../constants/colors';

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -ms-overflow-style: none;
    }

    body {
        font-size: 18px;
        font-family: 'Josefin Sans', sans-serif;
        background: ${({theme}) => theme.colors.background};
        background-image: url(${({theme}) => theme.bg.desktop});
        background-repeat: no-repeat;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    .App{
        max-width: 550px;
        margin: 70px auto;
    }

    @media only screen and (min-device-width: 360px) and (max-device-width: 768px) {
        .App{
            max-width: 90%;
            margin: 45px auto;
        }
        body {
            background-image: url(${({theme}) => theme.bg.mobile});
        }
    }

`;

export default GlobalStyles;

export const Footer = styled.footer`
	margin: 50px 0;
	font-size: 14px;
	color: ${colors.veryDarkGrayishBlue};
	text-align: center;
    @media only screen and (min-device-width: 360px) and (max-device-width: 768px) {
        margin-top: 90px;
    }
`;
