import styled from 'styled-components';
import { BsEmojiWink } from "react-icons/bs";

export const User = styled.div `
    display: flex;
    gap: 15px;
    align-items: center;

    p {
        font-size: 20px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    button {
        padding: 8px 12px;
        border-radius: 5px;
        cursor: pointer;
        border: 2px solid #716e6e;
        background-color: transparent;
        color: black;
        font-weight: 500;

        :hover{
            background-color: #716e6e;
            color: #ffffff
        }
    }
`

export const IconSmile = styled(BsEmojiWink) `
    color: #716e6e;
    width: 30px;
    height: 30px;
`