import styled from 'styled-components';

export const Main = styled.main `
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    background-color: #f0f0f7;

    @media screen and (min-width: 1024px) {
        flex-direction: row;
    }
`

export const FormRegisterImg = styled.img `
    /* margin-left: auto;
    margin-right: auto; */

`