import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Herro = styled.main `
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    background-color: #f0f0f7;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }

    div {
        @media screen and (min-width: 768px) {
        width: 500px;
    }
    }
`
export const Title = styled.h1 `
    font-size: 42px;
    font-weight: 800;
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
        font-size: 62px;
    }
`

export const HerroImg = styled.img `
    width: 320px;
`

export const Button = styled(Link) `
    padding: 8px 12px;
    border-radius: 5px;
    text-decoration: none;
    color: black;
    font-weight: 500;
    background-color: #dad5d5;

    :hover{
        background-color: #716e6e;
        color: #ffffff;
    }
`

export const HerroImgUser = styled.img `
    width: 500px;
`

