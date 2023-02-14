import styled from 'styled-components';
import { BsFillEmojiSmileFill, BsFillTelephoneFill } from "react-icons/bs";
import { ImPencil2, ImCross } from "react-icons/im";

export const Item = styled.p `
    display: flex;
    align-items: center;
    gap: 10px;

    span {
        font-size: 16px;
        font-weight:700;
    }
    
`
export const IconSmile = styled(BsFillEmojiSmileFill) `
    color: tomato;
`

export const IconPhone = styled(BsFillTelephoneFill) `
    color: tomato;
`

export const Button = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    gap:10px;

    @media screen and (min-width: 480px) {
        flex-direction: row;
        gap:10px;
    }

    button {
        display: flex;
        align-items: center;
        gap: 5px;
    }
`

export const IconChange = styled(ImPencil2) `
    color: green;
`

export const IconDelete = styled(ImCross) `
    color: red;
`