import styled from "styled-components";
import colors from "../../constants/colors";

export const TodoForm = styled.form`
    margin: 35px 0;
    position: relative;
    color: red;
    input {
        color: ${(props)=> props.theme.colors.text};
        background: ${({theme}) => theme.colors.todoBackground};
        width: 100%;
        padding: 18px 63px;
        border-radius: 5px;
        border: none;
        font-size: inherit;
        caret-color: ${colors.brightBlue};
        &:focus {
	        outline: none;
        }
        &::placeholder{
            color: ${colors.darkGrayishBlue};
        }
    }

    .form-circle {
        height: 24px;
        width: 24px;
        border-radius: 50%;
        border: 1px solid ${({theme}) => theme.colors.circle};
        position: absolute;
        top: 16px;
        left: 20px;
    }

    @media only screen and (min-device-width: 360px) and (max-device-width: 768px) {
        margin: 20px 0;
    }
    `