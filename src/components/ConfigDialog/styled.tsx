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

const ConfigResetButton = styled.button`
  cursor: pointer;
  background: #000;
  border-width: thick;
  padding: 10px;
`

const ConfigResetButtonH2 = styled.h2`
  margin: 0;
`

const SaveFileButton = styled.button`
  cursor: pointer;
  background: #000;
  border-width: thick;
  padding: 10px;
  width: 100%;
`

const SaveFileButtonH2 = styled.h2`
  margin: 0;
`

export { ConfigDialog, ConfigRow, ConfigResetButton, ConfigResetButtonH2, SaveFileButton, SaveFileButtonH2 }
