import { styled } from "styled-components"

const DialogCloseButton = styled.button`
    cursor: pointer;
    position: absolute;
    right: -15px;
    top: -15px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: 2px solid #fff;
    background-color: #000;
    color: #fff;
    transition: all .2s ease-in-out;

    &:hover {
        border: 2px solid #000;
        background-color: #fff;
        color: #000;
    }
`

const DialogCloseButtonParagraph = styled.p`
    margin: 2px 0px 0px 2px; 
    font-size: 1.125rem;
`

export {
    DialogCloseButton,
    DialogCloseButtonParagraph
}