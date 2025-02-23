import { keyframes, styled } from "styled-components"

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
`

// Keyframes for the animation
const dotty = keyframes`
    0%   { content: ''; }
    25%  { content: '.'; }
    50%  { content: '..'; }
    75%  { content: '...'; }
    100% { content: ''; }
`

//  component for the loading text
const LoadingText = styled.h1`
  &:after {
    display: inline-block;
    animation: ${dotty} steps(1,end) 1s infinite;
    content: '';
  }
`

export {
    NotValidContainer,
    LoadingText
}