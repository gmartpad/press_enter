import styled from "styled-components"

const OuterContentContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
`

const InnerContentContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
`

export {
    OuterContentContainer,
    InnerContentContainer
}