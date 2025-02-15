import styled from 'styled-components'

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
`

const CopyButton = styled.button`
  padding: 10px;
  cursor: pointer;
  background: black;
  border-width: thick;
  color: white;
  width: 80%;
  margin-top: 8px;
  box-sizing: border-box;
  text-shadow: -2px 2px #555;
`

export { SaveInput, CopyButton }