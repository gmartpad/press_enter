import { styled } from "styled-components"

const TabButton = styled.button.attrs<{ active: boolean }>(
    props => ({
        style: {
            color: props.active ? '#fff' : '#bbb'
        }
    })
)<{ active: boolean }>`
    flex: 1;
    padding: 2px 4px 6px 4px;
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-width: thick;
    cursor: pointer;
    max-width: calc((100% - 20px)/3);
    word-break: break-word;

    &:hover {
        color: #fff;
    }
`

const TabButtonText = styled.h2`
    margin: 0;
    font-size: .78rem;
    text-shadow: -2px 2px #555;
`

export { TabButton, TabButtonText }