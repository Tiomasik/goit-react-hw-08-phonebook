import styled from 'styled-components';

export const Main = styled.main `
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f0f0f7;

    @media screen and (min-width: 480px) {
        flex-direction: row;
    }

    @media screen and (min-width: 768px) {
        gap: 100px;
    }
`

export const FormLoginImg = styled.img `
    /* margin-left: auto;
    margin-right: auto; */
`