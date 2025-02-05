import { styled } from 'styled-components'

const IncrementorButton = styled.button<{ $affordable: boolean, $revealed: boolean }>`
  display: flex;
  flex-direction: row;
  width: -webkit-fill-available;
  padding: 10px;
  position: relative;
  opacity: ${props => (props.$affordable ? '1' : '0.6 !important')};
  filter: ${props => (props.$revealed ? 'inhereit' : 'brightness(0.4) contrast(0.7) blur(2px)')};
  gap: 10px;
  max-width: 288px;
  margin: 4px 6px;
`

export { IncrementorButton }
