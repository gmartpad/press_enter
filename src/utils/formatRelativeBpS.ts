import { type Incrementor } from "@state/defaultAutoIncrementors"
import { type IntlShape } from "react-intl"
import formatLargeNumber from "./formatLargeNumber"

interface FormatRelativeBpSProps {
    currentHoveredBotItem: Incrementor
    intl: IntlShape
    multipliedProduction: number
    incrementorMultiplier: number
}

function formatRelativeBpS({
    currentHoveredBotItem,
    intl,
    multipliedProduction,
    incrementorMultiplier
}: FormatRelativeBpSProps) {
    const baseText = 'botInfoDialog.relativeBpS'

    const { units, id, productionPerUnit } = currentHoveredBotItem
    const botUnits = units
    const botName = intl.formatMessage({ id: `botBuyList.${id}.name` })
    const botsMultipliedBitsPerSecondProduction = formatLargeNumber(Number((units * productionPerUnit * incrementorMultiplier).toFixed(2)), intl)
    const relativePercentageOfTotalBpSProduction = (((units * productionPerUnit * incrementorMultiplier)/multipliedProduction)*100).toFixed(2)

    return intl.formatMessage({id: baseText}, { botUnits, botName, botsMultipliedBitsPerSecondProduction, relativePercentageOfTotalBpSProduction })
}

export default formatRelativeBpS