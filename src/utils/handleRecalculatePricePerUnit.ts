import { type Config } from '@state/atoms'
import { type Incrementor } from '@state/defaultAutoIncrementors'

function handleRecalculatePricePerUnit(item: Incrementor, config: Config) {
    const currentBulkMode = config.botBulkMode
    const currentBulkAmount = config.botBulkAmount

    let price = item.pricePerUnit

    // Buying Mode
    if (currentBulkMode === 1) {
        if (currentBulkAmount > 1) {
            for (let i = 1; i <= currentBulkAmount; i++) {
                price = price * 1.2
            }
            return [price]
        }
        return [price]
    }

    // Selling Mode
    if (currentBulkMode === 0) {
    // When selling the machines, you'll only receive 40% of the buying price back
    // const discountMultiplierWhenSelling = 0.4
        let sumValueOfAllSoldPrices = 0

        if (currentBulkAmount > 1) {
            for (let i = 1; i <= Math.min(item.units, currentBulkAmount); i++) {
                const newSellSumPrice = price / 1.2
                price = newSellSumPrice

                sumValueOfAllSoldPrices += price
            }
            return [price, sumValueOfAllSoldPrices]
        }

        const newSellSumPrice = price / 1.2
        return [newSellSumPrice, newSellSumPrice]
    }

    return [price]
}

export default handleRecalculatePricePerUnit
