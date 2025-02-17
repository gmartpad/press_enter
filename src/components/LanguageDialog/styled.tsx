import { styled } from "styled-components"

const LanguageDialogBackground = styled.div`
    z-index: 1001;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    width: 100vw;
    height: 100vh;
`

const LanguageList = styled.div<{ $languageListMaxHeight: number }>`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    overflow-y: auto;
    max-height: ${props => props.$languageListMaxHeight}px;
    padding-bottom: 1em;
    box-sizing: border-box;
`

const ChangeLanguageButton = styled.button<{ $active: boolean }>`
    cursor: pointer;
    background-color: ${props => props.$active ? '#fff' : '#000'};
    color:${props => props.$active ? '#000' : '#fff'};
    border-width: thick;
    transition: all .2s ease-in-out;
    flex: 1 0 45%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-shadow: -2px 2px ${props => props.$active ? '#bbb' : '#555'};

    &:hover {
        background-color: #fff;
        color: #000;
        text-shadow: -2px 2px #bbb;
    }
`

const LanguageDialogTitleDiv = styled.div`
    text-align: center;
    text-shadow: -2px 2px #555;
`

export {
    LanguageDialogBackground,
    LanguageList,
    ChangeLanguageButton,
    LanguageDialogTitleDiv
}