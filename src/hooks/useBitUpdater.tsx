import { useSetAtom, useStore } from 'jotai'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import {
    autoIncrementorsState,
    bitState,
    enterPressesState,
    upgradesState,
    currentProductionState
} from '@state/atoms'
import shallowEqualUpgrades from '@utils/shallowEqualUpgrades'
import shallowEqualIncrementors from '@utils/shallowEqualIncrementors'
import { Upgrade } from '@state/upgrades'
import updateUpgrades from '@utils/updateUpgrades'
import useDebouncedProduction from './useDebouncedProduction'

interface IntervalConfig {
  updateInterval: number
  slowUpdateInterval: number
}

const DEFAULT_UPDATE_INTERVAL = 200
const BACKGROUND_UPDATE_INTERVAL = 3000
const SLOW_UPDATE_INTERVAL = 600

const useBitUpdater = () => {
    const store = useStore()
    const setBits = useSetAtom(bitState)
    const setAutoIncrementors = useSetAtom(autoIncrementorsState)
    const setUpgrades = useSetAtom(upgradesState)
    const currentProduction = useDebouncedProduction() as number

    const lastUpdateRef = useRef<number>(Date.now())
    const intervalsRef = useRef<Set<NodeJS.Timeout>>(new Set())
    const configRef = useRef<IntervalConfig>({
        updateInterval: DEFAULT_UPDATE_INTERVAL,
        slowUpdateInterval: SLOW_UPDATE_INTERVAL
    })

    const currentProductionByMS = useMemo(
        () => currentProduction / 1000,
        [currentProduction]
    )

    const handleUpgradesMultiplicator = useCallback(
        (incrementorId: string, currentUpgrades: Upgrade[]) => {
            let additive = 0
            let multiplicative = 1

            const selectedUpgrades = currentUpgrades.filter(
                (upgrade) =>
                    upgrade.purchased &&
          (!upgrade.effects?.specific ||
            upgrade.effects.specific?.incrementorId === incrementorId)
            )

            selectedUpgrades.forEach((upgrade) => {
                if (upgrade.effects.global) {
                    additive += upgrade.effects.global.additive ?? 0
                    multiplicative *= upgrade.effects.global.multiplicative ?? 1
                }

                if (upgrade.effects.specific?.incrementorId === incrementorId) {
                    additive += upgrade.effects.specific.additive ?? 0
                    multiplicative *= upgrade.effects.specific.multiplicative ?? 1
                }
            })

            return (1 + additive) * multiplicative
        },
        []
    )

    const saveLastUpdateTime = useCallback(
        (time: number) => {
            try {
                localStorage.setItem('lastUpdateTime', String(time))
            } catch (error) {
                console.error('Error saving last update time:', error)
            }
        },[]
    )

    const handleRevealIncrementors = useCallback(() => {
        try {
            const currentBits = store.get(bitState)
            const currentIncrementors = store.get(autoIncrementorsState)

            const revealableIncrementors = currentIncrementors.filter(
                (incrementor) => incrementor.bitsToBeRevealed <= currentBits
            )

            const revealableIds = new Set(
                revealableIncrementors.map((incrementor) => incrementor.id)
            )
            const updatedIncrementors = currentIncrementors.map((incrementor) =>
                revealableIds.has(incrementor.id)
                    ? { ...incrementor, revealed: true }
                    : incrementor
            )

            if (!shallowEqualIncrementors(currentIncrementors, updatedIncrementors)) {
                setAutoIncrementors(updatedIncrementors)
            }
        } catch (error) {
            console.error('Error revealing incrementors:', error)
        }
    }, [store, setAutoIncrementors])

    const handleUpdateUpgrades = useCallback(() => {
        try {
            const currentUpgrades = store.get(upgradesState)
            const currentBits = store.get(bitState)
            const currentIncrementors = store.get(autoIncrementorsState)
            const currentEnterPresses = store.get(enterPressesState)

            const updatedUpgrades = updateUpgrades(
                currentUpgrades,
                currentBits,
                currentIncrementors,
                currentEnterPresses
            )

            if (!shallowEqualUpgrades(currentUpgrades, updatedUpgrades)) {
                setUpgrades(updatedUpgrades)
            }
        } catch (error) {
            console.error('Error updating upgrades:', error)
        }
    }, [store, setUpgrades])

    const setBitsProduced = useCallback(
        (multiplier: number) => {
            try {
                const currentIncrementors = store.get(autoIncrementorsState)
                const currentUpgrades = store.get(upgradesState)

                const updatedIncrementors = currentIncrementors.map((inc) => {
                    const upgradesMultiplicator = handleUpgradesMultiplicator(
                        inc.id,
                        currentUpgrades
                    )
                    return {
                        ...inc,
                        bitsProducedSoFar:
              inc.bitsProducedSoFar +
              inc.units *
                inc.productionPerUnit *
                multiplier *
                upgradesMultiplicator
                    }
                })

                setAutoIncrementors(updatedIncrementors)
            } catch (error) {
                console.error('Error setting bits produced:', error)
            }
        },
        [handleUpgradesMultiplicator, store, setAutoIncrementors]
    )

    const startIntervals = useCallback(() => {
        const existingIntervals = Array.from(intervalsRef.current)
        intervalsRef.current.clear()
        existingIntervals.forEach(clearInterval)

        const mainInterval = setInterval(() => {
            const currentBits = store.get(bitState)
            const now = Date.now()
            lastUpdateRef.current = now
            setBits(currentBits + (currentProductionByMS * configRef.current.updateInterval))
            setBitsProduced(configRef.current.updateInterval / 1000)
            saveLastUpdateTime(now)
        }, configRef.current.updateInterval)

        const slowInterval = setInterval(() => {
            handleRevealIncrementors()
            handleUpdateUpgrades()
        }, configRef.current.slowUpdateInterval)

        intervalsRef.current.add(mainInterval)
        intervalsRef.current.add(slowInterval)
    }, [
        currentProductionByMS,
        saveLastUpdateTime,
        handleRevealIncrementors,
        handleUpdateUpgrades,
        setBits,
        setBitsProduced,
        store
    ])

    const handleVisibilityChange = useCallback(() => {
        configRef.current.updateInterval = document.hidden
            ? BACKGROUND_UPDATE_INTERVAL
            : DEFAULT_UPDATE_INTERVAL
        startIntervals()
    }, [startIntervals])

    useEffect(() => {
        try {
            const lastUpdateTime = localStorage.getItem('lastUpdateTime')
            if (lastUpdateTime) {
                const currentBits = store.get(bitState)
                const elapsedTime = Math.floor(
                    (Date.now() - Number(lastUpdateTime)) / 1000
                )
                const currentProductionValue = store.get(currentProductionState)
                
                setBits(currentBits + (elapsedTime * currentProductionValue))

                const currentIncrementors = store.get(autoIncrementorsState)
                const currentUpgrades = store.get(upgradesState)

                const elapsedUpdatedIncrementors = currentIncrementors.map((inc) => {
                    const upgradesMultiplicator = handleUpgradesMultiplicator(
                        inc.id,
                        currentUpgrades
                    )
                    return {
                        ...inc,
                        bitsProducedSoFar:
                            inc.bitsProducedSoFar +
                            inc.units *
                                inc.productionPerUnit *
                                elapsedTime *
                                upgradesMultiplicator
                    }
                })
                setAutoIncrementors(elapsedUpdatedIncrementors)
            }

            lastUpdateRef.current = Date.now()
            saveLastUpdateTime(lastUpdateRef.current)
        } catch (error) {
            console.error('Error in initial setup:', error)
        }
    }, [setBits, store, saveLastUpdateTime, handleUpgradesMultiplicator, setAutoIncrementors])

    useEffect(() => {
        document.addEventListener('visibilitychange', handleVisibilityChange)
        startIntervals()

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange)
            intervalsRef.current.forEach((interval) => clearInterval(interval))
            intervalsRef.current.clear()
        }
    }, [handleVisibilityChange, startIntervals, saveLastUpdateTime])

    return { setBits }
}

export default useBitUpdater