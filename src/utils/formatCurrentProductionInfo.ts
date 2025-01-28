import { type Incrementor } from "@state/defaultAutoIncrementors"
import { type IntlShape } from "react-intl"
import formatLargeNumber from "./formatLargeNumber"

interface FormatCurrentProductionInfoProps {
    currentHoveredBotItem: Incrementor
    incrementorMultiplier: number
    intl: IntlShape
}

function formatCurrentProductionInfo({
    currentHoveredBotItem,
    incrementorMultiplier,
    intl
}: FormatCurrentProductionInfoProps) {
    const baseText = 'botInfoDialog.currentProductionInfo'
    const singularName = intl.formatMessage({ id: `botBuyList.${currentHoveredBotItem.id}.name.singular`, defaultMessage: currentHoveredBotItem.name })
    const qtdBits = formatLargeNumber(Number((currentHoveredBotItem.productionPerUnit * incrementorMultiplier).toFixed(2)), intl)

    return intl.formatMessage({id: baseText}, { singularName, qtdBits })
}

export default formatCurrentProductionInfo