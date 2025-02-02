import styled from 'styled-components'

const Aside = styled.aside`
  width: 315px;
  flex-direction: column;
  height: 100%;
  background-color: #000;
  overflow-y: auto;
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
  height: 32px;
  overflow: hidden;
  background-color: black;
`

const BotBuyListGrid = styled.div`
  height: fit-content;
  display: grid;
  gap: 2px;
`

const BotUpgradeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  // padding-top: 32px;
  max-height: 60px;
  overflow: hidden;

  &:hover {
    max-height: fit-content;
  }
`

const BulkAmountIndicatorParagraph = styled.p`
  font-size: 1.5rem !important;
  margin: 0px !important;
`

const BulkModeIndicatorParagraph = styled.p`
  margin-left: 0.25rem !important;
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
    BulkModeIndicatorParagraph
}
