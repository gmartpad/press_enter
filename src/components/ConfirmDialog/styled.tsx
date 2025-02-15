import { styled } from 'styled-components'

const CentralizeDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-shadow: -2px 2px #555;
  text-align: center;
`

const ConfirmH2 = styled.h2`
  text-align: center; 
  margin: 0 0 10px 0;
  color: #fff;
`

const ConfirmH3 = styled.h3`
  text-align: center; 
  margin: 0 0 30px 0;
  color: #fff;
`

const ConfirmButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`

const DeclineButton = styled.button`
  padding: 10px;
  cursor: pointer;
  background: black;
  border-width: thick;
`

const DeclineButtonH2 = styled.h2`
  margin: 0;
  text-shadow: -2px 2px #555;
  color: #fff;
`

export { 
    CentralizeDiv, 
    ConfirmH2, 
    ConfirmH3, 
    ConfirmButtonsContainer,
    DeclineButton,
    DeclineButtonH2
}
