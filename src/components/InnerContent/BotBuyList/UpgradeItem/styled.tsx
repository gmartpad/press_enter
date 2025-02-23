import { keyframes, styled } from "styled-components"

const rotateGradient = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const OuterUpgradeItem = styled.button<{
    $purchasable: boolean
}>`
    height: 60px;
    width: 60px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border: none;
    cursor: pointer !important;
    transition: all .2s ease-in-out;

    &:hover {
        top: -1px;
    }

    &::before {
        content: "";
        width: 90px;
        height: 90px;
        position: absolute;
        background: linear-gradient(0deg, #000, ${props => props.$purchasable ? '#0f0' : '#f00'});
        animation: ${rotateGradient} 10s linear infinite;
        transform-origin: center;
        filter: brightness(0.6);
        transition: all .2s ease-in-out;
    }

    &:hover::before {
        filter: brightness(1);
    }
`

const InnerUpgradeItem = styled.div`
    height: 48px;
    width: 48px;
    background-color: #000; 
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 6px;
    cursor: pointer !important;
`

const UpgradeItemImg = styled.img`
    height: 32px;
    width: 32px;
`

export { 
    OuterUpgradeItem, 
    InnerUpgradeItem,
    UpgradeItemImg
}