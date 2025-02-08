import NAVBAR_HEIGHT from '@utils/NavbarHeight'
import { FaGear, FaGlobe } from 'react-icons/fa6'
import { IoIosStats } from "react-icons/io"

import styled from 'styled-components'

interface NavProps {
  $windowInnerWidth: number
}

const Nav = styled.nav.attrs<NavProps>(
    props => ({
        style: {
            position: props.$windowInnerWidth > 1024 ? 'unset' : 'fixed',
            top: props.$windowInnerWidth > 1024 ? 'unset' : 0,
            zIndex: props.$windowInnerWidth > 1024 ? 'unset' : 1,
            width: props.$windowInnerWidth > 1024 ? 'auto' : '100vw'
        }
    })
)`
  height: ${NAVBAR_HEIGHT}px;
  background-color: #000;
  border-left: 1px dashed #fff;
  border-right: 1px dashed #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  box-sizing: border-box;
`

const LeftNavButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const SquareNavButton = styled.button`
  background-color: #000;
  padding: 4px;
  border-width: thick;
  width: fit-content;
  height: fit-content;
  display: flex;
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover {
    background-color: #333;
  }
`

const ChangeLanguageButton = styled.button`
  cursor: pointer;
  border-width: thick;
  background-color: #000;
  height: fit-content;
  padding: 5px 7px;
  transition: all .2s ease-in-out;
  margin: 3px 0px;
  display: flex;
  flex-direction: row;
  gap: 6px;

  &:hover {
    background-color: #333;
  }

  & > p {
    margin: 0px;
    color: #fff;
    font-size: 12px;
  }
`

const Gear = styled(FaGear)`
  color: #fff;
  background-color: transparent;
`

const Globe = styled(FaGlobe)`
  color: #fff;
  background-color: transparent;
`

const Stats = styled(IoIosStats)`
  color: #fff;
  background-color: transparent;
`

export { Nav, SquareNavButton, ChangeLanguageButton, Gear, Globe, Stats, LeftNavButtons }
