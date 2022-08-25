import styled from "styled-components";
import colors from "../../constants/colors";

export const ListFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    padding: 14px 20px;
    position: relative;
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
        color: ${colors.darkGrayishBlue};
        &:hover{
            cursor: pointer;
            color: ${(props)=> props.theme.colors.text};
        }
    }

    @media only screen and (min-device-width: 360px) and (max-device-width: 768px) {
        box-shadow: 0 0 3px ${colors.lightGrayishBlue};
        position: absolute;
        width: 100%;
        bottom: -60px;
        left: 0;
        border-radius: 5px;
        text-align: center;
        padding: 14px 0;
    }
`