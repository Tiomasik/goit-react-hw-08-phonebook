import styled from 'styled-components';
import { BsEmojiWink } from "react-icons/bs";

export const User = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 480px) {
        flex-direction: row;
    }

    p {
        font-size: 14px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 5px;

        @media screen and (max-width: 479px) {
            min-width: 100px;
        }

        @media screen and (min-width: 768px) {
            font-size: 20px;
            gap: 10px;
        }
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
    color: tomato;
    width: 20px;
    height: 20px;

    @media screen and (min-width: 768px) {
        width: 30px;
        height: 30px;
    }
`