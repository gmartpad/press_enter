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
  text-shadow: -2px 2px #555;
  color: #fff;
`

const ConfigRowButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`

const ConfigResetButton = styled.button`
  cursor: pointer;
  background: #000;
  border-width: thick;
  padding: 10px;
`

const ConfigResetButtonH2 = styled.h2`
  margin: 0;
  text-shadow: -2px 2px #555;
  color: #fff;
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
  text-shadow: -2px 2px #555;
  color: #fff;
`

const VolumeSlider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  width: 100%;
  height: 25px;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    background: #ccc;
    border: 2px solid #888;
    border-radius: 5px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #fff;
    border: 2px solid #888;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -7px;
  }

  &:hover::-webkit-slider-thumb {
    background: #ddd;
  }
`

export { 
    ConfigDialog, 
    ConfigRow, 
    ConfigResetButton, 
    ConfigResetButtonH2, 
    SaveFileButton, 
    SaveFileButtonH2, 
    VolumeSlider,
    ConfigRowButtonContainer
}
