import { styled } from "styled-components"

const LanguageDialogBackground = styled.div`
    z-index: 1001;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    width: 100vw;
    height: 100vh;
`

const LanguageList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    overflow-y: auto;
    max-height: 400px;
`

const ChangeLanguageButton = styled.button<{ active: boolean }>`
    cursor: pointer;
    background-color: ${props => props.active ? '#fff' : '#000'};
    color:${props => props.active ? '#000' : '#fff'};
    border-width: thick;
    transition: all .2s ease-in-out;
    flex: 1 0 45%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &:hover {
        background-color: #fff;
        color: #000;
    }
`

const LanguageDialogTitleDiv = styled.div`
    text-align: center;
`

export {
    LanguageDialogBackground,
    LanguageList,
    ChangeLanguageButton,
    LanguageDialogTitleDiv
}