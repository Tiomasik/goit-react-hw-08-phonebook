import styled from 'styled-components';

export const List = styled.ul `
    width: 100%;
    display:flex;
    flex-direction:column;
    gap:10px;

    @media screen and (min-width: 768px) {
        width: 728px;
    }
`

export const Item = styled.li `
    width: 100%;
    padding:10px 16px;
    background-color: #f0f0f7;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 0, 0, 0.3) inset;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    button{
        padding: 5px;
        border: 1px solid tomato;
        background-color: transparent;
        border-radius: 5px;
        cursor: pointer;

        :hover, :focus {
            background-color: tomato;
            color: white;
        }
    }

    p {
        font-weight: 500;
    }
`
export const Info = styled.p `
    justify-content: center;
    color: tomato;
    font-size: 20px;
    font-weight: 400;
    display: flex;
    gap: 5px;
    
`

export const Filter = styled.span `
    font-weight: 700;
`