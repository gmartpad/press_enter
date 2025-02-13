import { styled } from "styled-components"

interface DialogCloseButtonProps {
    $orientation: 'left' | 'right'
}

const DialogCloseButton = styled.button.attrs<DialogCloseButtonProps>(
    props => ({
        style: {
            right: props.$orientation === 'left' ? 'auto' : '-15px',
            left: props.$orientation === 'right' ? 'auto' : '-15px'
        }
    })
)<DialogCloseButtonProps>`
    cursor: pointer;
    position: absolute;
    top: -15px;
    width: 30px;
    height: 30px;
    border-width: thick;
    background-color: #000;
    color: #fff;
    transition: all .2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DialogCloseButtonParagraph = styled.p.attrs<DialogCloseButtonProps>(
    props => ({
        style: {
            margin: props.$orientation === 'right' ? '2px 0px 0px 2px' : '0px' 
        }
    })
)<DialogCloseButtonProps>`
    font-size: 1.125rem;
`

export {
    DialogCloseButton,
    DialogCloseButtonParagraph
}