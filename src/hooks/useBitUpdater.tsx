import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil'
import { autoIncrementorsState, BitIntervals, bitIntervalsState, bitState, upgradesState } from '@state/atoms'
import { useCallback, useEffect, useMemo } from 'react'
import { debounce } from 'lodash'
import { type Upgrade } from '@upgrades'
import { useDebouncedProduction } from './useDebouncedProduction'
import handleClearInterval from '@utils/handleClearInterval'
import { Incrementor } from '@state/defaultAutoIncrementors'

const useBitUpdater = () => {
    const [bitIntervals, setBitIntervals] = useRecoilState<BitIntervals>(bitIntervalsState)
    const [autoIncrementors, setAutoIncrementors] = useRecoilState<Incrementor[]>(autoIncrementorsState)
    const upgrades = useRecoilValue<Upgrade[]>(upgradesState)

    const handleUpgradesMultiplicator = useCallback((incrementorId: string, upgrades: Upgrade[]) => {
        let additive = 0
        let multiplicative = 1
        
        const selectedUpgrades = upgrades.filter((upgrade) => upgrade.purchased && (!upgrade.effects?.specific || upgrade.effects.specific?.incrementorId == incrementorId))
        
        selectedUpgrades.forEach(upgrade => {
            if (upgrade.effects.global) {
                if (upgrade.effects.global.additive) additive += upgrade.effects.global.additive
                if (upgrade.effects.global.multiplicative) multiplicative *= upgrade.effects.global.multiplicative
            }
            
            if (upgrade.effects.specific?.incrementorId === incrementorId) {
                if (upgrade.effects.specific?.additive) additive += upgrade.effects.specific.additive
                if (upgrade.effects.specific?.multiplicative) multiplicative *= upgrade.effects.specific.multiplicative
            }
        })

        return (1 + additive) * multiplicative
    }, [])

    const setBitsProduced = useRecoilCallback(({ snapshot, set, }) => async (multiplier: number) => {
        const currentIncrementors = await snapshot.getPromise(autoIncrementorsState)
        const upgrades = await snapshot.getPromise<Upgrade[]>(upgradesState)

        const updatedIncrementors = currentIncrementors.map(inc => {
            const upgradesMultiplicator = handleUpgradesMultiplicator(inc.id, upgrades)

            return {
                ...inc,
                bitsProducedSoFar: inc.bitsProducedSoFar + (inc.units * inc.productionPerUnit * multiplier * upgradesMultiplicator)
            }
        })
        
        set(autoIncrementorsState, updatedIncrementors)
    })

    const [bits, setBits] = useRecoilState(bitState)
    const currentProduction = useDebouncedProduction()

    const currentProductionByMS = useMemo(() => currentProduction / 1000, [currentProduction])

    const saveLastUpdateTime = useMemo(
        () =>
            debounce((time: number) => {
                localStorage.setItem('lastUpdateTime', String(time))
            }, 500),
        []
    )

    useEffect(() => {
        // Retrieve the last update time from localStorage
        const lastUpdateTime = localStorage.getItem('lastUpdateTime')
        if (lastUpdateTime) {
            const elapsedTime = Math.floor((Date.now() - Number(lastUpdateTime)) / 1000)
            // Increment bits based on elapsed time
            setBits(currVal => currVal + elapsedTime * currentProduction)
            
            const elapsedUpdatedIncrementors = autoIncrementors.map((inc) => {
                const upgradesMultiplicator = handleUpgradesMultiplicator(inc.id, upgrades)

                return {
                    ...inc,
                    bitsProducedSoFar: inc.bitsProducedSoFar + (inc.units * inc.productionPerUnit * 1 * upgradesMultiplicator * elapsedTime)
                }
            })
            setAutoIncrementors(elapsedUpdatedIncrementors)
        }

        // Update the last update time in localStorage
        localStorage.setItem('lastUpdateTime', String(Date.now()))
        // eslint-disable-next-line
    }, [])

    const handleVisibilityChange = useCallback(() => {
        const updateBitsQuickly = async () => {
            setBits(currVal => currVal + currentProductionByMS * 1000)
            await setBitsProduced(1)
            saveLastUpdateTime(Date.now())
        }

        if(bitIntervals.quickUpdateIntervalId) {
            clearInterval(bitIntervals.quickUpdateIntervalId)
        }

        setBitIntervals((prevValue) => ({
            ...prevValue,
            quickUpdateIntervalId: setInterval(updateBitsQuickly, 1000)
        }))
    }, [bitIntervals, currentProduction, currentProductionByMS])

    useEffect(() => {
        handleVisibilityChange()
      
        return () => {
            handleClearInterval(bitIntervals.quickUpdateIntervalId)
            saveLastUpdateTime.cancel()
        }
    }, [
        saveLastUpdateTime,
        currentProduction,
    ])

    return { setBits, bits }
}

export default useBitUpdater
