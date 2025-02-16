import { AiOutlineEnter } from 'react-icons/ai'
import styled, { keyframes } from 'styled-components'
import NAVBAR_HEIGHT from '@utils/NavbarHeight'
interface AsideProps { 
  $displayValue: string
  $windowInnerWidth: number
}

const Aside = styled.aside.attrs<AsideProps>(
    props => ({
        style: {
            display: `${props.$displayValue}`,
            flexDirection: props.$windowInnerWidth <= 1024 && props.$windowInnerWidth > 425 ? 'row' :'column-reverse',
            width: props.$windowInnerWidth > 1024 ? '30%' : '100%',
            height: props.$windowInnerWidth > 1024 ? '100%' : '-webkit-fill-available',
            paddingBottom: '0em',
            paddingTop: '0em'
        }
    })
)<AsideProps>`
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  overflow-y: auto;
  gap: 30px;
`

interface MobileSpacerProps {
  $top: boolean
  $windowInnerWidth: number
  $windowInnerHeight: number
}

const MobileSpacer = styled.div.attrs<MobileSpacerProps>(
    props => ({
        style: {
            paddingTop: props.$top ? '0em' : '0px',
            paddingBottom: !props.$top ? '0em' : '0px',
            display: props.$windowInnerWidth <= 1024 && props.$windowInnerWidth > 425 ? 'none' : 'flex'
        }
    })
)<MobileSpacerProps>`
  height: 0px;
  width: 100%;
`

interface EnterKeyButtonProps {
  $windowInnerWidth: number
}

const EnterKeyButton = styled.button.attrs<EnterKeyButtonProps>(
    props => ({
        style: {
            margin: props.$windowInnerWidth <= 1024 && props.$windowInnerWidth > 425 ? '0px' : '15px',
        }
    })
)<EnterKeyButtonProps>`
  position: relative;
  width: 76px;
  height: 90px; /* Taller to accommodate the L shape */
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  justify-content: flex-end;

  /* Create the main button shape using pseudo-elements */
  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #ccc;
    border: 2px solid #888;
    transition: all 0.1s ease-in-out;
    z-index: 0;
  }

  /* Vertical part of the L */
  &::before {
    right: 0;
    top: 0;
    width: 50px;
    height: 80px;
    border-radius: 0px 8px 8px 8px;
    box-shadow: 0px 5px 0px #555;
  }

  /* Horizontal part of the L */
  &::after {
    right: 52px;
    top: 0;
    width: 20px;
    height: 40px;
    border-radius: 8px 0px 0px 8px;
    box-shadow: 0px 5px 0px #555;
    border-right: none;
  }

  /* Text styling */
  span {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1rem;
    font-weight: bold;
    font-family: Arial, sans-serif;
    color: #444;
    z-index: 1;
  }

  &:active > svg {
    top: 18px;
  }

  /* Active state animations */
  &:active::before,
  &:active::after {
    box-shadow: none;
    transform: translateY(4px);
  }

  /* Optional hover effect */
  &:hover::before,
  &:hover::after {
    background-color: #ddd;
  }
`

const floatUp = keyframes`
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(-30px);
  }
`

interface FloatTextProps { $textX: number; $textY: number }

styled.dialog.attrs<{ $dialogTop: number }>(
    props => ({
        style: {
            top: `${props.$dialogTop}px`,
            marginTop: `${props.$dialogTop >= NAVBAR_HEIGHT ? '-4px' : '0px'}`
        }
    })
)
// Define the styled component for the floating text
const FloatText = styled.p.attrs<{ $textX: number, $textY: number }>(
    props => ({
        style: {
            left: `${props.$textX}px`,
            top: `${props.$textY}px`,
        }
    })
)<FloatTextProps>`
  position: absolute;
  color: rgb(0, 255, 0);
  font-size: 1.75rem;
  animation: ${floatUp} 2s ease-out forwards;
  pointer-events: none; /* Prevent interaction with floating text */
  z-index: 3;
  text-shadow: -2px 2px #555;
  text-align: center;
`

const EnterIcon = styled(AiOutlineEnter)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #000;
  font-size: 2rem;
  position: relative;
  top: 12px;
  right: 21px;
  z-index: 2;
  transform: rotateX(180deg);
  transition: all .1s ease-in-out;
`

const BitsH3 = styled.h3`
  margin: 0px;
  text-shadow: -2px 2px #555;
  width: fit-content;
  max-width: 360px;
  text-align: center;
  font-size: 1.17rem;
`

interface BitsInfoProps {
  $windowInnerWidth: number
}

const BitsInfo = styled.div.attrs<BitsInfoProps>(
    props => ({
        style: {
            margin: props.$windowInnerWidth <= 1024 && props.$windowInnerWidth > 425 ? '34px 0px 30px 0px' : '34px 30px 30px 30px',
            width: props.$windowInnerWidth <= 1024 && props.$windowInnerWidth > 425 ? '100%' : '-webkit-fill-available',
            maxWidth: props.$windowInnerWidth <= 1024 && props.$windowInnerWidth > 425 ? '64%' : 'inherit',
        }
    })
)<BitsInfoProps>`
  margin: 34px 30px 30px 30px;
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  border: none;
  box-shadow: 2px 0 0 0 #fff, 4px 0 0 0 #fff,  
              0 2px 0 0 #fff, 0 4px 0 0 #fff, 
              -2px 0 0 0 #fff, -4px 0 0 0 #fff, 
              0 -2px 0 0 #fff, 0 -4px 0 0 #fff,  
              2px 2px 0 0 #fff, -2px -2px 0 0 #fff, 
              2px -2px 0 0 #fff, -2px 2px 0 0 #fff;
`

const BitsSpan = styled.span`
  display: flex; 
  align-items: center; 
  flex-direction: column; 
  font-size: 1.17em;

  border-top: 1px dashed #fff;
  border-bottom: 1px dashed #fff;
  padding: 10px 0;
  margin: 10px 0;
  min-width: 100%;
`

export { Aside, MobileSpacer, EnterKeyButton, FloatText, EnterIcon, BitsH3, BitsInfo, BitsSpan }
