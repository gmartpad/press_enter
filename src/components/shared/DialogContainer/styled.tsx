import { styled } from "styled-components"

const Dialog = styled.dialog`
    z-index: 1002;
    position: absolute;
    inset: 0;
    max-width: 500px;
    width: calc(100% - 80px);
    height: 500px;
    background-color: #000;
    color: #fff;
`

export {
    Dialog
}