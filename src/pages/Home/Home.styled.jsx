import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Herro = styled.main `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background-color: #f0f0f7;
`
export const Title = styled.h1 `
    font-size: 62px;
    font-weight: 800;
    margin-bottom: 20px;
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

