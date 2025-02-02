import styled from 'styled-components'

const BotBuyImg = styled.img<{
  $hiddenIncrementor: boolean
}>`
  max-height: 64px;
  max-width: 64px;
  min-height: 64px;
  min-width: 64px;
  border-radius: 8px;
  align-self: center;
  background-color: ${props => (props.$hiddenIncrementor ? '#fff' : 'inherit')}
`

export { BotBuyImg }
