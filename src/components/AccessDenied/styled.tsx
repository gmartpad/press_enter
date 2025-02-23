import { styled } from "styled-components"

const NotValidContainer = styled.div<{ $flexDirection: 'row' | 'column' }>`
    display: flex;
    flex-direction: ${props => props.$flexDirection};
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    color: #fff;
    text-shadow: -2px 2px #555;
    padding: 16px;
    box-sizing: border-box;
    text-align: center;
`

const StyledReloadButton = styled.button`
    cursor: pointer;
    background-color: #000;
    border-width: thick;
    padding: 4px 8px;
`

export {
    NotValidContainer,
    StyledReloadButton
}