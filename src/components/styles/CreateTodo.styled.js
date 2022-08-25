import styled from "styled-components";
import colors from "../../constants/colors";

export const TodoForm = styled.form`
    margin: 35px 0;
    position: relative;
    input {
        width: 100%;
        padding: 18px 63px;
        border-radius: 5px;
        border: none;
        font-size: inherit;
        caret-color: ${colors.brightBlue};
        &:focus {
	        outline: none;
        }
    }

    .form-circle {
        height: 24px;
        width: 24px;
        border-radius: 50%;
        border: 1px solid ${colors.veryLightGrayishBlue};
        position: absolute;
        top: 16px;
        left: 20px;
    }
    `