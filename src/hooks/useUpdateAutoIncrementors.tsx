import { autoIncrementorsState, bitState, configState } from '@state/atoms'
import { type Incrementor } from '@state/defaultAutoIncrementors'
import handleRecalculatePricePerUnit from '@utils/handleRecalculatePricePerUnit'
import updateSingleIncrementorValue from '@utils/updateSingleIncrementorValue'
import { useSetAtom, useStore } from 'jotai'
import { useCallback } from 'react'

const useUpdateAutoIncrementors = () => {
    const store = useStore()
    const setBits = useSetAtom(bitState)
    const setAutoIncrementors = useSetAtom(autoIncrementorsState)
    return useCallback((item: Incrementor) => {
        // Synchronous state access
        const bits = store.get(bitState)
        const config = store.get(configState)
        const autoIncrementors = store.get(autoIncrementorsState)
        const { name, units } = item

        const recalculatedArray = handleRecalculatePricePerUnit(item, config)
        const currentPrice = recalculatedArray[0]
        const currentSumValueOfAllSoldPrices = recalculatedArray[1]

        // Atomic buying transaction
        if (config.botBulkMode === 1 && bits >= currentPrice) {
            setBits(bits - currentPrice)

            const updatedIncrementors = updateSingleIncrementorValue(
                autoIncrementors,
                name,
                {
                    units: units + config.botBulkAmount,
                    pricePerUnit: currentPrice * 1.2,
                }
            )

            setAutoIncrementors(updatedIncrementors)
        }

        // Atomic selling transaction
        if (config.botBulkMode === 0 && units >= 0) {
            setBits(bits + currentSumValueOfAllSoldPrices * 0.4)

            const updatedIncrementors = updateSingleIncrementorValue(
                autoIncrementors,
                name,
                {
                    units: units - Math.min(units, config.botBulkAmount),
                    pricePerUnit: currentPrice,
                }
            )

            setAutoIncrementors(updatedIncrementors)
        }
    },
    [setAutoIncrementors, setBits, store] // No additional dependencies needed
    )
}

export default useUpdateAutoIncrementors
