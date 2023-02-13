import styled from 'styled-components';

export const Overlay = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
`

export const ModalForm = styled.div `
    width: 400px;
    height: 200px;
    background-color: #ffffff;
    border-radius: 10px;
`

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 20px 0;
    background-color: #f0f0f7;

    input{
        width: 300px;
        padding: 3px;
        margin-bottom:20px;
        font-size: 20px;
        border-radius: 5px;
        border: 2px solid #716e6e;
    }

    div {
        display: flex;
        align-items: center;
        gap: 30px;
    }
`