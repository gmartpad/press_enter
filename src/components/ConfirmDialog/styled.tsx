import { styled } from 'styled-components'

const CentralizeDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ConfirmH2 = styled.h2`
  text-align: center; 
  margin: 0 0 10px 0;
`

const ConfirmH3 = styled.h3`
  text-align: center; 
  margin: 0 0 30px 0;
`

const ConfirmButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`

const DeclineButton = styled.button`
  padding: 10px;
  cursor: pointer;
`

export { 
    CentralizeDiv, 
    ConfirmH2, 
    ConfirmH3, 
    ConfirmButtonsContainer,
    DeclineButton
}
