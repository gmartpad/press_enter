import styled from "styled-components"

export const StyledCanvas = styled.canvas<{ $background: string }>`
    height: 128px;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${({ $background }) => $background});
`