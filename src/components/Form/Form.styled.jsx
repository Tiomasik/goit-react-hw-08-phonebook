import styled from 'styled-components';
import { Form } from 'formik';

export const StyleForm = styled(Form) `
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 20px 0;
    background-color: #f0f0f7;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 0, 0, 0.3) inset;

    @media screen and (min-width: 480px) {
        width: 440px;
    }
    input{
        width: 80%;
        padding: 3px;
        margin-bottom:20px;
        font-size: 20px;
        border-radius: 5px;
        border: 2px solid #716e6e;
    }

    button{
        width: 100px;
        padding: 5px 0;
        cursor: pointer;
        border: 2px solid #716e6e;
        background-color: transparent;
        border-radius: 5px;

        :hover, :focus {
            background-color: #716e6e;
            color: white;
        }
    }

    div {
        color: red;
        margin-bottom: 20px;
        width: 360px;
        text-align: center;
    }
`
        
     