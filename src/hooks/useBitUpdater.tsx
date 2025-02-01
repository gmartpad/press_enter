import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil'
import { autoIncrementorsState, bitState, enterPressesState, upgradesState } from '@state/atoms'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { type Upgrade } from '@upgrades'
import { useDebouncedProduction } from './useDebouncedProduction'
import { Incrementor } from '@state/defaultAutoIncrementors'
import checkUpgradeRequirements from '@utils/checkUpgradeRequirements'
import shallowEqualUpgrades from '@utils/shallowEqualUpgrades'
import shallowEqualIncrementors from '@utils/shallowEqualIncrementors'
import { debounce } from 'lodash'

interface IntervalConfig {
    updateInterval: number;
    slowUpdateInterval: number;
}

const DEFAULT_UPDATE_INTERVAL = 200
const BACKGROUND_UPDATE_INTERVAL = 3000
const SLOW_UPDATE_INTERVAL = 1000

const useBitUpdater = () => {
    const [autoIncrementors, setAutoIncrementors] = useRecoilState<Incrementor[]>(autoIncrementorsState)
    const upgrades = useRecoilValue<Upgrade[]>(upgradesState)
    const [bits, setBits] = useRecoilState(bitState)

    const lastUpdateRef = useRef<number>(Date.now())
    const intervalsRef = useRef<Set<NodeJS.Timeout>>(new Set())
    const configRef = useRef<IntervalConfig>({
        updateInterval: DEFAULT_UPDATE_INTERVAL,
        slowUpdateInterval: SLOW_UPDATE_INTERVAL
    })

    const currentProduction = useDebouncedProduction()
    const currentProductionByMS = useMemo(() => currentProduction / 1000, [currentProduction])

    // Memoized handlers
    const handleUpgradesMultiplicator = useCallback((incrementorId: string, currentUpgrades: Upgrade[]) => {
        let additive = 0
        let multiplicative = 1
        
        const selectedUpgrades = currentUpgrades.filter(
            (upgrade) => upgrade.purchased && (!upgrade.effects?.specific || upgrade.effects.specific?.incrementorId === incrementorId)
        )
        
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

    // Debounced localStorage update
    const debouncedSaveLastUpdateTime = useCallback(
        debounce((time: number) => {
            try {
                localStorage.setItem('lastUpdateTime', String(time))
            } catch (error) {
                console.error('Error saving last update time:', error)
            }
        }, 1000),
        []
    )

    // Recoil callbacks with proper error handling
    const handleRevealIncrementors = useRecoilCallback(({ snapshot, set }) => async () => {
        try {
            const currentBits = await snapshot.getPromise<number>(bitState)
            const currentIncrementors = await snapshot.getPromise<Incrementor[]>(autoIncrementorsState)

            const revealableIncrementors = currentIncrementors.filter(
                (incrementor) => incrementor.bitsToBeRevealed <= currentBits
            )

            const revealableIds = new Set(revealableIncrementors.map((incrementor) => incrementor.id))
            const updatedIncrementors = currentIncrementors.map(
                (incrementor) => revealableIds.has(incrementor.id)
                    ? { ...incrementor, revealed: true }
                    : incrementor
            )

            if (!shallowEqualIncrementors(currentIncrementors, updatedIncrementors)) {
                set(autoIncrementorsState, updatedIncrementors)
            }
        } catch (error) {
            console.error('Error revealing incrementors:', error)
        }
    }, [])

    const handleUpdateUpgrades = useRecoilCallback(({ snapshot, set }) => async () => {
        try {
            const [currentUpgrades, currentBits, currentIncrementors, currentEnterPresses] = await Promise.all([
                snapshot.getPromise<Upgrade[]>(upgradesState),
                snapshot.getPromise(bitState),
                snapshot.getPromise(autoIncrementorsState),
                snapshot.getPromise(enterPressesState)
            ])
            
            const purchasedUpgrades = currentUpgrades.filter(u => u.purchased)
            const listableUpgrades = currentUpgrades.filter(upgrade => 
                checkUpgradeRequirements(
                    upgrade,
                    currentBits,
                    currentIncrementors,
                    purchasedUpgrades,
                    currentEnterPresses
                )
            )
        
            const listableIds = new Set(listableUpgrades.map(u => u.id))
            const updatedUpgrades = currentUpgrades.map(upgrade => 
                listableIds.has(upgrade.id) 
                    ? { ...upgrade, purchasable: true } 
                    : upgrade
            )
        
            if (!shallowEqualUpgrades(currentUpgrades, updatedUpgrades)) {
                set(upgradesState, updatedUpgrades)
            }
        } catch (error) {
            console.error('Error updating upgrades:', error)
        }
    }, [])

    const setBitsProduced = useRecoilCallback(({ snapshot, set }) => async (multiplier: number) => {
        try {
            const [currentIncrementors, currentUpgrades] = await Promise.all([
                snapshot.getPromise(autoIncrementorsState),
                snapshot.getPromise<Upgrade[]>(upgradesState)
            ])

            const updatedIncrementors = currentIncrementors.map(inc => {
                const upgradesMultiplicator = handleUpgradesMultiplicator(inc.id, currentUpgrades)
                return {
                    ...inc,
                    bitsProducedSoFar: inc.bitsProducedSoFar + 
                        (inc.units * inc.productionPerUnit * multiplier * upgradesMultiplicator)
                }
            })
            
            set(autoIncrementorsState, updatedIncrementors)
        } catch (error) {
            console.error('Error setting bits produced:', error)
        }
    }, [handleUpgradesMultiplicator])

    
    // Initialize intervals
    const startIntervals = useCallback(() => {
        // Clear any existing intervals
        const existingIntervals = Array.from(intervalsRef.current)
        intervalsRef.current.clear()
        existingIntervals.forEach(clearInterval)
        
        // Main update interval
        const mainInterval = setInterval(() => {
            const now = Date.now()
            lastUpdateRef.current = now
            setBits(currVal => currVal + (currentProductionByMS * configRef.current.updateInterval))
            setBitsProduced(configRef.current.updateInterval / 1000)
            debouncedSaveLastUpdateTime(now)
        }, configRef.current.updateInterval)
        
        // Slow update interval for incrementors and upgrades
        const slowInterval = setInterval(() => {
            handleRevealIncrementors()
            handleUpdateUpgrades()
        }, configRef.current.slowUpdateInterval)
        
        intervalsRef.current.add(mainInterval)
        intervalsRef.current.add(slowInterval)
    }, [currentProductionByMS, setBitsProduced, debouncedSaveLastUpdateTime, 
        handleRevealIncrementors, handleUpdateUpgrades])
    
    // Visibility change handler
    const handleVisibilityChange = useCallback(() => {
        configRef.current.updateInterval = document.hidden ? 
            BACKGROUND_UPDATE_INTERVAL : 
            DEFAULT_UPDATE_INTERVAL;
        startIntervals(); // Restart intervals with the new delay
    }, [startIntervals]);

    // Initial setup effect
    useEffect(() => {
        try {
            const lastUpdateTime = localStorage.getItem('lastUpdateTime')
            if (lastUpdateTime) {
                const elapsedTime = Math.floor((Date.now() - Number(lastUpdateTime)) / 1000)

                setBits(currVal => currVal + elapsedTime * currentProduction)

                const elapsedUpdatedIncrementors = autoIncrementors.map(inc => {
                    const upgradesMultiplicator = handleUpgradesMultiplicator(inc.id, upgrades)
                    return {
                        ...inc,
                        bitsProducedSoFar: inc.bitsProducedSoFar + 
                            (inc.units * inc.productionPerUnit * elapsedTime * upgradesMultiplicator)
                    }
                })
                setAutoIncrementors(elapsedUpdatedIncrementors)
            }

            lastUpdateRef.current = Date.now()
            debouncedSaveLastUpdateTime(lastUpdateRef.current)
        } catch (error) {
            console.error('Error in initial setup:', error)
        }
    }, [])

    // Main effect for intervals and event listeners
    useEffect(() => {
        document.addEventListener('visibilitychange', handleVisibilityChange)
        startIntervals()

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange)
            intervalsRef.current.forEach(interval => clearInterval(interval))
            intervalsRef.current.clear()
            debouncedSaveLastUpdateTime.cancel()
        }
    }, [handleVisibilityChange, startIntervals, debouncedSaveLastUpdateTime])

    return { setBits, bits }
}

export default useBitUpdater