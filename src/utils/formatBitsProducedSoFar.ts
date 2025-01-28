import { type Incrementor } from "@state/defaultAutoIncrementors"
import formatLargeNumber from "./formatLargeNumber"
import { type IntlShape } from "react-intl"

interface FormatProducedSoFarProps {
    currentHoveredBotItem: Incrementor
    intl: IntlShape
}

function formatBitsProducedSoFar({
    currentHoveredBotItem,
    intl
}: FormatProducedSoFarProps) {
    const baseText = 'botInfoDialog.bitsProducedSoFar'

    const { bitsProducedSoFar } = currentHoveredBotItem

    const bitsProduced = formatLargeNumber(Number(bitsProducedSoFar.toFixed(0)), intl)

    return intl.formatMessage({ id: baseText}, { bitsProduced })
}

export default formatBitsProducedSoFar