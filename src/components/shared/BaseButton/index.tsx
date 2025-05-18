import styled from "styled-components"

const BaseButton = styled.button`
  cursor: pointer;
  background: #000;
  color: #fff;
  text-shadow: -2px 2px #555;
  box-sizing: border-box;

  border-top-color: #fff;
  border-left-color: #fff;
  border-right-color: #fefefe;
  border-bottom-color: #fefefe;
  border-width: 5px;

  &:focus-visible {
    outline: 3px solid #ffd700;
    outline-offset: 2px;
  }

  &:active {
    text-shadow: -1px 1px #444;
    background: #111;
  }

  &:disabled {
    background: #222;
    cursor: not-allowed;
  }
`

export default BaseButton