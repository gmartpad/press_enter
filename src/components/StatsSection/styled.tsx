import { styled } from "styled-components"
import NAVBAR_HEIGHT from "@utils/NavbarHeight"

interface StatsSectionContainerProps {
    $windowInnerWidth: number
    $tabHeight: number
}

const StatsSectionContainer = styled.section.attrs<StatsSectionContainerProps>(
    props => ({
        style: {
            padding: `0px 10px ${props.$windowInnerWidth > 1024 ? '10px' : `calc(10px + ${props.$tabHeight}px)`} 10px`
        }
    })
)<StatsSectionContainerProps>`
    position: absolute;
    top: ${NAVBAR_HEIGHT}px;
    display: flex;
    flex-direction: column;
    background-color: #000;
    width: 100%;
    height: calc(100% - ${NAVBAR_HEIGHT}px);
    overflow-y: auto;
    overflow-x: hidden;
    border-left: 1px dashed #fff;
    border-right: 1px dashed #fff;
    box-sizing: border-box;
    transform: translateZ(0);
    z-index: 1;
    color: #fff;
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

const TabButton = styled.button.attrs<{ active: boolean }>(
    props => ({
        style: {
            color: props.active ? '#fff' : '#bbb'
        }
    })
)<{ active: boolean }>`
    background-color: #000;
    width: calc(50% - 10px);
    padding: 10px;
    font-size: 1rem;
    text-shadow: -2px 2px #555;
    cursor: pointer;
    border-width: thick;
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