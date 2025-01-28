import { autoIncrementorsState, bitState, configState } from '@state/atoms'
import { type Incrementor } from '@state/defaultAutoIncrementors'
import handleRecalculatePricePerUnit from '@utils/handleRecalculatePricePerUnit'
import updateSingleIncrementorValue from '@utils/updateSingleIncrementorValue'
import { useRecoilCallback } from 'recoil'

const useUpdateAutoIncrementors = () => {
    return useRecoilCallback(({ snapshot, set }) => async (item: Incrementor) => {
        const bits = await snapshot.getPromise(bitState)
        const config = await snapshot.getPromise(configState)
        const autoIncrementors = await snapshot.getPromise(autoIncrementorsState)

        const { name, units } = item

        const recalculatedArray = handleRecalculatePricePerUnit(item, config)

        const currentPrice = recalculatedArray[0]
        const currentSumValueOfAllSoldPrices = recalculatedArray[1]

        // Buying Bot
        if (config.botBulkMode === 1 && bits >= currentPrice) {
            set(bitState, bits - currentPrice)

            const updatedIncrementors = updateSingleIncrementorValue(autoIncrementors, name, {
                units: units + config.botBulkAmount,
                pricePerUnit: currentPrice * 1.2,
            })

            set(autoIncrementorsState, updatedIncrementors)
        }

        // Selling Bot
        if (config.botBulkMode === 0 && units >= 0) {
            set(bitState, bits + currentSumValueOfAllSoldPrices * 0.4)

            const updatedIncrementors = updateSingleIncrementorValue(autoIncrementors, name, {
                units: units - Math.min(units, config.botBulkAmount),
                pricePerUnit: currentPrice,
            })

            set(autoIncrementorsState, updatedIncrementors)
        }
    })
}

export default useUpdateAutoIncrementors
