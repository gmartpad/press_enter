import BaseButton from '@components/shared/BaseButton'
import styled from 'styled-components'

const VisuallyHiddenLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

const SaveInput = styled.textarea`
  width: 80%;
  min-height: 200px;
  padding: 8px;
  background: #1a1a1a;
  border: 1px solid #333;
  color: #fff;
  border-radius: 4px;
  font-family: monospace;
  resize: vertical;
  margin-bottom: 16px;
  box-sizing: border-box;

  &:focus-visible {
    outline: 2px solid #FFD700;
    outline-offset: 1px;
    border-color: #FFD700;
  }
`

const ImportButton = styled(BaseButton)`
  padding: 10px;
  width: 100%;
  margin-top: 8px;
`

const ImportButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 80%;
`

const ErrorMessage = styled.div`
  color: #ff4444;
  font-size: 14px;
  margin-top: 4px;
  width: 80%;
  text-align: center;
`

const InvisibleFileUploadInput = styled.input`
  display: none;
`

export {
    VisuallyHiddenLabel,
    SaveInput, 
    ImportButton, 
    ButtonContainer, 
    ErrorMessage,
    ImportButtonContainer,
    InvisibleFileUploadInput
}