import styled, { createGlobalStyle } from 'styled-components';
import background from '../../assets/bg-desktop-light.jpg'
import colors from '../../constants/colors';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -ms-overflow-style: none;
    }

    body {
        font-size: 18px;
        font-family: 'Josefin Sans', sans-serif;
        background: ${colors.checkBackground};
        background-image: url(${background});
        background-repeat: no-repeat;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    .App{
        max-width: 550px;
        margin: 70px auto;
    }

`;

export default GlobalStyles;

export const Footer = styled.footer`
    margin: 50px 0;
    font-size: 14px;
    color: ${colors.darkGrayishBlue};
    text-align: center;
`
