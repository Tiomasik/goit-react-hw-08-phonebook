import styled from 'styled-components';

import { Form } from 'formik';

export const StyleForm = styled(Form) `
    width: 400px;
    display: flex;
    gap:10px;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 20px 0;

    input {
        width: 300px;
        padding: 3px;
        margin-bottom:20px;
        font-size: 20px;
        border: transparent;
        border-bottom: 2px solid #716e6e;
        outline: transparent;
        background-color: #f0f0f7;
    }

    button {
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
`