import styled, { css } from "styled-components";
import colors from "../../constants/colors";

export const TodosContainer = styled.div`
    border-radius: 5px;
    box-shadow: 0 0 3px ${(props) => props.theme.colors.circle};
    background: ${(props) => props.theme.colors.todoBackground};
`

export const TodoList = styled.div`
    .empty-list {
        padding: 80px 0;
        text-align: center;
    }
`

export const TodoItemContainer = styled.div`
    border-bottom: 1px solid ${(props) => props.theme.colors.circle};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    .todo-item {
        display: flex;
        align-items: center;
        gap: 20px;
        color: ${(props)=> props.theme.colors.text};
        @media only screen and (min-device-width: 360px) and (max-device-width: 768px) {
            font-size: 14px;
            gap: 10px;
        }
    }
    .completed {
        text-decoration: line-through;
        color: ${colors.darkGrayishBlue};
    }
    img {
        width: 14px;
        &:hover {
            cursor: pointer;
        }
    }
`

export const CheckerContainer = styled.div`
    max-width: 24px;
    max-height: 24px;
`
export const Checker = styled.div`
    height: 24px;
    width: 24px;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.colors.circle};
    position: relative;
    background-color: inherit;
    &:hover {
        cursor: pointer;
        border: 1px solid ${colors.darkGrayishBlue};
    }
    ${props => props.bg && css`
            background: ${colors.checkBackground};
        `
    };
    img{
        position: absolute;
        top: 5px;
        left: 5px;
        width: 12px;
    }
`