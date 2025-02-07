import styled from 'styled-components'

interface SectionProps {
  $windowInnerWidth: number
}

const Section = styled.section.attrs<SectionProps>(
    props => ({
        style: {
            width: props.$windowInnerWidth > 1024 ? 'calc(100vw - 30vw - 315px)' : '100%'
        }
    })
)<SectionProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: transparent;
  position: relative;
`

export { Section }
