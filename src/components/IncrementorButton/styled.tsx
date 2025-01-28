import { styled } from 'styled-components'

const IncrementorButton = styled.button<{ $affordable: boolean }>`
  display: flex;
  flex-direction: row;
  width: -webkit-fill-available;
  padding: 10px;
  position: relative;
  opacity: ${props => (props.$affordable ? '1' : '0.6 !important')};
  gap: 10px;
  // border: none;
  // box-shadow: 2px 0 0 0 #fff, 4px 0 0 0 #fff,  
  //             0 2px 0 0 #fff, 0 4px 0 0 #fff, 
  //             -2px 0 0 0 #fff, -4px 0 0 0 #fff, 
  //             0 -2px 0 0 #fff, 0 -4px 0 0 #fff,  
  //             2px 2px 0 0 #fff, -2px -2px 0 0 #fff, 
  //             2px -2px 0 0 #fff, -2px 2px 0 0 #fff;
  max-width: 288px;
  margin: 4px 6px;

  // &:hover {
  //   filter: brightness(150%);
  // }
`

export { IncrementorButton }
