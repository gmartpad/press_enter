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
`

export {
    NotValidContainer
}