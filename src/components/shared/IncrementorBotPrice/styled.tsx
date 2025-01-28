import { styled } from 'styled-components'

const IncrementorPrice = styled.h4<{ $affordable: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 4px 0px;
  color: ${props => (props.$affordable ? '#0f0' : '#f00')};
  line-height: 12px;
`

export { IncrementorPrice }
