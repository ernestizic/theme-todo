import styled from "styled-components";
import colors from "../../constants/colors";

export const ListFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    padding: 14px 20px;
    p {
        color: ${colors.darkGrayishBlue};
        font-weight: bold;
    }
    .clear-completed:hover {
        cursor: pointer;
        color: ${colors.veryDarkGrayishBlue};
    }
`

export const FilterContainer = styled.div`
    button{
        margin: 0 10px;
        background: none;
        border: none;
        font-weight: bold;
        &:hover{
            cursor: pointer;
        }
    }
`