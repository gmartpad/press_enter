import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
`

const SkeletonInfoImgDiv = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 8px;
  backgroundColor: transparent;
  background-image: linear-gradient(90deg, #e0e0e0 0px, #f0f0f0 40px, #e0e0e0 80px);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;

  @media (prefers-reduced-motion: reduce) {
    animation: none; /* Disable animation if user prefers reduced motion */
    background-image: none; /* Remove animated gradient, rely on backgroundColor */
  }
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
