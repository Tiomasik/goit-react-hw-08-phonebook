import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Header = styled.header `
    padding: 20px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 0, 0, 0.3) inset;
    
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;

        div{
            display: flex;
            align-items: center;
            gap: 20px;  
        }
    }
`

export const Link = styled(NavLink) `
    padding: 8px 12px;
    border-radius: 5px;
    text-decoration: none;
    color: black;
    font-weight: 500;

    &.active {
        color: white;
        background-color: #716e6e;
    }

    :hover{
        background-color: #dad5d5;
    }
`