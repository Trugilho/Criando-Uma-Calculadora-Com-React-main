import styled from 'styled-components';

export const InputContainer = styled.div `
    width: 100%;
    height: 75px;
    background-color: #FAFAFA;
    border-radius: 15px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';

    input {
        width: 100%;
        height: 75px;
        background-color: #FFFFFF;
        border: 1px solid black;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 10px;
        font-size: 24px;
        font-family: 'Roboto';
        color: #000000;
    }
`