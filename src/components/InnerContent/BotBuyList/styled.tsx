import styled from 'styled-components'

type WindowInnerWidthProps = {
  $windowInnerWidth: number
}

const Aside = styled.aside.attrs<WindowInnerWidthProps>(
    props => ({
        style: {
            width: props.$windowInnerWidth > 1024 ? '315px' : '100%'
        }
    })
)<WindowInnerWidthProps>`
  flex-direction: column;
  height: 100%;
  background-color: #000;
  overflow-y: auto;
  overflow-x: hidden;
  color: #fff;
`

const BotBulkModeButton = styled.button<{ $bulkType: 'buy' | 'sell'; $active: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: row;
  left: 0px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  top: ${props => (props.$bulkType === 'buy' ? '0px' : 'auto')};
  bottom: ${props => (props.$bulkType === 'sell' ? '1px' : 'auto')};
  text-shadow: -2px 2px #555;

  & p {
    color: ${props => (props.$active ? '#fff' : '#bbb')};
    margin: 0px;
    font-size: 0.75rem;
  }

  &:hover p {
    color: #fff;
  }
`

const BotBulkAmountButton = styled.button<{ $active: boolean }>`
  position: relative;
  width: 50px;
  padding: 9px 0px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-shadow: -2px 2px #555;

  & p {
    color: ${props => (props.$active ? '#fff' : '#bbb')};
    margin: 0px;
    font-size: 0.75rem;
  }

  &:hover p {
    color: #fff;
  }
`

const BotBuyInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

const IncrementorAmount = styled.p`
  font-size: 2.5rem;
  position: absolute;
  right: 10px;
  margin: 0px;
  color: #fff;
  opacity: 0.6;
`

const IncrementorName = styled.h2`
  font-size: 1.5rem;
  margin: 0px;
  color: #fff;
`

const BuySellContainer = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  padding: 0px;
  padding-left: 60px;
  height: 40px;
  overflow: hidden;
  background-color: black;
`

const BotBuyListGrid = styled.div.attrs<WindowInnerWidthProps>(
    props => ({
        style: {
            display: props.$windowInnerWidth > 1024 ? 'grid' : 'flex',
            flexWrap: props.$windowInnerWidth > 1024 ? 'unset' : 'wrap',
            paddingBottom: props.$windowInnerWidth > 1024 ? '0em' : '1.5em'
        }
    })
)`
  justify-content: center;
  height: fit-content;
  display: grid;
  gap: 2px;
`

const BotUpgradeTitle = styled.h3`
  margin: 0;
  text-align: center;
  padding: 12px 0 3px 0;
  text-shadow: -2px 2px #555;
`

const BotUpgradeList = styled.div.attrs<WindowInnerWidthProps>(
    props => ({
        style: {
            justifyContent: props.$windowInnerWidth > 1024 ? 'unset' : 'center',
            maxHeight: props.$windowInnerWidth > 1024 ? '60px' : 'fit-content'
        }
    })
)<WindowInnerWidthProps>`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  box-sizing: border-box;

  &:hover {
    max-height: fit-content !important;
  }
`

const BulkAmountIndicatorParagraph = styled.p`
  font-size: 1.5rem !important;
  margin: 0px !important;
`

const BulkModeIndicatorParagraph = styled.p`
  margin-left: 0.25rem !important;
`

const NoUpgradesH5 = styled.h5`
  margin: 10px auto;
  padding: 0 5px;
  text-align: center;
  text-shadow: -2px 2px #555;
`

const QuestionMarkParagraph = styled.p`
  margin: 0;
`

export {
    Aside,
    BotBulkModeButton,
    BotBulkAmountButton,
    BotBuyInfo,
    IncrementorAmount,
    IncrementorName,
    BuySellContainer,
    BotBuyListGrid,
    BotUpgradeList,
    BulkAmountIndicatorParagraph,
    BulkModeIndicatorParagraph,
    NoUpgradesH5,
    BotUpgradeTitle,
    QuestionMarkParagraph
}