import { styled } from "styled-components"

const TabContainer = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #000;
    padding: 10px;
    position: fixed;
    z-index: 2;
    bottom: 0;
    width: 100%;
    height: min-content;
    gap: 10px;
    box-sizing: border-box;
    border-top: 1px dashed #fff;
    border-left: 1px dashed #fff;
    border-right: 1px dashed #fff;
`

const TabButtonParagraph = styled.p`
    margin: 0;
`

export { TabContainer, TabButtonParagraph }