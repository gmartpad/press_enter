import { styled } from "styled-components"

const NotValidContainer = styled.div<{ $flexDirection: 'row' | 'column' }>`
    display: flex;
    flex-direction: ${props => props.$flexDirection};
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export {
    NotValidContainer
}