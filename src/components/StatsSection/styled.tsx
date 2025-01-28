import { styled } from "styled-components"

const StatsSectionContainer = styled.section`
    position: absolute;
    top: 29px;
    display: flex;
    flex-direction: column;
    background-color: #000;
    width: 100%;
    height: calc(100% - 29px);
    overflow-y: auto;
    overflow-x: hidden;
    border-left: 1px solid #fff;
    border-left-style: dashed;
    border-right: 1px solid #fff;
    border-right-style: dashed;
    padding: 0px 10px 10px 10px;
    box-sizing: border-box;
    transform: translateZ(0);
`

const TabButtonContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    gap: 20px;
    border-bottom: 1px solid #fff;
    border-bottom-style: dashed;
    padding: 16px 0px 20px 0px;
    background-color: #000;
    width: calc(100% - 20px);
`

const TabButton = styled.button`
    background-color: #000;
    width: calc(50% - 10px);
    padding: 10px;
    font-size: 1.5rem;
    text-shadow: -2px 2px #555;
    cursor: pointer;
`

const GenericStatsContainer = styled.div`
    border-bottom: 1px solid #fff;
    border-bottom-style: dashed;
    background-color: #000;
    box-sizing: border-box;
    padding: 16px 10px 20px 10px;
    margin: 0px 10px;
    word-break: break-word;
`

const NameH2 = styled.h2`
    margin: 0px; 
    text-shadow: -2px 2px #555;
`

const DescriptionH3 = styled.h3`
    text-shadow: -2px 2px #555;
`

export {
    StatsSectionContainer,
    TabButtonContainer,
    TabButton,
    GenericStatsContainer,
    NameH2,
    DescriptionH3
}