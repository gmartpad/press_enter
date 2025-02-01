import { autoIncrementorsState, bitState, configState } from '@state/atoms'
import { type Incrementor } from '@state/defaultAutoIncrementors'
import handleRecalculatePricePerUnit from '@utils/handleRecalculatePricePerUnit'
import updateSingleIncrementorValue from '@utils/updateSingleIncrementorValue'
import { useRecoilTransaction_UNSTABLE } from 'recoil'

const useUpdateAutoIncrementors = () => {
    return useRecoilTransaction_UNSTABLE(
        ({ get, set }) => (item: Incrementor) => {
            // Synchronous state access
            const bits = get(bitState)
            const config = get(configState)
            const autoIncrementors = get(autoIncrementorsState)
            const { name, units } = item

            const recalculatedArray = handleRecalculatePricePerUnit(item, config)
            const currentPrice = recalculatedArray[0]
            const currentSumValueOfAllSoldPrices = recalculatedArray[1]

            // Atomic buying transaction
            if (config.botBulkMode === 1 && bits >= currentPrice) {
                set(bitState, bits - currentPrice)

                const updatedIncrementors = updateSingleIncrementorValue(
                    autoIncrementors,
                    name,
                    {
                        units: units + config.botBulkAmount,
                        pricePerUnit: currentPrice * 1.2,
                    }
                )

                set(autoIncrementorsState, updatedIncrementors)
            }

            // Atomic selling transaction
            if (config.botBulkMode === 0 && units >= 0) {
                set(bitState, bits + currentSumValueOfAllSoldPrices * 0.4)

                const updatedIncrementors = updateSingleIncrementorValue(
                    autoIncrementors,
                    name,
                    {
                        units: units - Math.min(units, config.botBulkAmount),
                        pricePerUnit: currentPrice,
                    }
                )

                set(autoIncrementorsState, updatedIncrementors)
            }
        },
        [] // No additional dependencies needed
    )
}

export default useUpdateAutoIncrementors
