import calculateMobileItemInfoPosition from '@utils/calculateMobileItemInfoPosition'
import styled from 'styled-components'

const MainItemInfo = styled.div`
  display: flex;
  flex-direction: row;

`

const ItemName = styled.p`
  margin: 0px;
`

const ItemPriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-left: auto;
`

const ItemDescription = styled.div`
  word-wrap: break-word;
  overflow-wrap: break-word;
`

interface ItemInfoDialogProps {
  $windowInnerHeight: number
  $windowInnerWidth: number
  $dialogHeight: number
  $mouseX: number
  $mouseY: number
}

const ItemInfoDialog = styled.dialog.attrs<ItemInfoDialogProps>(
    props => ({
        style: {
            ...calculateMobileItemInfoPosition({
                innerHeight: props.$windowInnerHeight,
                innerWidth: props.$windowInnerWidth,
                mouseX: props.$mouseX,
                mouseY: props.$mouseY,
                dialogHeight: props.$dialogHeight
            })
        }
    })
)`
  width: 366px;
  max-width: 366px;
  position: absolute;
  height: auto;
  background-color: #000;
  box-sizing: border-box;
  color: #fff;
  border: none;
  box-shadow: 2px 0 0 0 #fff, 4px 0 0 0 #fff,  
              0 2px 0 0 #fff, 0 4px 0 0 #fff, 
              -2px 0 0 0 #fff, -4px 0 0 0 #fff, 
              0 -2px 0 0 #fff, 0 -4px 0 0 #fff,  
              2px 2px 0 0 #fff, -2px -2px 0 0 #fff, 
              2px -2px 0 0 #fff, -2px 2px 0 0 #fff;
  word-break: break-word;
  word-wrap: break-word;
  z-index: 1;
  text-shadow: -2px 2px #555;
`

const ItemInfoParagraph = styled.p`
  margin: 0; 
  font-size: 0.6875rem;
`

const MoreInfoUL = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0em 0 1em 1em;
  margin: 1em 0px 0px 0px;
  gap: 4px;
`

const MoreInfoLI = styled.li`
  background: #ddd;
  border-radius: 4px;
  color: #000;
  padding: 4px;
  font-size: 0.75rem;
  text-shadow: -2px 2px #bbb;

  &::marker {
    color: #fff;
  }
`

const ItemTitleInfo = styled.div`
  padding-left: 10px;
  width: 45%;
`

const ItemInfoLabel = styled.div`
  margin-top: 2px;
  background-color: #fff;
  border-radius: 4px;
  padding: 2px 5px;
  width: fit-content;
`

const ItemInfoLabelParagraph = styled.p`
  font-size: 0.6875rem; 
  color: #000; 
  margin: 0px;
  text-shadow: -2px 2px #bbb;
`

const QuestionMarkParagraph = styled.p`
  margin: 0;
`

export { 
    MainItemInfo, 
    ItemName, 
    ItemPriceInfo, 
    ItemDescription, 
    ItemInfoDialog,
    ItemInfoParagraph,
    MoreInfoUL,
    MoreInfoLI,
    ItemTitleInfo,
    ItemInfoLabel,
    ItemInfoLabelParagraph,
    QuestionMarkParagraph
}
