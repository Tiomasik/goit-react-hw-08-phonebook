import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Header = styled.header `
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.1) inset;
    nav {
        display: flex;
        gap: 15px;
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
        background-color: #8e8edd;
    }
`