import { styled } from "styled-components"

const StatSpan = styled.span`
    display: flex; 
    align-items: center; 
    gap: 10px;

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 0;
        margin: 20px 0;
        padding: 5px 0;
        border-top: 1px dashed #fff;
        border-bottom: 1px dashed #fff;
    }
`

const StatLabelH3 = styled.h3`
    margin: 0px;
    text-shadow: -2px 2px #555;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
`

const StatValueH3 = styled.h3`
    color: #0f0; 
    margin: 0px;
    text-shadow: -2px 2px #555;
`

export {
    StatSpan,
    StatLabelH3,
    StatValueH3
}