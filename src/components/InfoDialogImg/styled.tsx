import styled from 'styled-components'

const SkeletonInfoImgDiv = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 8px;
  backgroundColor: transparent;
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
`

const InfoImgDiv = styled.img<{
  $isInfoDialogImgLoading: boolean
  $hiddenIncrementor: boolean
}>`
  height: 48px;
  max-height: 48px;
  width: 48px;
  max-width: 48px;
  border-radius: 8px;
  display: ${props => (props.$isInfoDialogImgLoading ? 'none' : 'block')};
  margin: auto 0px;
  background-color: ${props => (props.$hiddenIncrementor ? '#fff' : 'inherit')};
`

export { SkeletonInfoImgDiv, InfoImgDiv }
