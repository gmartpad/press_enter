import { styled } from 'styled-components'

const ConfigDialog = styled.dialog`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  inset: 0px;
  z-index: 1000;
  background-color: #000;
  border-color: #fff;
  color: #fff;
`

const ConfigRow = styled.div`
  display: flex;
  flex-direction: column;
`

export { ConfigDialog, ConfigRow }
