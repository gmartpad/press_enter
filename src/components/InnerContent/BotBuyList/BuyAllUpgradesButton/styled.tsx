import { Tooltip } from "react-tooltip"
import { styled } from "styled-components"

const UpgradeBuyAllButton = styled.button`
  display: flex;
  margin: 6px auto;
  max-width: 200px;
  background-color: transparent;
  cursor: pointer;
  border-width: thick;

  & p {
    color: #ccc;
    margin: 0px;
    font-size: 1rem;
  }

  &:hover p {
    color: #fff;
  }
`

const UpgradeBuyAllAnchor = styled.a`
    padding: 6px;
`

const UpgradeBuyAllTooltip = styled(Tooltip)`
    z-index: 2;
    backgroundColor: #000;
    color: #fff;
    max-width: 300px;
`

export {
    UpgradeBuyAllButton,
    UpgradeBuyAllAnchor,
    UpgradeBuyAllTooltip
}