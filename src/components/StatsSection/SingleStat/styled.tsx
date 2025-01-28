import { styled } from "styled-components"

const StatSpan = styled.span`
   display: flex; 
   align-items: center; 
   gap: 10px;
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