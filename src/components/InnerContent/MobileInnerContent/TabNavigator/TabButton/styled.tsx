import { styled } from "styled-components"

const TabButton = styled.button.attrs<{ active: boolean }>(
    props => ({
        style: {
            color: props.active ? '#fff' : '#bbb'
        }
    })
)<{ active: boolean }>`
    flex: 1;
    padding: 10px;
    background: none;
    
    border-width: thick;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        color: #fff;
    }
`

const TabButtonText = styled.h2`
    margin: 0;
    font-size: 1rem;
    text-shadow: -2px 2px #555;
`

export { TabButton, TabButtonText }